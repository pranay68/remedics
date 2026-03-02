import type { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl.replace(/\/$/, "");
  const now = new Date();
  const legalLastModified = new Date("2026-01-01");

  const routes: Array<{
    path: string;
    lastModified?: Date;
    changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority?: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/dgs", changeFrequency: "weekly", priority: 0.9 },
    { path: "/research", changeFrequency: "weekly", priority: 0.9 },
    { path: "/waitlist", changeFrequency: "weekly", priority: 0.85 },
    { path: "/product", changeFrequency: "weekly", priority: 0.9 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.7 },
    { path: "/careers", changeFrequency: "monthly", priority: 0.5 },
    { path: "/safety", changeFrequency: "monthly", priority: 0.6 },
    { path: "/about", changeFrequency: "monthly", priority: 0.5 },
    { path: "/download", changeFrequency: "weekly", priority: 0.6 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.5 },
    { path: "/view/flt3-program-summary", changeFrequency: "monthly", priority: 0.4 },
    { path: "/terms", lastModified: legalLastModified, changeFrequency: "yearly", priority: 0.2 },
    { path: "/privacy", lastModified: legalLastModified, changeFrequency: "yearly", priority: 0.2 },
    // Keyword landing pages
    { path: "/autonomous-coding-software", changeFrequency: "weekly", priority: 0.8 },
    { path: "/autonomous-software-development", changeFrequency: "weekly", priority: 0.75 },
  ];

  return routes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: r.lastModified ?? now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
