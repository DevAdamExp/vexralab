"use client";

import { useEffect, useLayoutEffect, useRef, type CSSProperties, type ReactNode } from "react";

const useIso = typeof window === "undefined" ? useEffect : useLayoutEffect;
const observers = new Map<number, IntersectionObserver>();

function observer(threshold: number) {
  let io = observers.get(threshold);
  if (!io) {
    io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          (e.target as HTMLElement).dataset.seen = "true";
          io!.unobserve(e.target);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    observers.set(threshold, io);
  }
  return io;
}

type Tag = "div" | "section" | "ul" | "ol" | "li" | "p" | "span" | "article" | "header" | "figure" | "dl";

/**
 * Plays its children's entrance (.rise / .fade / .wipe / .draw, staggered by --i)
 * the first time it scrolls into view. Only elements still below the fold at
 * hydration wait; with no JS or reduced motion everything is at rest.
 */
export function Seen({
  as = "div",
  threshold = 0.25,
  className,
  style,
  children,
  id,
  ...rest
}: {
  as?: Tag;
  threshold?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  id?: string;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useIso(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.dataset.seen = "false";
    const io = observer(threshold);
    io.observe(el);
    return () => io.unobserve(el);
  }, [threshold]);
  const T = as as "div";
  return (
    <T ref={ref as React.Ref<HTMLDivElement>} id={id} className={className} style={style} {...rest}>
      {children}
    </T>
  );
}

