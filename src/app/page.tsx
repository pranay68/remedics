import type { Metadata } from "next";
import HomeClient from "@/components/site/home/HomeClient";

const title = "DGS by Aternox | Verified Synthesis Engine for High-Stakes Work";
const description =
  "DGS is a verified synthesis engine for high-stakes work: structured outputs, traceable logic gates, reviewable artifacts, and governed workflows.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/", site).href;

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    url: canonicalUrl,
    description,
    isPartOf: {
      "@type": "WebSite",
      name: "Aternox",
      url: site.href,
    },
    publisher: {
      "@type": "Organization",
      name: "Aternox",
      url: site.href,
      logo: {
        "@type": "ImageObject",
        url: new URL("/logo.png", site).href,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
