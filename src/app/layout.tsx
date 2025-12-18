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
    default: "Remedics — Clinical Intelligence, Engineered",
    template: "%s — Remedics",
  },
  description:
    "Remedics builds premium clinical intelligence infrastructure with auditability, safety controls, and extreme workflow speed.",
  metadataBase: new URL("https://remedics.ai"),
  openGraph: {
    title: "Remedics — Clinical Intelligence, Engineered",
    description:
      "Premium clinical intelligence infrastructure with auditability, safety controls, and extreme workflow speed.",
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
