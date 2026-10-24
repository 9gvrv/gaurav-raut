import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createWriteStream, mkdirSync } from "node:fs";
import { after, before, test } from "node:test";
import { chromium } from "playwright-core";

const PORT = 3217;
const BASE_URL = `http://127.0.0.1:${PORT}`;
const CHROME =
  process.env.CHROME_PATH ?? "/usr/bin/google-chrome";
const LOG_PATH = "/tmp/opencode/portfolio-dev.log";

let server;
let browser;

async function waitForServer(url, timeoutMs = 120_000) {
  const started = Date.now();
  let lastError;

  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }

    if (server?.exitCode !== null && server?.exitCode !== undefined) {
      throw new Error(`Dev server exited with code ${server.exitCode}`);
    }

    await new Promise((resolve) => setTimeout(resolve, 400));
  }

  throw new Error(
    `Timed out waiting for ${url}: ${lastError?.message ?? "unknown error"}`,
  );
}

async function openPage(options = {}) {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
    ...options,
  });
  const page = await context.newPage();
  await page.goto(BASE_URL, { waitUntil: "load" });
  await page.locator("h1").waitFor({ timeout: 30_000 });
  return { context, page };
}

before(
  async () => {
    mkdirSync("/tmp/opencode", { recursive: true });
    const log = createWriteStream(LOG_PATH, { flags: "a" });

    server = spawn(
      process.execPath,
      ["node_modules/next/dist/bin/next", "dev", "-p", String(PORT)],
      {
        cwd: process.cwd(),
        env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
        detached: true,
        stdio: ["ignore", "pipe", "pipe"],
      },
    );

    server.stdout.pipe(log);
    server.stderr.pipe(log);
    server.on("exit", (code) => {
      log.write(`\n[dev server exited with ${code}]\n`);
    });

    await waitForServer(BASE_URL);
    browser = await chromium.launch({
      executablePath: CHROME,
      headless: true,
      args: ["--no-sandbox", "--disable-dev-shm-usage"],
    });
  },
  { timeout: 150_000 },
);

after(async () => {
  await browser?.close();

  if (server?.pid) {
    try {
      process.kill(-server.pid, "SIGTERM");
    } catch {
      // The server may already be gone.
    }
  }
});

test("renders one h1 and all sections in the approved order", async () => {
  const { context, page } = await openPage();
  try {
    assert.equal((await page.locator("h1").innerText()).trim(), "Gaurav Raut");

    const sections = await page
      .locator("main section")
      .evaluateAll((elements) =>
        elements.map((element) => element.getAttribute("data-section")),
      );

    assert.deepEqual(sections, [
      "intro",
      "now",
      "experience",
      "projects",
      "skills",
      "certifications",
      "open-source",
      "contact",
    ]);
  } finally {
    await context.close();
  }
});

test("theme toggle switches to light and survives a reload", async () => {
  const { context, page } = await openPage();
  try {
    assert.equal(
      await page.locator("html").getAttribute("data-theme"),
      "dark",
      "dark theme should be the default",
    );

    const toggle = page.getByRole("button", { name: /color theme/i });
    await toggle.click();

    assert.equal(await page.locator("html").getAttribute("data-theme"), "light");
    assert.equal(
      await page.evaluate(() => localStorage.getItem("theme")),
      "light",
    );

    // Read the light token itself, then wait for the body to paint it.
    // Sampling the body directly can catch a mid-transition frame.
    const lightBackground = await page.evaluate(() => {
      const probe = document.createElement("div");
      probe.style.backgroundColor = "var(--bg)";
      document.body.append(probe);
      const color = getComputedStyle(probe).backgroundColor;
      probe.remove();
      return color;
    });
    await page.waitForFunction(
      (expected) => getComputedStyle(document.body).backgroundColor === expected,
      lightBackground,
    );

    await page.reload({ waitUntil: "load" });
    assert.equal(await page.locator("html").getAttribute("data-theme"), "light");
    await page.waitForFunction(
      (expected) => getComputedStyle(document.body).backgroundColor === expected,
      lightBackground,
    );

    const headScripts = await page
      .locator("head script")
      .evaluateAll((scripts) => scripts.map((script) => script.textContent ?? ""));
    assert.ok(
      headScripts.some((content) => content.includes("localStorage")),
      "theme should be restored by an inline head script before paint",
    );
  } finally {
    await context.close();
  }
});

