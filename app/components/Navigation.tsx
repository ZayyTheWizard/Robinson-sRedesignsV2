"use client";

export default function Navigation() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
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
    <nav className="hidden md:flex gap-8 text-base">
      <a
        href="#home"
        onClick={(e) => handleSmoothScroll(e, "home")}
        className="hover:text-orange-400 transition-colors"
      >
        Home
      </a>
      <a
        href="#services"
        onClick={(e) => handleSmoothScroll(e, "services")}
        className="hover:text-orange-400 transition-colors"
      >
        Services
      </a>
      <a
        href="#about"
        onClick={(e) => handleSmoothScroll(e, "about")}
        className="hover:text-orange-400 transition-colors"
      >
        About
      </a>
      <a
        href="#pricing"
        onClick={(e) => handleSmoothScroll(e, "pricing")}
        className="hover:text-orange-400 transition-colors"
      >
        Pricing
      </a>
      <a
        href="#contact"
        onClick={(e) => handleSmoothScroll(e, "contact")}
        className="hover:text-orange-400 transition-colors"
      >
        Contact
      </a>
    </nav>
  );
}

