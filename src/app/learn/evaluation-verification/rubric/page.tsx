import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Verification Rubric for AI Outputs | Learn | Aternox";
const description =
  "A practical rubric for checking AI outputs: deterministic gates, explicit scope, traceable assumptions, and reviewer-ready artifacts.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/learn/evaluation-verification/rubric" },
  openGraph: { title, description, url: "/learn/evaluation-verification/rubric" },
  twitter: { title, description, card: "summary_large_image" },
};

const criteria = [
  {
    title: "1) Scope is explicit",
    body: "A reviewer can state what the output covers, what it excludes, and what inputs were assumed — without reading the system’s mind.",
  },
  {
    title: "2) Decision gates are deterministic",
    body: "The workflow has fixed checkpoints (gates) that decide what counts as acceptable: required fields, constraints, policies, approvals, and sign-off.",
  },
  {
    title: "3) Assumptions are listed",
    body: "Every non-obvious assumption is surfaced: definitions, thresholds, dependencies, and defaults. If an assumption is wrong, the artifact shows where it entered.",
  },
  {
    title: "4) Evidence is traceable",
    body: "Claims are tied to sources, references, or inputs. If evidence is missing, the artifact makes that absence obvious instead of guessing.",
  },
  {
    title: "5) Output is a reusable artifact",
    body: "The result is structured for versioning and review (spec, plan, checklist, diff, table) — not just a fluent paragraph.",
  },
  {
    title: "6) Failure modes are bounded",
    body: "Known risks are named with mitigations: what can go wrong, how it will be detected, and what the reviewer should verify before adoption.",
  },
];

export default function VerificationRubricPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/learn/evaluation-verification/rubric", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Learn", item: new URL("/learn/evaluation-verification", site).href },
      { "@type": "ListItem", position: 3, name: "Verification Rubric", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Verification Rubric for AI Outputs",
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
            Verification <span className="text-gradient text-shimmer">rubric</span>.
          </>
        }
        subtitle="A checklist-style rubric for reviewer-ready outputs: scope, assumptions, evidence, and deterministic gates."
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

        <FadeIn>
          <div className="grid gap-4 md:grid-cols-2">
            {criteria.map((c, i) => (
              <ScaleIn key={c.title} delay={0.04 * i} className="rounded-3xl border border-border/70 bg-surface/50 p-7 glow">
                <div className="text-sm font-semibold text-brand-2">{c.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
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
                href="/learn/evaluation-verification/failure-modes"
                className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground"
              >
                Failure modes checklist
              </Link>
              <Link
                href="/compare/dgs-vs-llms/verification-gates"
                className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground"
              >
                Verification gates in workflows
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
