import Link from "next/link";

const coreLinks = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/trust", label: "Trust" },
];

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/careers", label: "Careers" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

const topicLinks = [
  { href: "/autonomous-coding-software", label: "Autonomous coding software" },
  {
    href: "/autonomous-software-development",
    label: "Autonomous software development",
  },
  { href: "/waitlist", label: "Waitlist" },
];

export function Footer() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://aternox.site";
  const site = new URL(siteUrl);
  const navigationJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Aternox site navigation",
    itemListElement: [...coreLinks, ...companyLinks, ...topicLinks].map(
      (item, index) => ({
        "@type": "SiteNavigationElement",
        position: index + 1,
        name: item.label,
        url: new URL(item.href, site).href,
      })
    ),
  };

  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(navigationJsonLd) }}
      />
      <div className="mx-auto max-w-6xl px-5 py-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_repeat(3,1fr)]">
          <div className="text-sm">
            <div className="text-display text-sm font-medium tracking-[-0.01em] text-white/90">
              Aternox
            </div>
            <div className="mt-2 text-[13px] leading-relaxed text-white/50">
              ReArch is the public recovery product for broken, messy, or stalled
              AI-built software.
            </div>
            <div className="mt-4 max-w-xs text-[12px] leading-relaxed text-white/40">
              The public site explains the process, pricing doctrine, and trust
              posture without exposing hidden package internals or fabricated proof.
            </div>
            <div className="mt-4 text-xs text-white/60">© 2026 Aternox</div>
          </div>

          <FooterColumn title="Core" links={coreLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Topics" links={topicLinks} />
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/[0.06] pt-6 text-[12px] text-white/40">
          <span>Case understanding before quote</span>
          <span className="text-white/20">•</span>
          <span>Bounded recovery</span>
          <span className="text-white/20">•</span>
          <span>Honest limits</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <div className="text-[11px] font-mono uppercase tracking-widest text-white/35">
        {title}
      </div>
      <div className="mt-4 flex flex-col gap-3 text-[13px] text-white/50">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="transition-colors hover:text-white/80"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
