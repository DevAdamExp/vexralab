"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Arrow, LiquidButton } from "@/components/ui/LiquidButton";
import { Mark } from "@/components/ui/Mark";
import { CONTAINER } from "@/components/ui/tokens";

const H1 = "max-w-[15ch] text-[clamp(2.55rem,7.2vw,7.4rem)] font-semibold leading-[0.93] tracking-[-0.045em]";

/**
 * 02:14 AM. A dark room, a window onto the ridge, and one desk lamp that follows
 * the pointer. Inside the lamp's circle the headline is lit: same words, warm ink.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);
  const lit = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || !matchMedia("(hover: hover) and (pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const target = { x: el.clientWidth * 0.78, y: el.clientHeight * 0.24 };
    const cur = { ...target };
    let raf = 0;
    let visible = true;
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting));
    io.observe(el);
    const move = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      target.x = e.clientX - r.left;
      target.y = e.clientY - r.top;
    };
    const tick = () => {
      if (visible) {
        cur.x += (target.x - cur.x) * 0.09;
        cur.y += (target.y - cur.y) * 0.09;
        el.style.setProperty("--lx", `${cur.x}px`);
        el.style.setProperty("--ly", `${cur.y}px`);
        if (lit.current) {
          const r = lit.current.getBoundingClientRect();
          const er = el.getBoundingClientRect();
          lit.current.style.setProperty("--mx", `${cur.x - (r.left - er.left)}px`);
          lit.current.style.setProperty("--my", `${cur.y - (r.top - er.top)}px`);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerenter", () => lit.current?.style.setProperty("opacity", "1"));
    el.addEventListener("pointerleave", () => lit.current?.style.setProperty("opacity", "0"));
    tick();
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      el.removeEventListener("pointermove", move);
    };
  }, []);

  const headline = (overlay: boolean): ReactNode => (
    <>
      You built something real.{" "}
      <span className={overlay ? "" : "text-fg/55"}>So why does your website make you</span>{" "}
      <span className="voice font-light tracking-[-0.03em] text-lamp">{overlay ? <span className="relative inline-block whitespace-nowrap">want to apologise?</span> :<Mark gesture="underline" onLoad delay={1500}>want to apologise?</Mark>}</span>
    </>
  );

  return (
    <section
      ref={root}
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col justify-end overflow-hidden bg-night pt-36 pb-16 text-fg md:pb-20"
      style={{ "--lx": "78%", "--ly": "24%" } as React.CSSProperties}
    >
      {/* The lamp's pool of light. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(620px_circle_at_var(--lx)_var(--ly),rgb(246_187_2/0.15),rgb(246_187_2/0.04)_42%,transparent_70%)]" />

      {/* The window: four panes, the ridge beyond. */}
      <div aria-hidden="true" className="load pointer-events-none absolute top-[10%] right-[-6%] -z-10 grid aspect-[4/5] w-[min(52vw,640px)] grid-cols-2 grid-rows-[1fr_1.35fr] border border-fg/[0.09] max-md:hidden" style={{ "--i": 2 } as React.CSSProperties}>
        <i className="border border-fg/[0.07]" />
        <i className="border border-fg/[0.07]" />
        <i className="border border-fg/[0.07]" />
        <i className="border border-fg/[0.07]" />
      </div>
      <svg aria-hidden="true" viewBox="0 0 1440 280" preserveAspectRatio="none" className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[34%] w-full">
        <path d="M0 280V160l150-74 120 60 170-112 150 92 110-52 190 122 160-92 140 62 140-82 110 72V280Z" fill="var(--color-sea)" opacity=".22" />
        <path d="M0 280V214l180-62 160 52 200-84 180 72 160-42 200 72 180-52 180 42V280Z" fill="var(--color-sea)" opacity=".42" />
      </svg>

      <div className={`${CONTAINER} flex flex-col gap-10 md:gap-14`}>
        <p className="load label flex flex-wrap items-center gap-x-3 gap-y-2 text-muted">
          <span className="lamp-dot" aria-hidden="true" />
          <span className="text-lamp">02:14 AM</span>
          <span aria-hidden="true">·</span>
          <span>Somewhere, a founder is still awake</span>
        </p>

        <div className="relative">
          <h1 id="hero-title" className={`load ${H1}`} style={{ "--i": 1 } as React.CSSProperties}>
            {headline(false)}
          </h1>
          {/* Lit copy of the headline, revealed only inside the lamp's circle. */}
          <div
            ref={lit}
            aria-hidden="true"
            className={`pointer-events-none absolute inset-0 text-lamp opacity-0 transition-opacity duration-500 select-none max-md:hidden ${H1}`}
            style={{
              maskImage: "radial-gradient(circle 110px at var(--mx,-999px) var(--my,-999px), #000 60%, transparent 100%)",
              WebkitMaskImage: "radial-gradient(circle 110px at var(--mx,-999px) var(--my,-999px), #000 60%, transparent 100%)",
            }}
          >
            {headline(true)}
          </div>
        </div>

        <div className="grid gap-10 border-t border-fg/12 pt-8 md:grid-cols-12 md:items-end">
          <p className="load text-[18px] leading-[1.65] text-muted md:col-span-6 md:text-[19px]" style={{ "--i": 3 } as React.CSSProperties}>
            <strong className="font-semibold text-fg">VexraLab is a small design and engineering studio</strong> for founders who are tired of explaining their business twice: once on the website, then again on every call.
          </p>
          <div className="load flex flex-wrap gap-3 md:col-span-6 md:justify-end" style={{ "--i": 4 } as React.CSSProperties}>
            <LiquidButton href="/contact">
              Start a project <Arrow />
            </LiquidButton>
            <LiquidButton href="#story" variant="ghost-night">
              Read the story <Arrow dir="down" />
            </LiquidButton>
          </div>
        </div>
      </div>
    </section>
  );
}
