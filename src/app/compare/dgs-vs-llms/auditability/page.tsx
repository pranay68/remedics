import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Auditability of AI Outputs | DGS vs LLMs | Aternox";
const description =
  "Auditability isn’t a vibe. It’s traceability, explicit scope, and artifacts a reviewer can check — supported by deterministic decision gates.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-llms/auditability" },
  openGraph: { title, description, url: "/compare/dgs-vs-llms/auditability" },
  twitter: { title, description, card: "summary_large_image" },
};

const sections = [
  {
    title: "Audits need traceability",
    body: "A reviewer should be able to see what the system used, what it assumed, and how it arrived at an output — especially in regulated or high-stakes environments.",
  },
  {
    title: "Chat hides decision boundaries",
    body: "Chat output blends exploration and decision-making. That’s why teams struggle to separate “draft” from “approved.”",
  },
  {
    title: "Artifact-first enables checking",
    body: "When the output is a structured artifact, teams can run review, approval, and versioning like they do for code and docs.",
  },
];

export default function AuditabilityPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-llms/auditability", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs LLMs", item: new URL("/compare/dgs-vs-llms", site).href },
      { "@type": "ListItem", position: 4, name: "Auditability", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Auditability of AI Outputs",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes an AI output auditable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Auditable outputs have explicit scope, traceable inputs, clear assumptions, and a structured artifact that can be reviewed and approved.",
        },
      },
      {
        "@type": "Question",
        name: "Is chat output auditable?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sometimes, but it’s usually harder. Chat tends to mix rationale and decisions and makes review gates less explicit than artifact-first workflows.",
        },
      },
    ],
  };

  return (
    <Shell>
      <Page
        eyebrow="DGS vs LLMs"
        title={
          <>
            Auditability of <span className="text-gradient text-shimmer">AI outputs</span>.
          </>
        }
        subtitle="If your team can’t review it, you can’t govern it."
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

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
              <Link href="/compare/dgs-vs-llms/verification-gates" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Verification gates
              </Link>
              <Link href="/learn/evaluation-verification" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Evaluation & verification (pillar)
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
