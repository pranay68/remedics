import type { Metadata } from "next";
import Link from "next/link";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";

const title = "About | Aternox";
const description = "Aternox is the company behind DGS — Deterministic General Synthesis. Delaware, USA.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about" },
  twitter: { title, description, card: "summary_large_image" },
};

export default function AboutPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/about", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "About", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "About Aternox",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  return (
    <Shell>
      <Page
        eyebrow="About"
        title="About Aternox"
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
          <div className="max-w-3xl space-y-8">
            <p className="text-base leading-relaxed text-white/60">
              Aternox is the company behind DGS — Deterministic General Synthesis. We are building a synthesis engine for researchers, enterprises, and builders who need verified answers, not confident guesses. Aternox is incorporated in Delaware, USA.
            </p>
            <p className="text-base leading-relaxed text-white/60">
              DGS was designed and built by Lennox Hayes, founder of Aternox. The FLT3 research program was DGS&apos;s first major proof of concept — a complete preclinical research architecture for a problem that has occupied major pharmaceutical R&amp;D teams for decades.
            </p>
            <p className="text-base leading-relaxed text-white/60">
              For research collaboration, validator inquiries, or enterprise access — use the contact page.
            </p>
            <div>
              <Link
                href="/contact"
                className="inline-flex h-11 items-center justify-center rounded-full bg-white text-black px-6 text-[13px] font-medium transition-all duration-200 hover:bg-white/90"
              >
                Contact us
              </Link>
            </div>
          </div>
        </FadeIn>
      </Page>
    </Shell>
  );
}
