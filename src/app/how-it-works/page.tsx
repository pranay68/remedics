import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";
import { Page } from "@/components/site/Page";
import { Shell } from "@/components/site/Shell";
import { fiveStages } from "@/content/site";

const title = "How ReArch Works";
const description =
  "The public ReArch flow: Intake, Case Room, Quote, Run, and Package.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/how-it-works" },
  openGraph: { title, description, url: "/how-it-works" },
  twitter: { title, description, card: "summary_large_image" },
};

export default function HowItWorksPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/how-it-works", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "How it works", item: canonicalUrl },
    ],
  };

  return (
    <Shell>
      <Page
        eyebrow="How It Works"
        title="Five stages. No public theater."
        subtitle="ReArch explains the recovery flow clearly, but it does not expose the private package structure or invent proof beyond what is actually owned."
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }}
        />
        <div className="grid gap-4">
          {fiveStages.map((stage, index) => (
            <FadeIn key={stage.name} delay={index * 0.08}>
              <div className="grid gap-4 rounded-3xl border border-border/70 bg-surface/50 p-8 md:grid-cols-[120px_1fr]">
                <div className="text-sm font-mono uppercase tracking-[0.25em] text-white/35">
                  Stage 0{index + 1}
                </div>
                <div>
                  <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white/90">
                    {stage.name}
                  </h2>
                  <p className="mt-3 max-w-3xl text-base leading-7 text-muted">
                    {stage.summary}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.45}>
          <div className="mt-12 rounded-3xl border border-border/70 bg-surface/50 p-10">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">
              Public Boundary
            </div>
            <p className="mt-4 max-w-3xl text-base leading-7 text-muted">
              The public site stops at process truth. It does not publish the six
              package files, internal document IDs, or fabricated example dossiers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
              >
                Pricing doctrine
              </Link>
              <Link
                href="/waitlist"
                className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105"
              >
                Launching July 1
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
