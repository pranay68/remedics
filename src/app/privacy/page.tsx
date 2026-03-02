import type { Metadata } from "next";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";

const title = "Privacy Policy | Aternox";
const description = "Privacy Policy for Aternox LLC.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/privacy" },
  openGraph: { title, description, url: "/privacy" },
  twitter: { title, description, card: "summary_large_image" },
};

export default function PrivacyPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/privacy", site).href;

  const breadCrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: new URL("/", site).href },
      { "@type": "ListItem", position: 2, name: "Privacy", item: canonicalUrl },
    ],
  };

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
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
            Privacy <span className="text-gradient">Policy</span>
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
            At Aternox, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our website and products.
          </p>

          <h2 className="mt-8 text-lg font-semibold">1. Information We Collect</h2>
          <p className="text-muted">
            We collect information you provide directly to us, such as when you fill out a contact form or sign up for our services. This may include your name, email address, and company information.
          </p>

          <h2 className="mt-8 text-lg font-semibold">2. How We Use Your Information</h2>
          <p className="text-muted">
            We use the information we collect to provide, maintain, and improve our Services, to communicate with you, and to comply with legal obligations.
          </p>

          <h2 className="mt-8 text-lg font-semibold">3. Data Security</h2>
          <p className="text-muted">
            We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="mt-8 text-lg font-semibold">4. Code Privacy</h2>
          <p className="text-muted">
            For DGS and our other products, we prioritize privacy-first defaults and minimal retention where applicable. We do not use your data to train models unless explicitly authorized by you.
          </p>

          <h2 className="mt-8 text-lg font-semibold">5. Contact Us</h2>
          <p className="text-muted">
            If you have any questions about this Privacy Policy, please contact us via our Contact page.
          </p>
        </div>
      </Page>
    </Shell>
  );
}
