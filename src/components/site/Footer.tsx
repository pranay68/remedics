import Link from "next/link";
import Image from "next/image";
import { Magnetic } from "@/components/animations/Magnetic";

const links = [
  { href: "/product", label: "Product" },
  { href: "/safety", label: "Safety" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const legal = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black pt-24 pb-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-5">
            <Link href="/" className="group flex items-center gap-3 mb-6">
              <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-white/10 bg-white/5 transition-all duration-500 group-hover:border-white/20">
                <Image
                  src="/logo.png"
                  alt="Aternox Logo"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="font-futuristic text-xs font-bold tracking-[0.3em] uppercase text-white/90">
                Aternox
              </div>
            </Link>
            <p className="text-lg text-white/40 max-w-sm leading-relaxed mb-8">
              Engineering high-performance AI infrastructure for the world's most
              ambitious developers.
            </p>
            <div className="space-y-1">
              <div className="text-xs font-display font-bold uppercase tracking-widest text-white/20 mb-2">
                Headquarters
              </div>
              <div className="text-sm text-white/40">Chandranagar, Ward 07</div>
              <div className="text-sm text-white/40">Nepal</div>
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-8">
            <div className="text-xs font-display font-bold uppercase tracking-widest text-white/20 mb-6">
              Platform
            </div>
            <ul className="space-y-4">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs font-display font-bold uppercase tracking-widest text-white/20 mb-6">
              Legal
            </div>
            <ul className="space-y-4">
              {legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-white/20 font-mono">
            © 2026 ATERNOX INC. ALL RIGHTS RESERVED.
          </div>
          <div className="flex gap-8">
            <Link
              href="https://github.com"
              className="text-xs text-white/20 hover:text-white transition-colors font-mono uppercase tracking-widest"
            >
              Github
            </Link>
            <Link
              href="https://twitter.com"
              className="text-xs text-white/20 hover:text-white transition-colors font-mono uppercase tracking-widest"
            >
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
