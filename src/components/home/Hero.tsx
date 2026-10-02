"use client";

import { useEffect, useRef } from "react";
import { Arrow, LiquidButton } from "@/components/ui/LiquidButton";

const COPY = {
  eyebrow: "Design & engineering studio",
  sub: "We design and build brands, websites and software for founders. Calm process, clear work, a demo every Friday.",
  meta: ["Booking projects for [Month]", "Pakistan · working worldwide", "Reply within one working day"],
};

const H1 = "font-display text-[clamp(3.1rem,7.2vw,7rem)] leading-[0.98]";

/**
 * Section 1 — "Window". The desk photo full-bleed, one calm Cranio headline,
 * a short line and two actions, and a hairline meta bar. The pointer is a desk
 * lamp: inside its circle the headline lights up in Decor Yellow.
 */
export function Hero() {
  const box = useRef<HTMLDivElement>(null);
  const lit = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    const ov = lit.current;
    if (!el || !ov || !matchMedia("(hover: hover) and (pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = { x: 0, y: 0 };
    const c = { x: 0, y: 0 };
    let raf = 0;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      t.x = e.clientX - r.left;
      t.y = e.clientY - r.top;
    };
    const enter = (e: PointerEvent) => {
      move(e);
      c.x = t.x;
      c.y = t.y;
      ov.style.opacity = "1";
    };
    const leave = () => (ov.style.opacity = "0");
    const tick = () => {
      c.x += (t.x - c.x) * 0.16;
      c.y += (t.y - c.y) * 0.16;
      ov.style.setProperty("--x", `${c.x}px`);
      ov.style.setProperty("--y", `${c.y}px`);
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    tick();
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <section aria-labelledby="hero-title" className="relative flex h-[100svh] min-h-[680px] flex-col overflow-hidden bg-void text-fg">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/desk-window.jpg" alt="" fetchPriority="high" className="hero-photo absolute inset-0 size-full object-cover object-[50%_42%]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgb(21_20_25/0.6)_0%,rgb(21_20_25/0.05)_26%,rgb(21_20_25/0.5)_55%,rgb(21_20_25/0.95)_100%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1320px] flex-1 flex-col justify-end px-6 pt-28 pb-10 font-ui lg:px-12">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="load mb-6 flex items-center gap-3 text-[13px] font-medium text-fg/80">
              <span className="lamp-dot" aria-hidden="true" />
              {COPY.eyebrow}
            </p>
            <div ref={box} className="relative">
              <h1 id="hero-title" className={`load ${H1}`} style={{ "--i": 1 } as React.CSSProperties}>
                Websites you&rsquo;re proud to send.
              </h1>
              <div
                ref={lit}
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 text-lamp opacity-0 transition-opacity duration-300 max-md:hidden ${H1}`}
                style={{
                  maskImage: "radial-gradient(circle 96px at var(--x,-999px) var(--y,-999px), #000 98%, transparent 100%)",
                  WebkitMaskImage: "radial-gradient(circle 96px at var(--x,-999px) var(--y,-999px), #000 98%, transparent 100%)",
                }}
              >
                Websites you&rsquo;re proud to send.
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-7 lg:col-span-5 lg:pb-3 lg:pl-10">
            <p className="load max-w-[38ch] text-[16px] leading-[1.65] text-fg/85" style={{ "--i": 2 } as React.CSSProperties}>
              {COPY.sub}
            </p>
            <div className="load flex flex-wrap gap-3" style={{ "--i": 3 } as React.CSSProperties}>
              <LiquidButton href="/contact" variant="lamp">
                Start a project <Arrow />
              </LiquidButton>
              <LiquidButton href="/work" variant="ghost-night">
                See our work
              </LiquidButton>
            </div>
          </div>
        </div>

        <ul className="load mt-14 grid gap-3 border-t border-fg/15 pt-6 text-[13px] text-fg/65 sm:grid-cols-3 lg:mt-16" style={{ "--i": 4 } as React.CSSProperties}>
          {COPY.meta.map((m, k) => (
            <li key={m} className={k === 1 ? "sm:text-center" : k === 2 ? "sm:text-right" : ""}>
              {m}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
