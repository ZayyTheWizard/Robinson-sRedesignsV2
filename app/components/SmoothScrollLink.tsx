"use client";

import { smoothScrollToId } from "../lib/smoothScrollToId";

interface SmoothScrollLinkProps {
	href: string;
	targetId: string;
	children: React.ReactNode;
	className?: string;
}

export default function SmoothScrollLink({
	href,
	targetId,
	children,
	className,
}: SmoothScrollLinkProps) {
	const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault();
		smoothScrollToId(targetId);
	};

	return (
		<a href={href} onClick={handleSmoothScroll} className={className}>
			{children}
		</a>
	);
}
