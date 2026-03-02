import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Human-in-the-Loop for Agents | Aternox";
const description =
  "Human-in-the-loop isn’t a slogan — it’s a workflow step. This page explains what it means operationally and how to implement it.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-agent-frameworks/human-in-the-loop" },
  openGraph: { title, description, url: "/compare/dgs-vs-agent-frameworks/human-in-the-loop" },
  twitter: { title, description, card: "summary_large_image" },
};

const facts = [
  {
    title: "Review is a workflow step",
    body: "A human-in-the-loop step means the system pauses and waits for approval before executing a change or adopting an output.",
  },
  {
    title: "Approvals need artifacts",
    body: "Approving a structured plan/spec is faster and safer than approving a long chat transcript.",
  },
  {
    title: "Gates can be enforced",
    body: "Approval gates can be enforced in code: the system simply cannot run certain tools unless an approval token is present.",
  },
];

export default function HumanInTheLoopPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-agent-frameworks/human-in-the-loop", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs Agent Frameworks", item: new URL("/compare/dgs-vs-agent-frameworks", site).href },
      { "@type": "ListItem", position: 4, name: "Human-in-the-Loop", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Human-in-the-Loop for Agents",
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
            Human in the <span className="text-gradient text-shimmer">loop</span>.
          </>
        }
        subtitle="The safest automation includes explicit approval gates."
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
              <Link href="/compare/dgs-vs-llms/verification-gates" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Verification gates
              </Link>
              <Link href="/compare/dgs-vs-agent-frameworks/safety-guardrails" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                Safety guardrails
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
