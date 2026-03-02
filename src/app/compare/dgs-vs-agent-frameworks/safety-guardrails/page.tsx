import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Safety Guardrails for Agents | Aternox";
const description =
  "Guardrails are concrete mechanisms: deterministic allowlists, sandboxing, approvals, and policy checks. This page covers the facts and what to require.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/compare/dgs-vs-agent-frameworks/safety-guardrails" },
  openGraph: { title, description, url: "/compare/dgs-vs-agent-frameworks/safety-guardrails" },
  twitter: { title, description, card: "summary_large_image" },
};

const facts = [
  {
    title: "Guardrails are implementation, not prompts",
    body: "Prompt rules help, but real guardrails are code-level constraints: allowlisted tools, permission checks, and sandboxed execution.",
  },
  {
    title: "Least privilege applies",
    body: "Agents should operate with the minimum permissions required. This reduces blast radius if the system behaves incorrectly.",
  },
  {
    title: "Approval gates are measurable",
    body: "You can define which actions require approval (e.g., production changes) and enforce that in code. That’s observable and testable.",
  },
];

export default function SafetyGuardrailsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/compare/dgs-vs-agent-frameworks/safety-guardrails", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Compare", item: new URL("/compare", site).href },
      { "@type": "ListItem", position: 3, name: "DGS vs Agent Frameworks", item: new URL("/compare/dgs-vs-agent-frameworks", site).href },
      { "@type": "ListItem", position: 4, name: "Safety Guardrails", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Safety Guardrails for Agents",
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
            Safety <span className="text-gradient text-shimmer">guardrails</span>.
          </>
        }
        subtitle="Good guardrails are concrete and enforceable."
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
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">Baseline controls</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">Allowlist, sandbox, approve</h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              If an agent can act, require: tool allowlists, least-privilege credentials, sandboxing for execution, and human approval for high-impact actions.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/safety" className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Safety & governance
              </Link>
              <Link href="/compare/dgs-vs-agent-frameworks" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Back to comparison
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
