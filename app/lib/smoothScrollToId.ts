const HEADER_OFFSET_PX = 80;

export function smoothScrollToId(targetId: string): void {
	const element = document.getElementById(targetId);
	if (!element) {
		return;
	}
	const elementPosition = element.getBoundingClientRect().top;
	const offsetPosition = elementPosition + window.scrollY - HEADER_OFFSET_PX;
	window.scrollTo({
		top: offsetPosition,
		behavior: "smooth",
	});
}
