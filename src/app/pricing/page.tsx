import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";
import { ScaleIn } from "@/components/animations/ScaleIn";

const title = "Pricing | DGS by Aternox";
const description =
  "Flux-based pricing for DGS. 1 Flux = $1 (always). Buy Flux bundles and spend credits as you use DGS.";

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
            Pricing in <span className="text-gradient text-shimmer">Flux</span>.
          </>
        }
        subtitle={
          "Flux is fuel for DGS. 1 Flux = $1 (always). Buy credits in bundles and spend them as you run DGS."
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
          <div className="glass rounded-3xl border border-border/70 bg-surface/50 p-10 glow">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Flux</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">Simple currency. Usage-based spend.</h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              There are no subscriptions. You buy Flux credits and spend them on DGS runs. One Flux equals one dollar — always.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted mb-6">Bundles</div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              <Tier delay={0.05} name="20 Flux" forWhom="$20 bundle" bullets={["20 Flux credit", "Spend on DGS usage"]} />
              <Tier delay={0.1} name="50 Flux" forWhom="$50 bundle" bullets={["50 Flux credit", "Spend on DGS usage"]} />
              <Tier delay={0.15} name="100 Flux" forWhom="$100 bundle" bullets={["100 Flux credit", "Spend on DGS usage"]} />
              <Tier delay={0.2} name="250 Flux" forWhom="$250 bundle" bullets={["250 Flux credit", "Spend on DGS usage"]} />
              <Tier delay={0.25} name="1000 Flux" forWhom="$1000 bundle" bullets={["1000 Flux credit", "Spend on DGS usage"]} />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-12 rounded-3xl border border-border/70 bg-surface/50 p-10 glow">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">Usage</div>
            <h2 className="mt-3 font-sans text-2xl font-semibold tracking-[-0.04em] md:text-3xl">Pay at cost, not hype.</h2>
            <p className="mt-4 max-w-3xl text-base text-muted md:text-lg">
              A typical Standard Mode run is about <span className="font-semibold text-foreground">~6.5 Flux</span> (approx).
              The final charge is based on actual usage cost — we don’t apply arbitrary multipliers.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.5}>
          <div className="mt-12 glass rounded-3xl border border-gradient p-10 glow-intense">
            <div className="grid gap-8 md:grid-cols-12 md:items-center">
              <div className="md:col-span-8">
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-2">Enterprise</div>
                <h2 className="mt-3 font-sans text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
                  Invoicing, procurement, or large Flux purchases?
                </h2>
                <p className="mt-4 text-base text-muted md:text-lg">
                  We support enterprise onboarding (security review and contract workflows) and can help with larger Flux bundles.
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
