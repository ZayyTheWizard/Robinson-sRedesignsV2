"use client";

import { useEffect, useState } from "react";
import { smoothScrollToId } from "../lib/smoothScrollToId";

const NAV_ITEMS = [
	{ label: "Home", targetId: "home" },
	{ label: "Services", targetId: "services" },
	{ label: "About", targetId: "about" },
	{ label: "Pricing", targetId: "pricing" },
	{ label: "Contact", targetId: "contact" },
] as const;

const desktopLinkClass = "hover:text-orange-400 transition-colors";
const mobileLinkClass = `${desktopLinkClass} block py-1 text-base`;

export default function Navigation() {
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		if (!menuOpen) return;

		const onKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") setMenuOpen(false);
		};
		document.addEventListener("keydown", onKeyDown);
		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";

		return () => {
			document.removeEventListener("keydown", onKeyDown);
			document.body.style.overflow = prevOverflow;
		};
	}, [menuOpen]);

	const handleSmoothScroll = (
		e: React.MouseEvent<HTMLAnchorElement>,
		targetId: string,
		closeAfter?: boolean,
	) => {
		e.preventDefault();
		smoothScrollToId(targetId);
		if (closeAfter) setMenuOpen(false);
	};

	return (
		<>
			<nav className="hidden md:flex gap-8 text-base" aria-label="Primary">
				{NAV_ITEMS.map(({ label, targetId }) => (
					<a
						key={targetId}
						href={`#${targetId}`}
						onClick={(e) => handleSmoothScroll(e, targetId)}
						className={desktopLinkClass}
					>
						{label}
					</a>
				))}
			</nav>

			<div className="relative md:hidden">
				<button
					type="button"
					className="flex h-11 w-11 flex-col items-center justify-center gap-[6px]"
					aria-expanded={menuOpen}
					aria-controls="mobile-nav-menu"
					aria-label={menuOpen ? "Close menu" : "Open menu"}
					onClick={() => setMenuOpen((o) => !o)}
				>
					<span
						className={`block h-0.5 w-6 bg-white transition-transform duration-200 ease-out ${menuOpen ? "translate-y-[8px] rotate-45" : ""}`}
					/>
					<span
						className={`block h-0.5 w-6 bg-white transition-opacity duration-200 ease-out ${menuOpen ? "opacity-0" : ""}`}
					/>
					<span
						className={`block h-0.5 w-6 bg-white transition-transform duration-200 ease-out ${menuOpen ? "-translate-y-[8px] -rotate-45" : ""}`}
					/>
				</button>

				{menuOpen ? (
					<nav
						id="mobile-nav-menu"
						className="absolute left-1/2 top-full z-40 mt-0 w-screen max-w-[100vw] -translate-x-1/2 border-t border-white/10 bg-[#1a1a1a] px-6 py-4 shadow-lg"
						aria-label="Primary mobile"
					>
						<ul className="flex flex-col gap-4">
							{NAV_ITEMS.map(({ label, targetId }) => (
								<li key={targetId}>
									<a
										href={`#${targetId}`}
										className={mobileLinkClass}
										onClick={(e) => handleSmoothScroll(e, targetId, true)}
									>
										{label}
									</a>
								</li>
							))}
						</ul>
					</nav>
				) : null}
			</div>
		</>
	);
}
