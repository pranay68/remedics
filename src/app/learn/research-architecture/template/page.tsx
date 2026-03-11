import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Research Program Template | Learn | Aternox";
const description =
  "A structured research program template that produces reusable artifacts: deterministic gates, review checkpoints, and a clear deliverable shape.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/learn/research-architecture/template" },
  openGraph: { title, description, url: "/learn/research-architecture/template" },
  twitter: { title, description, card: "summary_large_image" },
};

const blocks = [
  {
    title: "Objective",
    body: "State the outcome in one sentence. If you can’t, the program is not scoped.",
  },
  {
    title: "Constraints",
    body: "List non-negotiables: time, budget, tools, compliance, evaluation criteria, and what is out of scope.",
  },
  {
    title: "Inputs",
    body: "Enumerate the sources you will use (docs, datasets, interviews) and their freshness. Missing inputs should be explicit.",
  },
  {
    title: "Method",
    body: "Describe the approach and the decision rules for choosing between options. Deterministic rules beat vague preferences.",
  },
  {
    title: "Artifacts",
    body: "Define the outputs as artifacts a reviewer can approve: spec, table, checklist, diagram, or test plan.",
  },
  {
    title: "Gates",
    body: "Add deterministic review checkpoints: what must be true to move forward (required fields, acceptance tests, approvals).",
  },
  {
    title: "Risks",
    body: "Name likely failure modes and how you will detect them. If detection is subjective, add a measurable proxy.",
  },
];

export default function ResearchTemplatePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/learn/research-architecture/template", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Learn", item: new URL("/learn/research-architecture", site).href },
      { "@type": "ListItem", position: 3, name: "Research Program Template", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Research Program Template",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  return (
    <Shell>
      <Page
        eyebrow="Learn"
        title={
          <>
            Research program <span className="text-gradient text-shimmer">template</span>.
          </>
        }
        subtitle="A reusable template that forces scope, artifacts, and deterministic gates before decisions are made."
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

        <FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            {blocks.map((b, i) => (
              <ScaleIn key={b.title} delay={0.04 * i} className="rounded-3xl border border-border/70 bg-surface/50 p-7 glow">
                <div className="text-sm font-semibold text-brand-2">{b.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{b.body}</p>
              </ScaleIn>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-12 rounded-3xl border border-border/70 bg-surface/40 p-8">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Related reading</div>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/learn/research-architecture"
                className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground"
              >
                Back to Research Architecture (pillar)
              </Link>
              <Link
                href="/research"
                className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground"
              >
                Research overview
              </Link>
              <Link
                href="/compare/dgs-vs-llms/evaluation"
                className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground"
              >
                How to evaluate workflows
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
