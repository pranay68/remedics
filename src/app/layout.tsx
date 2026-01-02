import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased min-h-full bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
