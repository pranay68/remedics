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
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aternox",
    url: site.href,
    logo: new URL("/logo.png", site).href,
    sameAs: [],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Aternox",
    url: site.href,
  };

  const softwareAppJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "DGS — Deterministic General Synthesis",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/PreOrder",
    },
    brand: {
      "@type": "Brand",
      name: "Aternox",
    },
    publisher: {
      "@type": "Organization",
      name: "Aternox",
      url: site.href,
    },
    url: new URL("/dgs", site).href,
    description:
      "DGS is a verified synthesis engine for high-stakes work: structured outputs, traceable logic gates, reviewable artifacts, and governed workflows.",
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
