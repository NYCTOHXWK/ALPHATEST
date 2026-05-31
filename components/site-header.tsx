"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/certifications", label: "Certifications" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  const pathname = usePathname();
  const [isFolded, setIsFolded] = useState(false);

  useEffect(() => {
    let previousY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingDown = currentY > previousY;
      setIsFolded(scrollingDown && currentY > 48);
      previousY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const shouldCollapseNav = isFolded;

  return (
    <header className="site-header" data-folded={isFolded}>
      <Link className="brand" href="/">
        Vinay
      </Link>
      <nav
        className="nav-links"
        aria-label="Primary"
        aria-hidden={shouldCollapseNav}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              className="nav-link"
              href={item.href}
              data-active={isActive}
              tabIndex={shouldCollapseNav ? -1 : 0}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
      <ThemeToggle />
    </header>
  );
}
