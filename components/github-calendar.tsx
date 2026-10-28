"use client";

import { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import type { ColorScheme } from "./github-calendar-activity";

/**
 * The contribution graph loads client-only (`ssr: false`): it fetches data in
 * the browser, and its loading animation produces different markup on the
 * server and client, which would break hydration if prerendered. The chunk
 * therefore renders nothing during static generation and nothing while the
 * module loads.
 */
const GithubCalendarActivity = dynamic(
  () =>
    import("./github-calendar-activity").then(
      (module) => module.GithubCalendarActivity,
    ),
  { ssr: false, loading: () => null },
);

/**
 * The calendar follows the site's own theme toggle (data-theme on <html>),
 * not the OS preference, mirroring the theme toggle component.
 */
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });
  return () => observer.disconnect();
}

function getSnapshot(): ColorScheme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerSnapshot(): ColorScheme {
  // The site default is dark; restored before first paint by the theme script.
  return "dark";
}

export function GithubCalendar({ username }: { username: string }) {
  const colorScheme = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  return (
    <GithubCalendarActivity username={username} colorScheme={colorScheme} />
  );
}
