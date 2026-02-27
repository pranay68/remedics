import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
const site = new URL(siteUrl);

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
    default: "DGS — Deep General Synthesis | Aternox",
    template: "%s | Aternox",
  },
  description:
    "DGS is a deterministic synthesis engine by Aternox. Not a language model. Not prediction. Verifiable, traceable output across every domain.",
  metadataBase: site,
  alternates: {
    canonical: "/",
  },
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
  // Add your Search Console verification when ready.
  // verification: { google: "<token>" },
  openGraph: {
    title: "DGS — Deep General Synthesis | Aternox",
    description:
      "DGS is a deterministic synthesis engine by Aternox. Not a language model. Not prediction. Verifiable, traceable output across every domain.",
    type: "website",
    siteName: "Aternox",
    url: site,
  },
  twitter: {
    card: "summary_large_image",
    title: "DGS — Deep General Synthesis | Aternox",
    description:
      "DGS is a deterministic synthesis engine by Aternox. Not a language model. Not prediction. Verifiable, traceable output across every domain.",
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
    name: "DGS — Deep General Synthesis",
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
      "DGS is a deterministic synthesis engine by Aternox. Not a language model. Not prediction. Verifiable, traceable output across every domain.",
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
