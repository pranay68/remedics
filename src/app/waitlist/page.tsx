import type { Metadata } from "next";
import Link from "next/link";
import { WaitlistForm } from "@/components/site/waitlist/WaitlistForm";
import { Shell } from "@/components/site/Shell";
import { Page } from "@/components/site/Page";
import { FadeIn } from "@/components/animations/FadeIn";

export const metadata: Metadata = {
    title: "Join the Waitlist | DGS by Aternox",
    description:
        "Join the DGS waitlist. DGS is not public yet, and the Standard engine is the first release coming soon.",
    alternates: { canonical: "/waitlist" },
    openGraph: {
        title: "Join the Waitlist | DGS by Aternox",
        description:
            "Join the DGS waitlist. DGS is not public yet, and the Standard engine is the first release coming soon.",
        url: "/waitlist",
    },
    twitter: {
        card: "summary_large_image",
        title: "Join the Waitlist | DGS by Aternox",
        description:
            "Join the DGS waitlist. DGS is not public yet, and the Standard engine is the first release coming soon.",
    },
};

export default function WaitlistPage() {
    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
    const site = new URL(siteUrl);
    const canonicalUrl = new URL("/waitlist", site).href;
    const faqItems = [
        {
            question: "Is DGS public yet?",
            answer:
                "No. DGS is not public yet. The waitlist is for early access updates when the Standard engine is ready.",
        },
        {
            question: "Which engines can I register interest in?",
            answer:
                "The waitlist supports interest selection for Standard, Deep, and Synthetic so Aternox can understand demand by engine type.",
        },
        {
            question: "Does joining the waitlist purchase access?",
            answer:
                "No. The waitlist is an interest and contact channel, not a purchasing flow or guarantee of access.",
        },
    ];

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
            "Join the DGS waitlist. DGS is not public yet, and the Standard engine is the first release coming soon.",
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
        <Shell>
            <Page
                eyebrow="Early Access"
                title="Early access to DGS."
                subtitle="DGS is not public yet. The Standard engine is coming soon, Deep is selective, and Synthetic is not publicly available."
            >
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(breadCrumbJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
                {/* EMAIL FORM */}
                <FadeIn>
                    <div className="glass rounded-3xl border border-gradient p-10 glow-intense max-w-2xl mx-auto">
                        <WaitlistForm source="waitlist-page" />
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="mt-12 rounded-3xl border border-border/70 bg-surface/50 p-8 max-w-5xl mx-auto">
                        <div className="text-xs font-mono font-semibold uppercase tracking-wider text-muted">FAQ</div>
                        <div className="mt-6 grid gap-4 md:grid-cols-3">
                            {faqItems.map((item) => (
                                <div key={item.question} className="rounded-2xl border border-border/70 bg-background/30 p-5">
                                    <h2 className="text-base font-semibold tracking-tight text-foreground">{item.question}</h2>
                                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                            <Link href="/dgs" className="btn-secondary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                                What is DGS?
                            </Link>
                            <Link href="/research" className="btn-primary inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition-all hover:scale-105">
                                See proof
                            </Link>
                        </div>
                    </div>
                </FadeIn>
            </Page>
        </Shell>
    );
}
