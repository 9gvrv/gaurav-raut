import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  // Static export: `next build` writes HTML/CSS/JS to `out/` for static hosts
  // such as Cloudflare Pages. Requires all routes to be prerenderable.
  output: "export",
};

export default nextConfig;
