import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
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
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0C0D0B" },
    { media: "(prefers-color-scheme: light)", color: "#F2F1EB" },
  ],
};

const themeScript = `(function(){try{var stored=localStorage.getItem("theme");document.documentElement.dataset.theme=stored==="light"?"light":"dark";}catch(error){document.documentElement.dataset.theme="dark";}})();`;

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
        <Script
          id="theme-init"
          strategy="beforeInteractive"
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
