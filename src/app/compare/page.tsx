import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "DGS Comparisons | DGS vs LLMs, Chatbots, and Agent Frameworks";
const description =
  "Compare DGS with LLMs, chatbots, and agent frameworks. Clear, factual pages focused on workflow, auditability, structured outputs, and verification gates.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare" },
  openGraph: { title, description, url: "/compare" },
  twitter: { title, description, card: "summary_large_image" },
};

const comparisons = [
  {
    href: "/compare/dgs-vs-llms",
    label: "DGS vs LLMs (not a chatbot)",
    body: "If you’re evaluating LLM-based tools for professional work: what they’re good at, what breaks, and why DGS is different.",
  },
  {
    href: "/compare/dgs-vs-chatbots",
    label: "DGS vs Chatbots",
    body: "Why “chat” UX fails for high‑stakes work, and what a synthesis workflow looks like instead.",
  },
  {
    href: "/compare/dgs-vs-agent-frameworks",
    label: "DGS vs Agent Frameworks",
    body: "What changes when you optimize for reviewable output instead of tool-calling autonomy.",
  },
];

const llmClusterLinks = [
  { href: "/compare/dgs-vs-llms/structured-outputs", label: "Structured outputs" },
  { href: "/compare/dgs-vs-llms/auditability", label: "Auditability" },
  { href: "/compare/dgs-vs-llms/verification-gates", label: "Verification gates" },
  { href: "/compare/dgs-vs-llms/scope-control", label: "Scope control" },
  { href: "/compare/dgs-vs-llms/evaluation", label: "Evaluation" },
  { href: "/compare/dgs-vs-llms/enterprise-workflows", label: "Enterprise workflows" },
];

const frameworkClusterLinks = [
  { href: "/compare/dgs-vs-agent-frameworks/tool-calling", label: "Tool calling" },
  { href: "/compare/dgs-vs-agent-frameworks/memory-and-state", label: "Memory and state" },
  { href: "/compare/dgs-vs-agent-frameworks/observability", label: "Observability" },
  { href: "/compare/dgs-vs-agent-frameworks/evaluation", label: "Evaluation" },
  { href: "/compare/dgs-vs-agent-frameworks/safety-guardrails", label: "Safety guardrails" },
  { href: "/compare/dgs-vs-agent-frameworks/human-in-the-loop", label: "Human in the loop" },
];

export default function CompareHubPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Compare",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  return (
    <Shell>
      <Page
        eyebrow="Compare"
        title={
          <>
            DGS vs <span className="text-gradient text-shimmer">everything else</span>.
          </>
        }
        subtitle="Factual comparisons focused on workflow, outputs, and what teams can actually trust in production environments."
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

        <FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            {comparisons.map((c, i) => (
              <ScaleIn
                key={c.href}
                delay={0.05 * i}
                className="rounded-3xl border border-border/70 bg-surface/50 p-7 transition-all duration-500 hover:scale-[1.02] hover:border-brand-2/50 hover:bg-surface/70 glow"
              >
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Comparison</div>
                <div className="mt-3 text-lg font-semibold tracking-[-0.04em]">
                  <Link className="underline decoration-muted underline-offset-4 hover:decoration-foreground" href={c.href}>
                    {c.label}
                  </Link>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.body}</p>
                <div className="mt-6">
                  <Link href={c.href} className="btn-secondary inline-flex h-11 items-center justify-center rounded-full px-5 text-sm font-semibold transition-all hover:scale-105">
                    Read →
                  </Link>
                </div>
              </ScaleIn>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">If you want the short answer</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
              DGS is built for professional outputs, not conversation.
            </h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              These pages explain the difference without hype: what you can review, what you can govern, and what breaks when “chat” is used as a workflow.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/dgs" className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Learn about DGS
              </Link>
              <Link href="/waitlist" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Join the waitlist
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl border border-border/70 bg-surface/40 p-8">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">DGS vs LLMs cluster</div>
              <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em]">Drill into the exact failure points.</h2>
              <div className="mt-6 flex flex-col gap-3">
                {llmClusterLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-border/70 bg-surface/40 p-8">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">DGS vs agent frameworks cluster</div>
              <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em]">See where orchestration diverges from governed outputs.</h2>
              <div className="mt-6 flex flex-col gap-3">
                {frameworkClusterLinks.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.55}>
          <div className="mt-12 rounded-3xl border border-border/70 bg-surface/40 p-8">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Related pillars</div>
            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {[
                { href: "/learn/verified-synthesis", label: "Verified synthesis" },
                { href: "/learn/evaluation-verification", label: "Evaluation & verification" },
                { href: "/learn/governed-autonomy", label: "Governed autonomy" },
              ].map((item) => (
                <Link key={item.href} href={item.href} className="rounded-2xl border border-border/70 bg-background/30 px-5 py-4 text-sm font-medium text-foreground transition-all hover:border-brand-2/50 hover:bg-background/50">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
