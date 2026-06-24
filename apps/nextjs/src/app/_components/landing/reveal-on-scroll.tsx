"use client";

import { useEffect } from "react";

/**
 * Progressive-enhancement scroll reveal. Mirrors the original static page:
 * content is visible by default; only when JS + IntersectionObserver are
 * available and the user hasn't requested reduced motion do we add `js-anim`
 * (which hides `.reveal` until it scrolls into view). Renders nothing.
 */
export function RevealOnScroll() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window) || els.length === 0) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    document.documentElement.classList.add("js-anim");
    const io = new IntersectionObserver(
      (entries) => {
        for (const en of entries) {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    for (const el of els) io.observe(el);

    return () => {
      io.disconnect();
      document.documentElement.classList.remove("js-anim");
    };
  }, []);

  return null;
}
