# Gaurav Raut — portfolio

A compact single-page developer portfolio built with the Next.js App Router,
TypeScript, and Tailwind CSS v4. Server components handle everything except the
theme toggle; content, links, and theme tokens are local, with no runtime
requests to third parties.

## Run it

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build
pnpm start
```

Requires Node 20.9 or newer and pnpm.

## Edit the content

Everything profile-specific lives in [`data/profile.ts`](data/profile.ts):
name, handle, role, bio, social links, Now, experience, projects, skills,
certifications, pinned repositories, and contact copy. The page reads that file
at build time. Structural labels (section rails, skip link, footer, share-card
captions) stay in their components.

Two values at the top of the content block drive every derived path:

- `email` feeds the hero/contact `mailto:` links and the JSON-LD `email`; the
  contact CTA label and subject live in `contact.cta` and `contact.subject`.
- `siteUrl` feeds canonical metadata, Open Graph URLs, `sitemap.xml`, and
  `robots.txt`. Trailing slashes are stripped automatically.

The checked-in copy is scaffolded. Anything in `[SQUARE BRACKETS]` — roles,
dates, organisations, project outcomes, certifications, and repository links —
is an explicit placeholder, not a factual claim. Replace all of it, plus
`hello@example.com` and `https://example.com`, before publishing.

Technology names in project stacks and skills are resolved through
[`data/tech-icons.ts`](data/tech-icons.ts). Add a mapping to
`simple-icons` there; unknown names still render as text chips.

## Theme

Dark is the default; light is one click away. The choice is stored in
`localStorage` and restored by an inline bootstrap script before the page
paints. Palette values live once in [`app/theme.ts`](app/theme.ts) for the
document chrome and again as CSS tokens in
[`app/globals.css`](app/globals.css) for the UI. Update both when changing the
palette.

## Checks

```bash
pnpm lint
pnpm build
pnpm test:e2e   # starts its own dev server on port 3217
```

The browser contract uses Playwright Core with the installed Google Chrome
(`/usr/bin/google-chrome`, override with `CHROME_PATH`). It covers section
order, first-paint theme restore, reload persistence, responsive overflow,
landmarks and skip link, technology icons, mailto consistency, reduced motion,
accessible link names, and crawl metadata.

## Structure

- `app/layout.tsx` — fonts, metadata, viewport, theme bootstrap.
- `app/page.tsx` — section composition and Person JSON-LD.
- `app/globals.css` — design tokens, layout, focus, motion.
- `components/` — header, hero, section shell, and body sections.
- `data/` — typed content and the technology icon registry.
- `app/share-card.tsx` + `opengraph-image.tsx` / `twitter-image.tsx` —
  generated 1200×630 share cards.
- `app/sitemap.ts`, `app/robots.ts`, `app/icon.svg` — crawl and favicon assets.
- `app/fonts/` — self-hosted Instrument Sans and Fragment Mono subsets, plus
  the mono TTF used only to render share cards at build time.

## Deploy

The build output is static for the page and metadata routes, so it deploys to
Vercel or any Node host. Set the real domain in `data/profile.ts` first;
`siteUrl` is the canonical origin used by every generated URL.
