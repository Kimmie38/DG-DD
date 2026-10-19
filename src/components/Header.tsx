"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, person, type NavItem } from "@/content/site";
import { LogoMark } from "./Logo";

const isGroup = (item: NavItem): item is Extract<NavItem, { children: unknown }> => "children" in item;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus after navigating.
  useEffect(() => {
    setMenuOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  // Close the dropdown on outside click or Escape.
  useEffect(() => {
    if (!openGroup && !menuOpen) return;
    const onDown = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) setOpenGroup(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenGroup(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [openGroup, menuOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header__inner">
        <Link href="/" className="wordmark" aria-label={`${person.name} — home`}>
          <LogoMark size={46} />
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="sr-only">Menu</span>
          <span aria-hidden className={`menu-toggle__bars ${menuOpen ? "is-open" : ""}`} />
        </button>
        <nav ref={navRef} id="site-nav" className={`site-nav ${menuOpen ? "is-open" : ""}`} aria-label="Main">
          <ul className="site-nav__list">
            {nav.map((item) => {
              if (!isGroup(item)) {
                return (
                  <li key={item.href}>
                    <Link href={item.href} className="site-nav__link" aria-current={isActive(item.href) ? "page" : undefined}>
                      {item.label}
                    </Link>
                  </li>
                );
              }
              const open = openGroup === item.label;
              const groupActive = item.children.some((c) => isActive(c.href));
              const panelId = `nav-${item.label.toLowerCase()}`;
              return (
                <li key={item.label} className={`site-nav__group ${open ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className={`site-nav__link site-nav__trigger ${groupActive ? "is-active" : ""}`}
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenGroup(open ? null : item.label)}
                  >
                    {item.label}
                    <svg aria-hidden viewBox="0 0 12 12" width="12" height="12" className="site-nav__caret">
                      <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <ul id={panelId} className="site-nav__panel">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="site-nav__sublink"
                          aria-current={isActive(child.href) ? "page" : undefined}
                        >
                          <span className="site-nav__subtitle">{child.label}</span>
                          {child.description && <span className="site-nav__desc">{child.description}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
