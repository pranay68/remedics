import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Evaluation & Verification | Learn | Aternox";
const description =
  "A pillar on evaluating AI outputs for real workflows: acceptance criteria, deterministic verification gates, and review loops before adoption.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/learn/evaluation-verification" },
  openGraph: { title, description, url: "/learn/evaluation-verification" },
  twitter: { title, description, card: "summary_large_image" },
};

const clusters = [
  {
    href: "/learn/evaluation-verification/rubric",
    title: "Verification rubric",
    desc: "A reviewer-ready rubric with deterministic gates.",
  },
  {
    href: "/learn/evaluation-verification/failure-modes",
    title: "Failure modes checklist",
    desc: "Common workflow failures and the gates that prevent them.",
  },
  {
    href: "/safety",
    title: "Safety",
    desc: "Guardrails and governance.",
  },
  {
    href: "/compare/dgs-vs-llms",
    title: "DGS vs LLMs",
    desc: "Why evaluation needs artifacts and scope.",
  },
  {
    href: "/pricing",
    title: "Pricing",
    desc: "Where evaluation impacts ROI.",
  },
];

export default function EvaluationVerificationLearnPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/learn/evaluation-verification", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Evaluation & Verification", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Evaluation & Verification",
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
            Evaluation & <span className="text-gradient text-shimmer">verification</span>.
          </>
        }
        subtitle="Define acceptance criteria and verification loops so outputs can be trusted and adopted."
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
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">Checklist</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">What to demand from outputs</h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              Clear scope, explicit assumptions, a structured artifact, and a verification step. Without these, “evaluation” becomes subjective and unstable.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/compare" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Explore comparisons
              </Link>
              <Link href="/contact" className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Talk to Aternox
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
