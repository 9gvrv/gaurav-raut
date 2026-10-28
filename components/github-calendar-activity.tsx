"use client";

import "react-github-calendar/tooltips.css";
import { GitHubCalendar } from "react-github-calendar";

export type ColorScheme = "light" | "dark";

/**
 * Contribution shades follow the site accent (--accent: #d9a84b dark /
 * #7a4a0a light). Level 0 traces a tone slightly above the background so
 * empty days read as quiet blocks, mirroring the GitHub graph.
 * All five levels are specified explicitly because react-github-calendar
 * pins maxLevel to 4.
 */
const calendarTheme = {
  light: ["#d7d5c9", "#bfb399", "#a98f69", "#916c3a", "#7a4a0a"],
  dark: ["#171a12", "#483e20", "#78612f", "#a9853d", "#d9a84b"],
};

const tooltipDate = new Intl.DateTimeFormat(undefined, {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function describeDay(activity: { count: number; date: string }) {
  // `date` is a plain `YYYY-MM-DD` string; parsing it with a local midnight
  // time keeps the shown day identical across time zones.
  const day = new Date(`${activity.date}T00:00:00`);
  const formatted = Number.isNaN(day.getTime())
    ? activity.date
    : tooltipDate.format(day);

  return activity.count === 0
    ? `No contributions on ${formatted}`
    : `${activity.count} contribution${activity.count === 1 ? "" : "s"} on ${formatted}`;
}

export function GithubCalendarActivity({
  username,
  colorScheme,
}: {
  username: string;
  colorScheme: ColorScheme;
}) {
  return (
    <GitHubCalendar
      username={username}
      year="last"
      blockSize={9}
      blockMargin={2}
      blockRadius={2}
      fontSize={11}
      colorScheme={colorScheme}
      theme={calendarTheme}
      tooltips={{ activity: { text: describeDay } }}
      errorMessage="Contribution graph is unavailable right now."
    />
  );
}
