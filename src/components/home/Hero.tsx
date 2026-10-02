"use client";

import { useEffect, useRef } from "react";
import { Arrow, LiquidButton } from "@/components/ui/LiquidButton";
import { ServiceStrip } from "./ServiceStrip";

const WORDS = "hero-type block text-[clamp(3.2rem,11vw,10.5rem)]";

/**
 * The desk by the window, at night. Two poster words sit over the photo; the
 * pointer is a desk lamp, and inside its circle the words light up in Decor Yellow.
 */
export function Hero() {
  const box = useRef<HTMLDivElement>(null);
  const lit = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = box.current;
    const ov = lit.current;
    if (!el || !ov || !matchMedia("(hover: hover) and (pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = { x: -999, y: -999 };
    const c = { x: -999, y: -999 };
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
      c.x += (t.x - c.x) * 0.18;
      c.y += (t.y - c.y) * 0.18;
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

  const words = (overlay: boolean) => (
    <div aria-hidden={overlay || undefined} className="flex flex-col gap-2 md:gap-3">
      <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
        <span className={`${WORDS} load ${overlay ? "text-lamp" : "text-fg"}`} style={{ "--i": 1 } as React.CSSProperties}>
          Quiet
        </span>
        <div className={`load max-md:hidden ${overlay ? "invisible" : ""}`} style={{ "--i": 4 } as React.CSSProperties}>
          <LiquidButton href="/contact" variant="sea" size="lg">
            Start a project <Arrow />
          </LiquidButton>
        </div>
      </div>
      <span className={`${WORDS} load ml-[4vw] md:ml-[14vw] ${overlay ? "text-lamp" : "text-fg"}`} style={{ "--i": 2 } as React.CSSProperties}>
        Confidence
      </span>
    </div>
  );

  return (
    <section aria-labelledby="hero-title" className="relative flex h-[100svh] min-h-[640px] flex-col justify-end overflow-hidden bg-void">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/desk-window.jpg" alt="" fetchPriority="high" className="absolute inset-0 size-full object-cover object-[50%_40%] brightness-[0.62] saturate-[0.85]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,rgb(21_20_25/0.55)_0%,transparent_30%,rgb(21_20_25/0.35)_55%,#151419_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(90deg,rgb(21_20_25/0.75)_0%,transparent_60%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_38%,rgb(246_187_2/0.16),transparent_55%)] mix-blend-screen" />

      <p className="load absolute top-28 right-5 left-5 z-10 max-w-[32ch] text-[17px] leading-relaxed text-fg/85 sm:left-auto sm:right-8 sm:text-right md:top-32 lg:right-12 lg:text-[19px]" style={{ "--i": 3 } as React.CSSProperties}>
        Websites and software for founders who are done apologising for their own site.
      </p>

      <div className="relative mx-auto w-full max-w-[1320px] px-5 pb-32 sm:px-8 md:pb-40 lg:px-12">
        <h1 id="hero-title" className="sr-only">
          Quiet confidence. VexraLab designs and builds websites and software for founders.
        </h1>

        <div ref={box} className="relative py-4">
          {words(false)}
          <div
            ref={lit}
            className="pointer-events-none absolute inset-0 py-4 opacity-0 transition-opacity duration-300 max-md:hidden"
            style={{
              maskImage: "radial-gradient(circle 110px at var(--x,-999px) var(--y,-999px), #000 99%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(circle 110px at var(--x,-999px) var(--y,-999px), #000 99%, transparent 100%)",
            }}
          >
            {words(true)}
          </div>
        </div>
        <div className="load mt-8 md:hidden" style={{ "--i": 4 } as React.CSSProperties}>
          <LiquidButton href="/contact" variant="sea">
            Start a project <Arrow />
          </LiquidButton>
        </div>

      </div>
      <ServiceStrip />
    </section>
  );
}
