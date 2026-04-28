"use client";

import { smoothScrollToId } from "../lib/smoothScrollToId";

export default function FooterLegalLinks() {
	const goHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		smoothScrollToId("home");
	};

	return (
		<div className="flex gap-6">
			<a
				href="#home"
				onClick={goHome}
				className="text-gray-400 hover:text-[#ff6b35] transition-colors"
			>
				Privacy Policy
			</a>
			<a
				href="#home"
				onClick={goHome}
				className="text-gray-400 hover:text-[#ff6b35] transition-colors"
			>
				Terms of Service
			</a>
		</div>
	);
}
