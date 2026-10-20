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
 * Safety rules so content can never get stuck invisible:
 * - Content is visible without JavaScript and with reduced motion — the
 *   hidden starting state only applies while <html> has `anim-ready`.
 * - Each run tracks its own elements; when it is torn down (route change,
 *   React Strict Mode re-run) every element it hid is revealed again.
 * - A failsafe reveals anything still hidden after a few seconds on screen.
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
const FAILSAFE_MS = 2500;

function countUp(el: HTMLElement) {
  const text = el.dataset.countTarget ?? el.textContent ?? "";
  const match = text.match(/^(\d+)(.*)$/);
  if (!match) return;
  el.dataset.countTarget = text;
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

function clearReveal(el: HTMLElement) {
  el.removeAttribute("data-reveal");
  el.classList.remove("is-visible");
  el.style.removeProperty("--d");
}

export function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const root = document.documentElement;
    const tracked = new Set<HTMLElement>();
    const timers = new Set<number>();
    const later = (fn: () => void, ms: number) => {
      const id = window.setTimeout(() => {
        timers.delete(id);
        fn();
      }, ms);
      timers.add(id);
    };

    const show = (el: HTMLElement) => {
      if (!tracked.has(el)) return;
      tracked.delete(el);
      io.unobserve(el);
      el.classList.add("is-visible");
      el.querySelectorAll<HTMLElement>(".stats__value").forEach(countUp);
      const delay = parseInt(el.style.getPropertyValue("--d") || "0", 10);
      later(() => clearReveal(el), 1100 + delay);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            show(el);
          } else if (entry.boundingClientRect.top < 0) {
            // Already scrolled past (e.g. jumped to an anchor): just show it.
            show(el);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    const tag = (scope: ParentNode) => {
      for (const [selector, effect] of RULES) {
        scope.querySelectorAll<HTMLElement>(selector).forEach((el) => {
          if (tracked.has(el) || el.dataset.reveal) return;
          const siblings = el.parentElement ? Array.from(el.parentElement.children) : [el];
          const index = Math.max(0, siblings.indexOf(el));
          el.dataset.reveal = effect;
          el.style.setProperty("--d", `${(index % 6) * STAGGER_MS}ms`);
          tracked.add(el);
          io.observe(el);
        });
      }
    };

    // Wait one frame so the new page's DOM is fully in place.
    const raf = requestAnimationFrame(() => {
      root.classList.add("anim-ready");
      tag(document);
    });

    // Pick up elements added later (e.g. gallery filters, streamed content).
    const mo = new MutationObserver((records) => {
      for (const r of records) {
        r.addedNodes.forEach((n) => {
          if (n instanceof HTMLElement) tag(n.parentElement ?? n);
        });
      }
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // Failsafe: anything on screen that is still hidden gets revealed.
    const failsafe = window.setInterval(() => {
      const vh = window.innerHeight;
      tracked.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < vh && r.bottom > 0) show(el);
        if (!el.isConnected) tracked.delete(el);
      });
    }, FAILSAFE_MS);

    return () => {
      cancelAnimationFrame(raf);
      window.clearInterval(failsafe);
      timers.forEach((id) => window.clearTimeout(id));
      io.disconnect();
      mo.disconnect();
      // Never leave anything hidden behind.
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach(clearReveal);
      tracked.clear();
    };
  }, [pathname]);

  return null;
}
