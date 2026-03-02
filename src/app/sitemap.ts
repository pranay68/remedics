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
    { path: "/compare", changeFrequency: "weekly", priority: 0.85 },
    { path: "/compare/dgs-vs-llms", changeFrequency: "weekly", priority: 0.85 },
    { path: "/compare/dgs-vs-llms/structured-outputs", changeFrequency: "weekly", priority: 0.7 },
    { path: "/compare/dgs-vs-llms/auditability", changeFrequency: "weekly", priority: 0.7 },
    { path: "/compare/dgs-vs-llms/verification-gates", changeFrequency: "weekly", priority: 0.7 },
    { path: "/compare/dgs-vs-llms/scope-control", changeFrequency: "weekly", priority: 0.7 },
    { path: "/compare/dgs-vs-llms/evaluation", changeFrequency: "weekly", priority: 0.7 },
    { path: "/compare/dgs-vs-llms/enterprise-workflows", changeFrequency: "weekly", priority: 0.7 },
    { path: "/compare/dgs-vs-llms/rag-and-synthesis", changeFrequency: "weekly", priority: 0.7 },
    { path: "/compare/dgs-vs-llms/tool-orchestration", changeFrequency: "weekly", priority: 0.7 },
    { path: "/compare/dgs-vs-chatbots", changeFrequency: "weekly", priority: 0.8 },
    { path: "/compare/dgs-vs-agent-frameworks", changeFrequency: "weekly", priority: 0.8 },
    { path: "/compare/dgs-vs-agent-frameworks/tool-calling", changeFrequency: "weekly", priority: 0.65 },
    { path: "/compare/dgs-vs-agent-frameworks/memory-and-state", changeFrequency: "weekly", priority: 0.65 },
    { path: "/compare/dgs-vs-agent-frameworks/observability", changeFrequency: "weekly", priority: 0.65 },
    { path: "/compare/dgs-vs-agent-frameworks/evaluation", changeFrequency: "weekly", priority: 0.65 },
    { path: "/compare/dgs-vs-agent-frameworks/safety-guardrails", changeFrequency: "weekly", priority: 0.65 },
    { path: "/compare/dgs-vs-agent-frameworks/human-in-the-loop", changeFrequency: "weekly", priority: 0.65 },
    { path: "/learn/verified-synthesis", changeFrequency: "weekly", priority: 0.75 },
    { path: "/learn/research-architecture", changeFrequency: "weekly", priority: 0.7 },
    { path: "/learn/research-architecture/template", changeFrequency: "weekly", priority: 0.6 },
    { path: "/learn/governed-autonomy", changeFrequency: "weekly", priority: 0.7 },
    { path: "/learn/autonomous-coding", changeFrequency: "weekly", priority: 0.75 },
    { path: "/learn/evaluation-verification", changeFrequency: "weekly", priority: 0.7 },
    { path: "/learn/evaluation-verification/rubric", changeFrequency: "weekly", priority: 0.6 },
    { path: "/learn/evaluation-verification/failure-modes", changeFrequency: "weekly", priority: 0.6 },
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
