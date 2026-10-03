"use client";

import { useEffect } from "react";

/**
 * The site's whole motion layer, one effect:
 * - reveal: sections and bands get data-in when they scroll into view (items stagger via --i);
 * - spotlight: [data-spot] cells track the pointer in --sx/--sy for a soft glow;
 * - magnet: [data-magnet] buttons lean a few pixels toward the pointer (fine pointers only).
 * Everything already on screen at load is revealed immediately, and nothing
 * hides at all without JS or with reduced motion.
 */
export function Motion() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const root = document.documentElement;
    root.dataset.motion = "on";

    const targets = document.querySelectorAll<HTMLElement>("main section, [data-r]");
    targets.forEach((el) => {
      el.querySelectorAll<HTMLElement>("li, [data-item]").forEach((li, k) => li.style.setProperty("--i", String(Math.min(k, 12))));
    });
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).dataset.in = "";
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );
    targets.forEach((el) => (el.getBoundingClientRect().top < innerHeight * 0.9 ? (el.dataset.in = "") : io.observe(el)));

    const fine = matchMedia("(pointer: fine)").matches;
    let raf = 0;
    let magnet: HTMLElement | null = null;
    const release = () => {
      magnet?.style.removeProperty("--mx");
      magnet?.style.removeProperty("--my");
      magnet = null;
    };
    const move = (e: PointerEvent) => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const t = e.target as Element | null;
        const el = t?.closest<HTMLElement>("[data-spot]");
        if (el) {
          const r = el.getBoundingClientRect();
          el.style.setProperty("--sx", `${e.clientX - r.left}px`);
          el.style.setProperty("--sy", `${e.clientY - r.top}px`);
        }
        if (!fine) return;
        const m = t?.closest<HTMLElement>("[data-magnet]") ?? null;
        if (m !== magnet) release();
        if (!m) return;
        magnet = m;
        const r = m.getBoundingClientRect();
        m.style.setProperty("--mx", `${((e.clientX - r.left) / r.width - 0.5) * 10}px`);
        m.style.setProperty("--my", `${((e.clientY - r.top) / r.height - 0.5) * 8}px`);
      });
    };
    addEventListener("pointermove", move, { passive: true });

    return () => {
      io.disconnect();
      removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
      delete root.dataset.motion;
    };
  }, []);
  return null;
}
