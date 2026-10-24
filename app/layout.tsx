import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { THEME_STORAGE_KEY, themeColors } from "@/app/theme";
import { profile } from "@/data/profile";
import "./globals.css";

const instrumentSans = localFont({
  src: "./fonts/instrument-sans-latin.woff2",
  variable: "--font-instrument",
  display: "swap",
  weight: "400 700",
  style: "normal",
  fallback: ["system-ui", "sans-serif"],
});

const fragmentMono = localFont({
  src: "./fonts/fragment-mono-latin.woff2",
  variable: "--font-fragment",
  display: "swap",
  weight: "400",
  style: "normal",
  fallback: ["ui-monospace", "monospace"],
});

const title = `${profile.name} — ${profile.role}`;
const description = profile.description;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  applicationName: `${profile.name} — Portfolio`,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  category: "technology",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: profile.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
};

// Runs as the first script in <body>, before any page content is parsed, so the
// stored theme paints immediately. next/script's beforeInteractive strategy
// queues the same code behind the client bundle instead of executing inline.
// The theme-color meta is created here rather than in the viewport export so
// React hydration cannot re-insert a stale server colour. The meta is created
// even when storage access throws, so the chrome still matches the dark default.
const themeScript = `(function(){var theme="dark";try{theme=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY,
)})==="light"?"light":"dark";}catch(error){}document.documentElement.dataset.theme=theme;var colors=${JSON.stringify(
  themeColors,
)};var meta=document.querySelector('meta[name="theme-color"]');if(!meta){meta=document.createElement("meta");meta.setAttribute("name","theme-color");document.head.appendChild(meta);}meta.setAttribute("content",colors[theme]);})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${instrumentSans.variable} ${fragmentMono.variable}`}
    >
      <body>
        <script
          id="theme-init"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="page-fade" data-page-fade>
          {children}
        </div>
      </body>
    </html>
  );
}
