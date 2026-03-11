import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Observability for Agents | DGS vs Agent Frameworks | Aternox";
const description =
  "Agent systems need logs, traces, and replayable runs. This page explains what to instrument and how deterministic decision points make runs auditable.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-agent-frameworks/observability" },
  openGraph: { title, description, url: "/compare/dgs-vs-agent-frameworks/observability" },
  twitter: { title, description, card: "summary_large_image" },
};

const facts = [
  {
    title: "Agents are distributed workflows",
    body: "A single user request can trigger multiple model calls plus multiple tool calls (APIs, DB queries, file writes). That’s a workflow, not a single response.",
  },
  {
    title: "You need correlation IDs",
    body: "Without run IDs / trace IDs, it’s difficult to debug which tool call came from which model step — especially under concurrency.",
  },
  {
    title: "Replays require captured inputs",
    body: "To reproduce failures, teams must capture prompts, tool inputs/outputs, and key state — not just the final response.",
  },
];

export default function ObservabilityPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-agent-frameworks/observability", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs Agent Frameworks", item: new URL("/compare/dgs-vs-agent-frameworks", site).href },
      { "@type": "ListItem", position: 4, name: "Observability", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Observability for Agents",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  return (
    <Shell>
      <Page
        eyebrow="DGS vs Agent Frameworks"
        title={
          <>
            Agent <span className="text-gradient text-shimmer">observability</span>.
          </>
        }
        subtitle="If you can’t trace it, you can’t debug it."
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

        <FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            {facts.map((s, i) => (
              <ScaleIn key={s.title} delay={0.05 * i} className="rounded-3xl border border-border/70 bg-surface/50 p-7 glow">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Fact</div>
                <div className="mt-3 text-sm font-semibold text-brand-2">{s.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </ScaleIn>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">Minimum instrumentation</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">Log model steps and tool calls</h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              Capture: run ID, model call inputs/outputs, tool inputs/outputs, timestamps, and the state used for retrieval. That’s the baseline for debugging.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/compare/dgs-vs-agent-frameworks" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Back to comparison
              </Link>
              <Link href="/learn/evaluation-verification" className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Evaluation & verification
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
