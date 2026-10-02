"use client";

import { useEffect, useRef, useState } from "react";

type Gesture = "underline" | "highlight" | "circle" | "strike";

/**
 * One hand-drawn lamp gesture on one word. Draws when it scrolls into view
 * (or after `delay` ms on load). Lamp by default; `tone="sea"` on paper when
 * the lamp would be too faint for an underline or circle.
 */
export function Mark({
  children,
  gesture = "underline",
  tone = "lamp",
  onLoad = false,
  delay = 0,
}: {
  children: string;
  gesture?: Gesture;
  tone?: "lamp" | "sea" | "ink" | "fg" | "red" | "sail";
  onLoad?: boolean;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (onLoad) {
      const t = setTimeout(() => setOn(true), delay);
      return () => clearTimeout(t);
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTimeout(() => setOn(true), delay);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [onLoad, delay]);

  const color = { lamp: "var(--color-lamp)", sea: "var(--color-sea)", ink: "var(--color-ink)", fg: "var(--color-fg)", red: "var(--color-red)", sail: "var(--color-sail)" }[tone];
  const t = "transition-[transform,clip-path] duration-[800ms] ease-water motion-reduce:duration-[1ms]";

  return (
    <span ref={ref} className="relative isolate inline-block whitespace-nowrap">
      {gesture === "highlight" && (
        <span aria-hidden="true" className={`absolute inset-x-[-0.06em] bottom-[0.06em] top-[0.42em] -z-10 origin-left -skew-x-6 rounded-[0.08em] ${t}`} style={{ background: color, transform: on ? "scaleX(1)" : "scaleX(0)" }} />
      )}
      <span className="relative">{children}</span>
      {gesture === "underline" && (
        <svg aria-hidden="true" viewBox="0 0 200 12" preserveAspectRatio="none" className={`pointer-events-none absolute inset-x-0 -bottom-[0.12em] h-[0.16em] w-full ${t}`} style={{ clipPath: on ? "inset(0 0 0 0)" : "inset(0 100% 0 0)" }}>
          <path d="M2 8 C 50 2, 120 12, 198 4" fill="none" stroke={color} strokeWidth="5" strokeLinecap="round" vectorEffect="non-scaling-stroke" style={{ strokeWidth: "0.09em" }} />
        </svg>
      )}
      {gesture === "strike" && (
        <span aria-hidden="true" className={`absolute inset-x-[-0.04em] top-[52%] h-[0.07em] origin-left ${t}`} style={{ background: color, transform: on ? "scaleX(1)" : "scaleX(0)" }} />
      )}
      {gesture === "circle" && (
        <svg aria-hidden="true" viewBox="0 0 200 100" preserveAspectRatio="none" className={`pointer-events-none absolute -inset-x-[0.22em] -inset-y-[0.14em] h-[calc(100%+0.28em)] w-[calc(100%+0.44em)] ${t}`} style={{ clipPath: on ? "circle(80% at 50% 50%)" : "circle(0% at 50% 50%)" }}>
          <path d="M108 6 C 40 2, 4 30, 8 56 C 12 86, 70 98, 120 94 C 176 90, 198 64, 192 40 C 186 14, 140 4, 92 8" fill="none" stroke={color} strokeLinecap="round" vectorEffect="non-scaling-stroke" style={{ strokeWidth: 3 }} />
        </svg>
      )}
    </span>
  );
}
