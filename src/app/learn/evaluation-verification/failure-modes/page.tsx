import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "AI Failure Modes Checklist | Learn | Aternox";
const description =
  "A factual checklist of common AI workflow failure modes and the deterministic gates that prevent draft output from becoming production truth.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/learn/evaluation-verification/failure-modes" },
  openGraph: { title, description, url: "/learn/evaluation-verification/failure-modes" },
  twitter: { title, description, card: "summary_large_image" },
};

const failureModes = [
  {
    title: "Scope drift",
    body: "The system subtly changes the task definition mid-run (different audience, different constraints, different deliverable).",
    gate: "Require an explicit scope block and a reviewer approval step before downstream actions.",
  },
  {
    title: "Hidden assumptions",
    body: "Defaults are silently invented (units, thresholds, policy interpretation, missing context) and become treated as true.",
    gate: "Force an assumptions list with required fields; reject outputs with missing assumptions.",
  },
  {
    title: "Unsupported claims",
    body: "Statements read confidently but have no cited evidence or input source.",
    gate: "Deterministic evidence rules: claim → source mapping, or mark as unknown and block approval.",
  },
  {
    title: "Artifact ambiguity",
    body: "The output is fluent but not operational: no checklist, no fields, no acceptance criteria.",
    gate: "Enforce artifact schemas (tables, checklists, diffs, forms) with validation before review.",
  },
  {
    title: "Tooling side effects",
    body: "Tool calls or automations run with unclear permissions, producing irreversible changes.",
    gate: "Require allowlists, sandboxing, and a deterministic human approval gate for side-effecting actions.",
  },
  {
    title: "Stale inputs",
    body: "Old documents, outdated policies, or cached context lead to a correct-looking but wrong result.",
    gate: "Require input timestamps and an explicit ‘data freshness’ check before approval.",
  },
];

export default function FailureModesChecklistPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/learn/evaluation-verification/failure-modes", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Learn", item: new URL("/learn/evaluation-verification", site).href },
      { "@type": "ListItem", position: 3, name: "Failure Modes", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "AI Failure Modes Checklist",
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
            Failure modes <span className="text-gradient text-shimmer">checklist</span>.
          </>
        }
        subtitle="Common failure modes in real workflows — and the deterministic gates that stop drafts from becoming decisions."
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

        <FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            {failureModes.map((f, i) => (
              <ScaleIn key={f.title} delay={0.04 * i} className="rounded-3xl border border-border/70 bg-surface/50 p-7 glow">
                <div className="text-sm font-semibold text-brand-2">{f.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{f.body}</p>
                <div className="mt-5 rounded-2xl border border-border/60 bg-surface/40 p-4">
                  <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Gate</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{f.gate}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-12 rounded-3xl border border-border/70 bg-surface/40 p-8">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Related reading</div>
            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="/learn/evaluation-verification"
                className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground"
              >
                Back to Evaluation & Verification (pillar)
              </Link>
              <Link
                href="/learn/evaluation-verification/rubric"
                className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground"
              >
                Verification rubric
              </Link>
              <Link
                href="/compare/dgs-vs-llms/scope-control"
                className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground"
              >
                Scope control & assumptions
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
