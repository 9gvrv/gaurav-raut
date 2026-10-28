import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";

// Required for `output: 'export'`: static export must prerender metadata routes.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${profile.siteUrl}/sitemap.xml`,
    host: profile.siteUrl,
  };
}
