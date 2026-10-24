"use client";

import { useSyncExternalStore } from "react";
import { MoonIcon, SunIcon } from "@/components/icons";
import { THEME_STORAGE_KEY, themeColors, type Theme } from "@/app/theme";

let transitionTimer: number | undefined;

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerSnapshot(): Theme {
  return "dark";
}

function syncThemeColor(theme: Theme) {
  const metas = document.querySelectorAll<HTMLMetaElement>(
    'meta[name="theme-color"]',
  );

  if (metas.length === 0) {
    const meta = document.createElement("meta");
    meta.name = "theme-color";
    meta.content = themeColors[theme];
    document.head.append(meta);
    return;
  }

  metas.forEach((meta) => {
    meta.content = themeColors[theme];
  });
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme: Theme = root.dataset.theme === "light" ? "dark" : "light";

    root.classList.add("theme-transition");
    root.dataset.theme = nextTheme;
    syncThemeColor(nextTheme);

    window.clearTimeout(transitionTimer);
    transitionTimer = window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 200);

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Theme still switches for this visit when storage is unavailable.
    }
  }

  const label = `Switch to ${theme === "dark" ? "light" : "dark"} theme`;

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={label}
      title={label}
      data-current-theme={theme}
      onClick={toggleTheme}
    >
      <SunIcon className="theme-icon theme-icon-sun size-4" />
      <MoonIcon className="theme-icon theme-icon-moon size-4" />
    </button>
  );
}
