"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
	{ href: "/product", label: "Reprog" },
	{ href: "/pricing", label: "Pricing" },
	{ href: "/safety", label: "Safety" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
	if (href === "/") return pathname === "/";
	return pathname === href || pathname.startsWith(href + "/");
}

export function Header() {
	const pathname = usePathname();
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`sticky top-0 z-50 border-b transition-all duration-300 ${
				scrolled
					? "border-white/[0.08] bg-black/70 backdrop-blur-xl"
					: "border-white/[0.04] bg-black/30 backdrop-blur-md"
			} supports-[backdrop-filter]:bg-black/30`}
		>
			<div className="mx-auto flex max-w-4xl items-center justify-between gap-6 px-5 py-4">
				<Link
					href="/"
					className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
				>
					<div className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] shadow-2xl transition-transform duration-500 group-hover:scale-110">
						<Image 
							src="/logo.png" 
							alt="Aternox Logo" 
							width={36}
							height={36}
							className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125 group-hover:rotate-3"
						/>
						<div className="absolute inset-0 bg-gradient-to-tr from-brand/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
					</div>
					<div className="leading-tight">
						<div className="font-sans text-sm font-semibold tracking-[-0.03em] text-white/90">
							Aternox
						</div>
						<div className="mt-0.5 flex items-center gap-2">
							<div className="text-[11px] font-medium tracking-tight text-white/40">Company</div>
							<span className="h-1 w-1 rounded-full bg-white/20" />
							<div className="text-[11px] font-medium tracking-tight text-white/70">
								Reprog
							</div>
						</div>
					</div>
				</Link>

				<nav className="hidden items-center gap-1 md:flex">
					{nav.map((item) => {
						const active = isActive(pathname, item.href);
						return (
							<Link
								key={item.href}
								href={item.href}
								className={`rounded-full px-3 py-1.5 text-[13px] transition-all duration-200 ${
									active
										? "bg-white/[0.08] text-white"
										: "text-white/50 hover:text-white/80 hover:bg-white/[0.04]"
								}`}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>

				<div className="flex items-center gap-2">
					<Link
						href="/download"
						className="hidden md:inline-flex h-9 items-center justify-center rounded-full bg-white px-4 text-[13px] font-medium text-black transition-all duration-200 hover:bg-white/90"
					>
						Download Reprog
						<span className="ml-2 rounded-full bg-black/10 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-black/70">
							SOON
						</span>
					</Link>
				</div>
			</div>
		</header>
	);
}
