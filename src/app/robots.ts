import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
const maintenanceEnabled =
  process.env.NODE_ENV === "production" && process.env.MAINTENANCE_MODE !== "off";

export default function robots(): MetadataRoute.Robots {
  const base = siteUrl.replace(/\/$/, "");

  if (maintenanceEnabled) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
      host: base,
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
