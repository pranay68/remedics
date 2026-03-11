import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
const site = new URL(siteUrl);
const googleSiteVerification = process.env.GOOGLE_SITE_VERIFICATION;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DGS by Aternox | Verified Synthesis Engine for High-Stakes Work",
    template: "%s | Aternox",
  },
  description:
    "DGS is a verified synthesis engine for high-stakes work: structured outputs, traceable logic gates, reviewable artifacts, and governed workflows.",
  metadataBase: site,
  applicationName: "DGS",
  category: "Software",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: googleSiteVerification
    ? { google: googleSiteVerification }
    : undefined,
  openGraph: {
    title: "DGS by Aternox | Verified Synthesis Engine for High-Stakes Work",
    description:
      "DGS is a verified synthesis engine for high-stakes work: structured outputs, traceable logic gates, reviewable artifacts, and governed workflows.",
    type: "website",
    siteName: "Aternox",
    url: site,
  },
  twitter: {
    card: "summary_large_image",
    title: "DGS by Aternox | Verified Synthesis Engine for High-Stakes Work",
    description:
      "DGS is a verified synthesis engine for high-stakes work: structured outputs, traceable logic gates, reviewable artifacts, and governed workflows.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationId = new URL("/#organization", site).href;
  const websiteId = new URL("/#website", site).href;
  const softwareId = new URL("/dgs#software", site).href;

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: "Aternox",
    url: site.href,
    logo: new URL("/logo.png", site).href,
    description:
      "Aternox builds DGS, a verified synthesis engine for high-stakes work with structured outputs, traceable logic gates, and governed workflows.",
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Delaware",
        addressCountry: "US",
      },
    },
    sameAs: [],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: "Aternox",
    url: site.href,
    publisher: {
      "@id": organizationId,
    },
    inLanguage: "en-US",
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": softwareId,
    name: "DGS — Deterministic General Synthesis",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: new URL("/dgs", site).href,
    image: new URL("/logo.png", site).href,
    offers: {
      "@type": "Offer",
      url: new URL("/pricing", site).href,
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
    brand: {
      "@type": "Brand",
      name: "Aternox",
    },
    publisher: {
      "@id": organizationId,
    },
    isPartOf: {
      "@id": websiteId,
    },
    softwareVersion: "v1",
    releaseNotes: "Private development; Standard engine availability planned soon.",
    description:
      "DGS is a verified synthesis engine for high-stakes work: structured outputs, traceable logic gates, reviewable artifacts, and governed workflows.",
    featureList: [
      "Structured outputs",
      "Traceable logic gates",
      "Reviewable artifacts",
      "Governed workflows",
      "Proof-led expansion",
    ],
  };

  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased min-h-full bg-background text-foreground`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
