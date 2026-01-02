"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const nav = [
	{ href: "/product", label: "Product" },
	{ href: "/safety", label: "Safety" },
	{ href: "/about", label: "About" },
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
			className={`sticky top-0 z-50 border-b transition-all duration-500 ${
				scrolled
					? "border-white/10 bg-black/80 backdrop-blur-2xl py-3"
					: "border-white/0 bg-transparent py-5"
			}`}
		>
			<div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6">
				<Link
					href="/"
					className="group flex items-center gap-3 transition-opacity"
				>
					<div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-2xl transition-all duration-300 group-hover:border-white/20">
						<Image 
							src="/logo.png" 
							alt="Aternox Logo" 
							width={40}
							height={40}
							className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					</div>
					<div className="font-futuristic text-sm font-bold tracking-[0.3em] uppercase text-white/90 group-hover:text-white transition-colors">
						Aternox
					</div>
				</Link>

				<nav className="hidden items-center gap-2 md:flex bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-1">
					{nav.map((item) => {
						const active = isActive(pathname, item.href);
						return (
							<Link
								key={item.href}
								href={item.href}
								className={`rounded-full px-5 py-2 text-[13px] font-medium transition-all duration-300 ${
									active
										? "bg-white text-black shadow-xl"
										: "text-white/50 hover:text-white hover:bg-white/5"
								}`}
							>
								{item.label}
							</Link>
						);
					})}
				</nav>

				<div className="flex items-center gap-4">
					<Link
						href="/contact"
						className="hidden md:flex h-10 items-center justify-center rounded-full bg-white px-6 text-[13px] font-bold text-black transition-all hover:bg-white/90 active:scale-95"
					>
						Get Started
					</Link>
				</div>
			</div>
		</header>
	);
}
