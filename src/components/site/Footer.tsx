import Link from "next/link";

const links = [
  { href: "/terms", label: "Terms" },
  { href: "/privacy", label: "Privacy" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black">
      <div className="mx-auto flex max-w-4xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div className="text-sm">
          <div className="text-display text-sm font-medium tracking-[-0.01em] text-white/90">Aternox</div>
          <div className="mt-2 text-[13px] leading-relaxed text-white/50">
            The autonomous system that builds enterprise-grade software.
          </div>
          <div className="mt-2 text-[11px] font-mono text-white/40">
            Newark, Delaware, USA
          </div>
          <div className="mt-4 text-xs text-white/60">
            © 2026 Aternox Inc.
          </div>
        </div>

        <div className="flex items-center gap-4 text-[13px] text-white/50">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition-colors hover:text-white/80">
              {l.label}
            </Link>
          ))}
          <span className="text-white/30">© 2026</span>
        </div>
      </div>
    </footer>
  );
}
