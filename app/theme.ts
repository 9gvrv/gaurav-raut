export const THEME_STORAGE_KEY = "theme";

export const themeColors = {
  dark: "#0C0D0B",
  light: "#F2F1EB",
} as const;

export type Theme = keyof typeof themeColors;
