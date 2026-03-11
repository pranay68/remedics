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
  const faqItems = [
    {
      question: "What is DGS?",
      answer:
        "DGS is Aternox's deterministic general synthesis engine for structured, reviewable, high-stakes work. It is built around logic gates and reviewer-ready artifacts rather than chat output.",
    },
    {
      question: "Is DGS public yet?",
      answer:
        "No. DGS is not public yet. The Standard engine is the first planned public release, while Deep is selective and Synthetic is restricted.",
    },
    {
      question: "What proof exists today?",
      answer:
        "Aternox has published a proof case showing DGS produced a complete preclinical FLT3 research architecture with 58 structured documents in one run.",
    },
  ];

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

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