test("page has landmarks, a skip link and an accessible theme control", async () => {
  const { context, page } = await openPage();
  try {
    assert.equal(await page.locator("header").count(), 1);
    assert.equal(await page.locator("main").count(), 1);
    assert.equal(await page.locator("footer").count(), 1);

    const skipLink = page.getByRole("link", { name: /skip to content/i });
    assert.equal(await skipLink.getAttribute("href"), "#main-content");

    const toggle = page.getByRole("button", { name: /color theme/i });
    assert.ok((await toggle.boundingBox()).width >= 44);
    assert.ok((await toggle.boundingBox()).height >= 44);
  } finally {
    await context.close();
  }
});

test("technology chips include recognisable icons, not just text", async () => {
  const { context, page } = await openPage();
  try {
    const icons = page.locator("[data-tech-icon] svg");
    const iconCount = await icons.count();
    assert.ok(
      iconCount >= 8,
      `expected at least 8 technology icons, found ${iconCount}`,
    );

    const decorative = await icons.evaluateAll((elements) =>
      elements.every((element) => element.getAttribute("aria-hidden") === "true"),
    );
    assert.ok(decorative, "technology marks should be decorative");

    const chipsHaveText = await page
      .locator(".tech-chip")
      .evaluateAll((elements) =>
        elements.every((element) => (element.textContent ?? "").trim().length > 0),
      );
    assert.ok(chipsHaveText, "every technology chip needs a readable label");
  } finally {
    await context.close();
  }
});

test("contact call to action opens a mail draft", async () => {
  const { context, page } = await openPage();
  try {
    const emailLink = page.getByRole("link", { name: /email gaurav/i });
    assert.match(await emailLink.getAttribute("href"), /^mailto:/);
    assert.ok(await emailLink.isVisible());
  } finally {
    await context.close();
  }
});

test("no viewport width causes sideways scrolling", async () => {
  const { context, page } = await openPage();
  try {
    for (const width of [320, 360, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      const overflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth - document.documentElement.clientWidth,
      );
      assert.ok(
        overflow <= 1,
        `expected no horizontal overflow at ${width}px, got ${overflow}px`,
      );
    }
  } finally {
    await context.close();
  }
});

test("reduced motion disables the one page-load fade", async () => {
  const { context, page } = await openPage();
  try {
    await page.emulateMedia({ reducedMotion: "reduce" });

    const fade = page.locator("[data-page-fade]");
    assert.equal(await fade.count(), 1);

    const animation = await fade.evaluate(
      (element) => getComputedStyle(element).animationName,
    );
    assert.equal(animation, "none");
  } finally {
    await context.close();
  }
});

test("every visible link has an accessible name", async () => {
  const { context, page } = await openPage();
  try {
    const unlabelled = await page.locator("a").evaluateAll((links) =>
      links
        .filter((link) => link.offsetParent !== null)
        .filter((link) => {
          const text = (link.textContent ?? "").trim();
          return text.length === 0 && !link.getAttribute("aria-label");
        })
        .map((link) => link.getAttribute("href")),
    );

    assert.deepEqual(unlabelled, []);
  } finally {
    await context.close();
  }
});

test("metadata, social image, sitemap and robots are present", async () => {
  const html = await (await fetch(BASE_URL)).text();

  assert.match(html, /<title>[^<]*Gaurav Raut[^<]*<\/title>/);
  assert.match(html, /name="description" content="[^"]+"/);
  assert.match(html, /property="og:image"/);
  assert.match(html, /name="twitter:card" content="summary_large_image"/);

  const sitemap = await fetch(`${BASE_URL}/sitemap.xml`);
  assert.equal(sitemap.status, 200);
  assert.match(await sitemap.text(), /<urlset/);

  const robots = await fetch(`${BASE_URL}/robots.txt`);
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap:/);
});
