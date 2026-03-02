import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Pricing | DGS by Aternox";
const description =
  "Pilot, team, and enterprise tiers. Start with evaluation and scale into production deployments.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/pricing" },
  openGraph: { title, description, url: "/pricing" },
  twitter: { title, description, card: "summary_large_image" },
};

function Tier({
  name,
  forWhom,
  bullets,
  delay = 0,
}: {
  name: string;
  forWhom: string;
  bullets: string[];
  delay?: number;
}) {
  return (
    <ScaleIn delay={delay} className="group rounded-3xl border border-border/70 bg-surface/50 p-8 transition-all duration-500 hover:scale-105 hover:border-brand-2/50 hover:bg-surface/70 glow">
      <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">{forWhom}</div>
      <div className="mt-3 font-sans text-xl font-semibold tracking-[-0.04em]">{name}</div>
      <ul className="mt-6 space-y-3 text-sm text-muted">
        {bullets.map((b) => (
          <li key={b} className="flex gap-3">
            <span className="mt-[7px] h-1.5 w-1.5 flex-none rounded-full bg-brand-2" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </ScaleIn>
  );
}

export default function PricingPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/pricing", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Pricing", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Pricing",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  return (
    <Shell>
      <Page
        eyebrow="Pricing"
        title={
          <>
            Pricing that scales with your <span className="text-gradient text-shimmer">team</span>.
          </>
        }
        subtitle={
          "Start with a pilot. Upgrade as you move from evaluation to production deployments."
        }
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
        />
        <FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            <Tier
              delay={0.1}
              name="Pilot"
              forWhom="Individuals / Evaluation"
              bullets={["Core DGS access", "Personal projects", "Email support"]}
            />
            <Tier
              delay={0.2}
              name="Team"
              forWhom="Small teams"
              bullets={["Shared projects", "Policy controls", "Priority support"]}
            />
            <Tier
              delay={0.3}
              name="Enterprise"
              forWhom="Organizations"
              bullets={["SSO / SAML", "Audit-friendly workflow", "Custom security & procurement"]}
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">
                  Enterprise
                </div>
                <h2 className="mt-3 font-sans text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                  Security review, procurement, or custom deployment?
                </h2>
                <p className="mt-4 text-base text-muted md:text-lg">
                  We support enterprise onboarding: security documentation, contract workflows, and deployment options
                  that match how serious teams operate.
                </p>
              </div>
              <div className="md:col-span-4 md:text-right">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex h-14 items-center justify-center rounded-full px-7 text-base font-semibold transition-all hover:scale-105"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
