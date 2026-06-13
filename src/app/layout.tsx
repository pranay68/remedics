import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { productName, siteDescription, siteName, siteTitle } from "@/content/site";

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
    default: siteTitle,
    template: "%s | Aternox",
  },
  description: siteDescription,
  metadataBase: site,
  applicationName: productName,
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
    title: siteTitle,
    description: siteDescription,
    type: "website",
    siteName,
    url: site,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationId = new URL("/#organization", site).href;
  const websiteId = new URL("/#website", site).href;
  const softwareId = new URL("/#product", site).href;

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": organizationId,
    name: siteName,
    url: site.href,
    logo: new URL("/logo.png", site).href,
    description:
      "Aternox is the parent company behind ReArch, a recovery service for broken or messy AI-built software.",
    sameAs: [],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId,
    name: siteName,
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
    name: productName,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: site.href,
    image: new URL("/logo.png", site).href,
    brand: {
      "@type": "Brand",
      name: siteName,
    },
    publisher: {
      "@id": organizationId,
    },
    isPartOf: {
      "@id": websiteId,
    },
    description: siteDescription,
    featureList: [
      "Case understanding before quote",
      "Explicit confirmation before run",
      "Scoped recovery for AI-built software",
      "Bounded package delivery",
    ],
  };

  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} min-h-full bg-background text-foreground antialiased`}
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
