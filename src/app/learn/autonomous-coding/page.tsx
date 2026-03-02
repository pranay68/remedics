import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Autonomous Coding | Aternox Learn";
const description =
  "A pillar on autonomous coding workflows: plans, diffs, reviews, and guardrails that turn assistance into shippable changes.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/learn/autonomous-coding" },
  openGraph: { title, description, url: "/learn/autonomous-coding" },
  twitter: { title, description, card: "summary_large_image" },
};

const clusters = [
  {
    href: "/autonomous-coding-software",
    title: "Autonomous coding software",
    desc: "How autonomous coding differs from assistants.",
  },
  {
    href: "/autonomous-software-development",
    title: "Autonomous software development",
    desc: "System-level workflows and outcomes.",
  },
  {
    href: "/compare/dgs-vs-llms",
    title: "DGS vs LLMs",
    desc: "Why “chat output” is not enough.",
  },
];

export default function AutonomousCodingLearnPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/learn/autonomous-coding", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Autonomous Coding", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Autonomous Coding",
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
            Autonomous <span className="text-gradient text-shimmer">coding</span>.
          </>
        }
        subtitle="Turn coding assistance into shippable changes: plans, diffs, reviews, and governance."
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
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">What to optimize</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">Reviewable change-sets</h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              The goal isn’t “write code.” The goal is producing a change-set that passes human review, tests, and safety checks.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/product" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                See product
              </Link>
              <Link href="/waitlist" className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Join the waitlist
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
