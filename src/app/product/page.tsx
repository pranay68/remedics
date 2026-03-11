import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Product | DGS by Aternox";
const description =
  "DGS Core turns complex work into reviewer-ready artifacts teams can review, govern, and adopt.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/product" },
  openGraph: { title, description, url: "/product" },
  twitter: { title, description, card: "summary_large_image" },
};

function Feature({ title, desc, delay = 0 }: { title: string; desc: string; delay?: number }) {
  return (
    <ScaleIn delay={delay} className="group rounded-2xl border border-border/70 bg-surface/50 p-7 transition-all duration-500 hover:scale-105 hover:border-brand-2/50 hover:bg-surface/70 glow">
      <div className="text-sm font-semibold text-brand-2">{title}</div>
      <div className="mt-2 text-sm leading-6 text-muted">{desc}</div>
    </ScaleIn>
  );
}

export default function ProductPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/product", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Product", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Product",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  return (
    <Shell>
      <Page
        eyebrow={
          <span>
            DGS <span className="text-white/30">by</span> Aternox
          </span>
        }
        title={
          <>
            DGS <span className="text-gradient text-shimmer">Core</span>.
          </>
        }
        subtitle="Built for professional artifacts teams can review, govern, and adopt."
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <FadeIn>
              <div className="glass rounded-3xl border border-gradient p-8 glow-intense scan-line">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">What you get</div>
                <div className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">Reviewer-ready artifacts.</div>
                <p className="mt-3 text-base text-muted md:text-lg">
                  DGS Core is designed to produce outputs that teams can review and adopt: structured artifacts with explicit scope, assumptions, and decision checkpoints.
                  This page describes outcomes and product direction — not internal mechanics.
                </p>

                <div className="mt-8 grid gap-3">
                  {["Specs and plans", "Checklists and tables", "Policies and research artifacts", "Implementation-ready diffs"].map((label, i) => (
                    <ScaleIn key={label} delay={0.08 * (i + 1)}>
                      <div className="rounded-2xl border border-border/70 bg-background/40 px-5 py-4">
                        <div className="text-base font-medium">{label}</div>
                      </div>
                    </ScaleIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="md:col-span-5">
            <FadeIn delay={0.2}>
              <div className="glass rounded-3xl border border-border/70 p-8 glow">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Roadmap</div>
                <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">
                  Core first. <span className="text-shimmer">Proof cases next.</span>
                </h2>
                <p className="mt-4 text-base text-muted">
                  DGS Core is the foundation. Expansion follows validated proof cases and real reviewer workflows.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href="/dgs"
                    className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold transition-all hover:scale-105"
                  >
                    What is DGS?
                  </Link>
                  <Link
                    href="/waitlist"
                    className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-5 text-sm font-semibold transition-all hover:scale-105"
                  >
                    Join waitlist
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        <FadeIn delay={0.4}>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <Feature
              delay={0.1}
              title="Artifacts, not chat"
              desc="DGS is oriented around deliverables teams can store, version, review, and approve — not conversational output."
            />
            <Feature
              delay={0.2}
              title="Governance-ready"
              desc="Outputs are designed to fit real review workflows: scoping, approvals, and clear accountability for adoption."
            />
            <Feature
              delay={0.3}
              title="Proof-led expansion"
              desc="DGS expands based on proof cases and domain review standards — not hype roadmaps."
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.55}>
          <div className="mt-12 glass rounded-3xl border border-border/70 p-10 glow">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Security</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">High-stakes by default</h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              If you’re evaluating DGS for enterprise workflows, start with governance and safety requirements.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/safety" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                Safety
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
