"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Scroll-triggered animations for the whole site.
 *
 * Elements matching the selectors below are tagged with a `data-reveal`
 * effect and staggered by their position among siblings. When they scroll
 * into view they animate in, then the attribute is removed so hover effects
 * behave normally. Numbers marked `.stats__value` count up.
 *
 * Content is fully visible without JavaScript and for visitors who prefer
 * reduced motion — the hidden starting state only applies once this
 * component has added `anim-ready` to <html>.
 */
const RULES: [selector: string, effect: string][] = [
  [".section-heading", "drop"],
  [".story--wide:not(.story--reverse) .story__media", "slide-left"],
  [".story--wide.story--reverse .story__media", "slide-right"],
  [".story--wide .story__text", "rise"],
  [".story--card", "rise"],
  [".feature__text", "slide-left"],
  [".feature__tile", "zoom"],
  [".page-card", "rise"],
  [".stats li", "rise"],
  [".highlights__item", "rise"],
  [".duo__card", "rise"],
  [".timeline__item", "drop"],
  [".cv__item", "slide-left"],
  [".panel", "slide-right"],
  [".facts", "rise"],
  [".about__media", "slide-left"],
  [".bio__text > *", "rise"],
  [".interview", "rise"],
  [".split > *:first-child", "slide-left"],
  [".split > *:last-child", "slide-right"],
  [".masonry li", "zoom"],
  [".marquee", "rise"],
  [".chips", "drop"],
  [".footer-cta", "rise"],
  [".site-footer__brand, .site-footer__col", "rise"],
];

const STAGGER_MS = 90;

function countUp(el: HTMLElement) {
  const text = el.textContent ?? "";
  const match = text.match(/^(\d+)(.*)$/);
  if (!match) return;
  const target = Number(match[1]);
  const suffix = match[2];
  const duration = 1400;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - start) / duration);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = `${Math.round(target * eased)}${suffix}`;
    if (t < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    root.classList.add("anim-ready");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          el.classList.add("is-visible");
          el.querySelectorAll<HTMLElement>(".stats__value").forEach(countUp);
          if (el.matches(".stats__value")) countUp(el);
          const delay = parseInt(el.style.getPropertyValue("--d") || "0", 10);
          window.setTimeout(() => {
            el.removeAttribute("data-reveal");
            el.classList.remove("is-visible");
            el.style.removeProperty("--d");
          }, 1100 + delay);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    const tag = (scope: ParentNode) => {
      for (const [selector, effect] of RULES) {
        scope.querySelectorAll<HTMLElement>(selector).forEach((el) => {
          if (el.dataset.revealDone) return;
          el.dataset.revealDone = "1";
          const siblings = el.parentElement ? Array.from(el.parentElement.children) : [el];
          const index = Math.max(0, siblings.indexOf(el));
          el.dataset.reveal = effect;
          el.style.setProperty("--d", `${(index % 6) * STAGGER_MS}ms`);
          io.observe(el);
        });
      }
    };

    tag(document);

    // Pick up elements added later (e.g. gallery filters).
    const mo = new MutationObserver((records) => {
      for (const r of records) r.addedNodes.forEach((n) => n instanceof HTMLElement && tag(n.parentElement ?? n));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
