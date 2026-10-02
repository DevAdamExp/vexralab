"use client";

import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import { Browser } from "./Frames";
import { NewSite, OldSite } from "./Sites";

/**
 * Old and new homepage, one on top of the other. A visually hidden range input
 * holds the value (keyboard and screen readers); pointer drags anywhere on the
 * plate set it too. Sweeps once when it first comes into view, unless reduced motion.
 */
export function Compare() {
  const [pos, setPos] = useState(50);
  const box = useRef<HTMLDivElement>(null);
  const touched = useRef(false);
  const dragging = useRef(false);

  useEffect(() => {
    const el = box.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const step = (t: number) => {
          if (touched.current) return;
          const p = Math.min((t - t0) / 2200, 1);
          const eased = 0.5 - Math.cos(Math.PI * p) / 2;
          setPos(50 - 26 * Math.sin(eased * 2 * Math.PI) * (1 - 0.3 * eased));
          if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  const fromPointer = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    touched.current = true;
    setPos(Math.min(100, Math.max(0, ((e.clientX - r.left) / r.width) * 100)));
  };

  const shown = Math.round(pos);

  return (
    <div
      ref={box}
      className="relative cursor-ew-resize touch-pan-y select-none"
      style={{ "--pos": `${pos}%` } as CSSProperties}
      onPointerDown={(e) => {
        dragging.current = true;
        e.currentTarget.setPointerCapture(e.pointerId);
        fromPointer(e);
      }}
      onPointerMove={(e) => dragging.current && fromPointer(e)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      <Browser url="harbourphysio.example">
        <div aria-hidden="true" className="absolute inset-0">
          <OldSite />
        </div>
        <div aria-hidden="true" className="absolute inset-0" style={{ clipPath: "inset(0 0 0 var(--pos))" }}>
          <NewSite />
        </div>
        <span aria-hidden="true" className="label absolute bottom-3 left-3 rounded-full bg-ink/85 px-2.5 py-1 text-[10px] text-fg md:text-[11px]">
          Before
        </span>
        <span aria-hidden="true" className="label absolute right-3 bottom-3 rounded-full bg-ink/85 px-2.5 py-1 text-[10px] text-fg md:text-[11px]">
          After
        </span>
      </Browser>
      <input
        type="range"
        min={0}
        max={100}
        value={shown}
        onChange={(e) => {
          touched.current = true;
          setPos(Number(e.target.value));
        }}
        aria-label="Compare the old homepage with the new one"
        aria-valuetext={`${shown}% old homepage, ${100 - shown}% new homepage`}
        className="peer sr-only"
      />
      {/* The handle: a lamp line and knob, moved by transform only. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ transform: "translateX(var(--pos))" }}>
        <span className="absolute inset-y-0 left-0 w-0.5 -translate-x-1/2 bg-lamp shadow-[0_0_0_1px_rgb(21_20_25/0.25)]" />
        <span className="absolute top-1/2 left-0 grid size-11 -translate-1/2 place-items-center rounded-full bg-lamp text-[15px] font-bold text-ink shadow-[0_8px_24px_-8px_rgb(0_0_0/0.6)] md:size-14">‹ ›</span>
      </div>
      <span aria-hidden="true" className="pointer-events-none absolute -inset-1.5 rounded-[18px] opacity-0 outline-2 outline-lamp peer-focus-visible:opacity-100" />
    </div>
  );
}
