import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Evaluating Agents: Frameworks vs Governed Outputs | Aternox";
const description =
  "How to evaluate agent systems with facts: task success, review time, tool-call errors, and replayability — and whether approval gates are deterministic.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-agent-frameworks/evaluation" },
  openGraph: { title, description, url: "/compare/dgs-vs-agent-frameworks/evaluation" },
  twitter: { title, description, card: "summary_large_image" },
};

const facts = [
  {
    title: "Evaluation must be task-based",
    body: "A useful metric is whether the system completes a defined task with clear acceptance criteria — not whether a response sounds confident.",
  },
  {
    title: "Tool-call errors are measurable",
    body: "You can measure invalid arguments, tool failures, retries, and recovery behavior. These show up in logs and traces.",
  },
  {
    title: "Review time is a real cost",
    body: "If outputs require heavy human rewriting, “autonomy” shifts work instead of reducing it.",
  },
];

export default function AgentEvaluationPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-agent-frameworks/evaluation", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs Agent Frameworks", item: new URL("/compare/dgs-vs-agent-frameworks", site).href },
      { "@type": "ListItem", position: 4, name: "Evaluation", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Evaluating Agents: Frameworks vs Governed Outputs",
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
            Evaluating <span className="text-gradient text-shimmer">agents</span>.
          </>
        }
        subtitle="Treat agents like systems: measure success, errors, and review cost."
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
          <div className="mt-12 rounded-3xl border border-border/70 bg-surface/40 p-8">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Related reading</div>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/compare/dgs-vs-agent-frameworks/observability" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Observability
              </Link>
              <Link href="/compare/dgs-vs-agent-frameworks/human-in-the-loop" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Human-in-the-loop
              </Link>
              <Link href="/compare/dgs-vs-agent-frameworks" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Back to comparison
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
