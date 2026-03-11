import type { Metadata } from "next";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";

const title = "Terms of Service | Aternox";
const description = "Terms of Service for Aternox LLC.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/terms" },
  openGraph: { title, description, url: "/terms" },
  twitter: { title, description, card: "summary_large_image" },
};

export default function TermsPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/terms", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Terms", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms of Service",
    url: canonicalUrl,
    description,
    isPartOf: { "@type": "WebSite", name: "Aternox", url: site.href },
    publisher: { "@type": "Organization", name: "Aternox", url: site.href },
  };

  return (
    <Shell>
      <Page
        eyebrow="Legal"
        title={
          <>
            Terms of <span className="text-gradient">Service</span>
          </>
        }
        subtitle={
          "Last updated: January 2026"
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
        <div className="prose prose-invert max-w-none">
          <p className="text-muted">
            Welcome to Aternox. By accessing or using our website, products, and services, you agree to be bound by these Terms of Service.
          </p>

          <h2 className="mt-8 text-lg font-semibold">1. Acceptance of Terms</h2>
          <p className="text-muted">
            These Terms constitute a binding legal agreement between you and Aternox LLC (Aternox, we, us, or our). If you do not agree to these Terms, please do not use our Services.
          </p>

          <h2 className="mt-8 text-lg font-semibold">2. Use of Services</h2>
          <p className="text-muted">
            You agree to use our Services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the security of your account and for all activities that occur under your account.
          </p>

          <h2 className="mt-8 text-lg font-semibold">3. Intellectual Property</h2>
          <p className="text-muted">
            The Services, including but not limited to text, graphics, code, and software, are the property of Aternox and are protected by copyright, trademark, and other intellectual property laws.
          </p>

          <h2 className="mt-8 text-lg font-semibold">4. Disclaimer of Warranties</h2>
          <p className="text-muted">
            THE SERVICES ARE PROVIDED AS IS AND AS AVAILABLE WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. ATERNOX DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
          </p>

          <h2 className="mt-8 text-lg font-semibold">5. Limitation of Liability</h2>
          <p className="text-muted">
            IN NO EVENT SHALL ATERNOX BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICES.
          </p>

          <h2 className="mt-8 text-lg font-semibold">6. Contact</h2>
          <p className="text-muted">
            If you have any questions about these Terms, please contact us via our Contact page.
          </p>
        </div>
      </Page>
    </Shell>
  );
}
