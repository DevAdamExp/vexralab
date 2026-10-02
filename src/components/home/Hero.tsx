"use client";

import { useEffect, useRef } from "react";
import { Arrow, LiquidButton } from "@/components/ui/LiquidButton";
import { Mark } from "@/components/ui/Mark";
import { CONTAINER } from "@/components/ui/tokens";
import { DeskAtNight } from "./DeskAtNight";

/**
 * 02:14 AM. The founder's desk, drawn: lamp on, a template site glowing on the
 * monitor, the phone buzzing. The room's warm light drifts toward the pointer.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || !matchMedia("(hover: hover) and (pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const target = { x: 0.72, y: 0.4 };
    const cur = { ...target };
    let raf = 0;
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      target.x = (e.clientX - r.left) / r.width;
      target.y = (e.clientY - r.top) / r.height;
    };
    const tick = () => {
      cur.x += (target.x - cur.x) * 0.06;
      cur.y += (target.y - cur.y) * 0.06;
      el.style.setProperty("--lx", `${cur.x * 100}%`);
      el.style.setProperty("--ly", `${cur.y * 100}%`);
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener("pointermove", move);
    tick();
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", move);
    };
  }, []);

  return (
    <section
      ref={root}
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-night text-fg"
      style={{ "--lx": "72%", "--ly": "40%" } as React.CSSProperties}
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(720px_circle_at_var(--lx)_var(--ly),rgb(246_187_2/0.09),transparent_65%)]" />

      <div className={`${CONTAINER} grid min-h-[100svh] items-center gap-12 pt-32 pb-16 md:pt-36 lg:grid-cols-12 lg:gap-10 lg:pt-28 lg:pb-20`}>
        <div className="flex flex-col gap-8 lg:col-span-6">
          <p className="load label flex flex-wrap items-center gap-x-3 gap-y-2 text-muted">
            <span className="lamp-dot" aria-hidden="true" />
            <span className="text-lamp">02:14 AM</span>
            <span aria-hidden="true">·</span>
            <span>A founder is still awake</span>
          </p>

          <h1 id="hero-title" className="load text-[clamp(2.6rem,4.9vw,5rem)] leading-[0.98] font-semibold tracking-[-0.04em]" style={{ "--i": 1 } as React.CSSProperties}>
            You built something real. <span className="text-fg/50">So why does your website make you</span>{" "}
            <span className="voice font-light tracking-[-0.025em] text-lamp">
              <Mark onLoad delay={1300}>want to apologise?</Mark>
            </span>
          </h1>

          <p className="load max-w-[46ch] text-[18px] leading-[1.65] text-muted" style={{ "--i": 2 } as React.CSSProperties}>
            <strong className="font-semibold text-fg">VexraLab is a small design and engineering studio</strong> for founders tired of explaining their business twice: once on the website, then again on every call.
          </p>

          <div className="load flex flex-wrap gap-3" style={{ "--i": 3 } as React.CSSProperties}>
            <LiquidButton href="/contact">
              Start a project <Arrow />
            </LiquidButton>
            <LiquidButton href="#story" variant="ghost-night">
              Read the story <Arrow dir="down" />
            </LiquidButton>
          </div>
        </div>

        <div className="load lg:col-span-6" style={{ "--i": 2 } as React.CSSProperties}>
          <DeskAtNight />
        </div>
      </div>
    </section>
  );
}
