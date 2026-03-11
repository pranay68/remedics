import type { Metadata } from "next";
import { WaitlistForm } from "@/components/site/waitlist/WaitlistForm";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
    title: "Join the Waitlist | DGS by Aternox",
    description:
        "Join the DGS waitlist. Fast and Mid modes coming first. Built for verified, traceable output by Aternox.",
    alternates: { canonical: "/waitlist" },
    openGraph: {
        title: "Join the Waitlist | DGS by Aternox",
        description:
            "Join the DGS waitlist. Fast and Mid modes coming first. Built for verified, traceable output by Aternox.",
        url: "/waitlist",
    },
    twitter: {
        card: "summary_large_image",
        title: "Join the Waitlist | DGS by Aternox",
        description:
            "Join the DGS waitlist. Fast and Mid modes coming first. Built for verified, traceable output by Aternox.",
    },
};

export default function WaitlistPage() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.com";
    const site = new URL(siteUrl);
    const canonicalUrl = new URL("/waitlist", site).href;

    const breadCrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: new URL("/", site).href,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "Waitlist",
                item: canonicalUrl,
            },
        ],
    };

    const webPageJsonLd = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Join the Waitlist",
        url: canonicalUrl,
        description:
            "Join the DGS waitlist. Fast and Mid modes coming first. Built for verified, traceable output by Aternox.",
        isPartOf: {
            "@type": "WebSite",
            name: "Aternox",
            url: site.href,
        },
        publisher: {
            "@type": "Organization",
            name: "Aternox",
            url: site.href,
        },
    };

    return (
        <Shell>
            <Page
                eyebrow="Early Access"
                title="Early access to DGS."
                subtitle="Fast and Mid modes are coming first. Deterministic Mode for enterprise shortly after. Synthetic Mode is not publicly available."
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
                />
                {/* EMAIL FORM */}
                <FadeIn>
                    <div className="glass rounded-3xl border border-gradient p-10 glow-intense max-w-2xl mx-auto">
                        <WaitlistForm />
                    </div>
                </FadeIn>
            </Page>
        </Shell>
    );
}
