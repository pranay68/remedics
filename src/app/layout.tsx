import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Space_Grotesk, Syncopate } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-syncopate",
});

export const metadata: Metadata = {
  title: {
    default: "Aternox — Architecting the Future of Code",
    template: "%s — Aternox",
  },
  description: "Aternox builds the infrastructure that powers the next era of software development. From intelligent coding assistants to autonomous agents.",
  metadataBase: new URL("https://aternox.com"),
  openGraph: {
    title: "Aternox — Architecting the Future of Code",
    description: "Aternox builds the infrastructure that powers the next era of software development. From intelligent coding assistants to autonomous agents.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable} ${syncopate.variable} antialiased min-h-full bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}