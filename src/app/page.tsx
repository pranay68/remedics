import type { Metadata } from "next";
import HomeClient from "@/components/site/home/HomeClient";
import {
  fiveStages,
  productName,
  siteDescription,
  siteName,
  siteTitle,
} from "@/content/site";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function HomePage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const canonicalUrl = new URL("/", site).href;

  const faqItems = [
    {
      question: "What is ReArch?",
      answer:
        "ReArch is Aternox's recovery product for broken, messy, or stalled AI-built software. It starts with case understanding before any quote or run.",
    },
    {
      question: "When does pricing appear?",
      answer:
        "Pricing appears only after the case is built and explicitly confirmed.",
    },
    {
      question: "What happens after confirmation?",
      answer:
        "Once the case is confirmed, ReArch can issue a scoped quote, run the recovery work, and deliver a bounded package.",
    },
  ];

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: siteTitle,
    url: canonicalUrl,
    description: siteDescription,
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: site.href,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: site.href,
    },
    mainEntity: {
      "@type": "SoftwareApplication",
      name: productName,
      applicationCategory: "BusinessApplication",
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

  const howItWorksJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How ReArch recovery works",
    step: fiveStages.map((stage, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: stage.name,
      text: stage.summary,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howItWorksJsonLd) }}
      />
      <HomeClient />
    </>
  );
}
