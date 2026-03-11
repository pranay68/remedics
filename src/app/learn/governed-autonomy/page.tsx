import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Governed Autonomy | Learn | Aternox";
const description =
  "A pillar on autonomy with guardrails: deterministic approvals, auditability, and outputs designed for human review in real workflows.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/learn/governed-autonomy" },
  openGraph: { title, description, url: "/learn/governed-autonomy" },
  twitter: { title, description, card: "summary_large_image" },
};

const clusters = [
  {
    href: "/safety",
    title: "Safety",
    desc: "Guardrails, review, and governance.",
  },
  {
    href: "/compare/dgs-vs-agent-frameworks",
    title: "DGS vs agent frameworks",
    desc: "Orchestration vs governed outputs.",
  },
  {
    href: "/product",
    title: "Product",
    desc: "Where governance shows up in the product direction.",
  },
  {
    href: "/learn/evaluation-verification",
    title: "Evaluation & verification",
    desc: "Governance depends on explicit acceptance criteria.",
  },
  {
    href: "/compare/dgs-vs-agent-frameworks/safety-guardrails",
    title: "Safety guardrails",
    desc: "What guardrails look like when outcomes matter.",
  },
];

export default function GovernedAutonomyLearnPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/learn/governed-autonomy", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Governed Autonomy", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Governed Autonomy",
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
            Governed <span className="text-gradient text-shimmer">autonomy</span>.
          </>
        }
        subtitle="Autonomy is useful only when the outputs are governable: reviewable, auditable, and safe to adopt."
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

        <FadeIn>
          <div className="grid gap-4 md:grid-cols-3">
            {clusters.map((c, i) => (
              <ScaleIn key={c.href} delay={0.05 * i} className="rounded-3xl border border-border/70 bg-surface/50 p-7 glow">
                <div className="text-sm font-semibold text-brand-2">{c.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{c.desc}</p>
                <div className="mt-5">
                  <Link href={c.href} className="text-sm font-semibold text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">
                    Read
                  </Link>
                </div>
              </ScaleIn>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">Rule of thumb</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">Make “review” a first-class step</h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              If a workflow doesn’t include explicit review gates, you’re building a demo — not something a team can safely rely on.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/compare" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Explore comparisons
              </Link>
              <Link href="/waitlist" className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Join the waitlist
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.45}>
          <div className="mt-12 rounded-3xl border border-border/70 bg-surface/40 p-8">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Related reading</div>
            <div className="mt-6 flex flex-col gap-3">
              <Link href="/compare/dgs-vs-agent-frameworks/human-in-the-loop" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">Human in the loop</Link>
              <Link href="/compare/dgs-vs-agent-frameworks/observability" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">Observability</Link>
              <Link href="/safety" className="text-sm text-foreground underline decoration-muted underline-offset-4 hover:decoration-foreground">Safety</Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
