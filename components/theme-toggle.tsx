"use client";

import { MoonIcon, SunIcon } from "@/components/icons";

let transitionTimer: number | undefined;

export function ThemeToggle() {
  function toggleTheme() {
    const root = document.documentElement;
    const nextTheme = root.dataset.theme === "light" ? "dark" : "light";

    root.classList.add("theme-transition");
    root.dataset.theme = nextTheme;

    window.clearTimeout(transitionTimer);
    transitionTimer = window.setTimeout(() => {
      root.classList.remove("theme-transition");
    }, 200);

    try {
      window.localStorage.setItem("theme", nextTheme);
    } catch {
      // Theme still switches for this visit when storage is unavailable.
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label="Toggle color theme"
      onClick={toggleTheme}
    >
      <SunIcon className="theme-icon theme-icon-sun size-4" />
      <MoonIcon className="theme-icon theme-icon-moon size-4" />
    </button>
  );
}
