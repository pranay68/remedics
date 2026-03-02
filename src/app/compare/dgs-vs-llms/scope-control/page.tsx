import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Scope Control and Assumptions | DGS vs LLMs | Aternox";
const description =
  "Why scope control matters in AI workflows: explicit constraints, assumptions, and boundaries that reviewers can verify.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-llms/scope-control" },
  openGraph: { title, description, url: "/compare/dgs-vs-llms/scope-control" },
  twitter: { title, description, card: "summary_large_image" },
};

const sections = [
  {
    title: "Scope drift is the silent failure mode",
    body: "If the problem definition isn’t explicit, outputs can look plausible while subtly changing the task. Teams often catch this late — after decisions are made.",
  },
  {
    title: "Assumptions must be visible",
    body: "Professional work requires knowing what the system assumed: constraints, dependencies, and what was excluded.",
  },
  {
    title: "Artifact-first makes boundaries explicit",
    body: "DGS-style workflows emphasize scoping and structured artifacts so reviewers can check what the output claims and what it doesn’t.",
  },
];

export default function ScopeControlPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-llms/scope-control", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs LLMs", item: new URL("/compare/dgs-vs-llms", site).href },
      { "@type": "ListItem", position: 4, name: "Scope Control", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Scope Control and Assumptions",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  return (
    <Shell>
      <Page
        eyebrow="DGS vs LLMs"
        title={
          <>
            Scope control & <span className="text-gradient text-shimmer">assumptions</span>.
          </>
        }
        subtitle="When scope is explicit, review becomes possible."
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

        <FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            {sections.map((s, i) => (
              <ScaleIn key={s.title} delay={0.05 * i} className="rounded-3xl border border-border/70 bg-surface/50 p-7 glow">
                <div className="text-sm font-semibold text-brand-2">{s.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
              </ScaleIn>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-12 rounded-3xl border border-border/70 bg-surface/40 p-8">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Related reading</div>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/compare/dgs-vs-llms" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Back to DGS vs LLMs
              </Link>
              <Link href="/compare/dgs-vs-llms/structured-outputs" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Structured outputs
              </Link>
              <Link href="/learn/research-architecture" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Research architecture (pillar)
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
