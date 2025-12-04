"use client";

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
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <a href={href} onClick={handleSmoothScroll} className={className}>
      {children}
    </a>
  );
}

