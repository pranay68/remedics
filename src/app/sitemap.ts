import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");
  const now = new Date();
  const legalLastModified = new Date("2026-06-13");

  const routes: Array<{
    path: string;
    lastModified?: Date;
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority?: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/how-it-works", changeFrequency: "weekly", priority: 0.9 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.8 },
    { path: "/trust", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/careers", changeFrequency: "monthly", priority: 0.5 },
    { path: "/waitlist", changeFrequency: "weekly", priority: 0.75 },
    { path: "/download", changeFrequency: "monthly", priority: 0.45 },
    {
      path: "/autonomous-coding-software",
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      path: "/autonomous-software-development",
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      path: "/terms",
      lastModified: legalLastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      path: "/privacy",
      lastModified: legalLastModified,
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ];

  return routes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: route.lastModified ?? now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
