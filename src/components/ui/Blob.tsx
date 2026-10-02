"use client";

import { useEffect, useRef, useState } from "react";

const TONES = {
  sea: ["#0a666d", "#075056", "#05393d"],
  sail: ["#3a5fb8", "#2a4c9e", "#1c3570"],
  red: ["#d02a2e", "#bd1b1f", "#8c1216"],
  lamp: ["#ffd04a", "#f6bb02", "#d99e00"],
} as const;

/**
 * A liquid form poured in from the page edge: a long tapering tail and a round
 * head, in a brand colour, sliding out when it scrolls into view. An emoji can
 * sit in the head. Decorative; its meaning is always in the text beside it.
 */
export function Blob({ tone = "sea", side = "right", emoji, className = "" }: { tone?: keyof typeof TONES; side?: "left" | "right"; emoji?: string; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  const id = `blob-${tone}-${side}`;
  const [a, b, c] = TONES[tone];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setOn(true), io.disconnect()), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className={`pointer-events-none ${/(^|\s)absolute(\s|$)/.test(className) ? "" : "relative"} ${className}`}>
      <div
        className="transition-transform duration-[1400ms] ease-water"
        style={{ transform: on ? "none" : `translateX(${side === "right" ? "60%" : "-60%"})` }}
      >
        <svg viewBox="0 0 640 300" className="block h-auto w-full overflow-visible" style={{ transform: side === "left" ? "scaleX(-1)" : undefined }}>
          <defs>
            <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={a} />
              <stop offset=".55" stopColor={b} />
              <stop offset="1" stopColor={c} />
            </linearGradient>
          </defs>
          {/* Head on the inside, tail running off the page edge. */}
          <path d="M640 36 C540 34 450 62 360 70 A80 80 0 1 0 360 230 C450 238 540 266 640 264 Z" fill={`url(#${id})`} />
        </svg>
        {emoji && (
          <span
            className="absolute top-1/2 grid aspect-square w-[16%] min-w-11 -translate-y-1/2 place-items-center rounded-full bg-fg text-[clamp(1.25rem,2.2vw,2rem)] shadow-[0_12px_30px_-10px_rgb(0_0_0/0.45)]"
            style={side === "right" ? { left: "48%" } : { right: "48%" }}
          >
            {emoji}
          </span>
        )}
      </div>
    </div>
  );
}
