"use client";

import Link from "next/link";
import { useRef, type CSSProperties, type MouseEventHandler, type PointerEvent, type ReactNode } from "react";
import { edgeOf, offEdge } from "./edge";

type Variant = "lamp" | "sea" | "ink" | "ghost-night" | "ghost-paper";
type Size = "sm" | "md" | "lg";

const VARIANT: Record<Variant, { base: string; blob: string; hover: string }> = {
  lamp: { base: "bg-lamp text-ink", blob: "bg-void", hover: "hover:text-lamp" },
  sea: { base: "border-[1.5px] border-sea-2 bg-fg/[0.03] text-fg backdrop-blur-md", blob: "bg-sea", hover: "hover:border-sea" },
  ink: { base: "bg-ink text-fg", blob: "bg-sea", hover: "" },
  "ghost-night": { base: "border-[1.5px] border-fg/30 text-fg", blob: "bg-lamp", hover: "hover:text-ink hover:border-lamp" },
  "ghost-paper": { base: "border-[1.5px] border-ink/70 text-ink", blob: "bg-sail", hover: "hover:text-fg hover:border-sail" },
};

const SIZE: Record<Size, string> = {
  sm: "min-h-11 px-6 text-[11px] gap-3",
  md: "min-h-[52px] px-8 text-[12px] gap-4",
  lg: "min-h-16 px-10 text-[13px] gap-5",
};

type Props = {
  href?: string;
  as?: "a" | "button";
  type?: "button" | "submit";
  variant?: Variant;
  size?: Size;
  className?: string;
  style?: CSSProperties;
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  children: ReactNode;
  "aria-label"?: string;
};

/**
 * The house button. A liquid blob enters from whichever edge the pointer crossed,
 * turns half a revolution while it settles, and leaves through the exit edge.
 */
export function LiquidButton({ href, as = "a", type = "button", variant = "lamp", size = "md", className = "", style, disabled, onClick, children, ...aria }: Props) {
  const blob = useRef<HTMLSpanElement>(null);
  const v = VARIANT[variant];

  const enter = (e: PointerEvent<HTMLElement>) => {
    const el = blob.current;
    if (!el || disabled || e.pointerType === "touch") return;
    const [top, left] = offEdge(edgeOf(e.currentTarget, e), 220);
    el.style.transition = "none";
    el.style.top = top;
    el.style.left = left;
    void el.offsetWidth;
    el.style.transition = "top 1000ms var(--ease-water), left 1000ms var(--ease-water), transform 1000ms var(--ease-water)";
    el.style.top = "50%";
    el.style.left = "50%";
    el.style.transform = "translate(-50%,-50%) rotate(180deg)";
  };
  const leave = (e: PointerEvent<HTMLElement>) => {
    const el = blob.current;
    if (!el || e.pointerType === "touch") return;
    const [top, left] = offEdge(edgeOf(e.currentTarget, e), 220);
    el.style.transition = "top 850ms var(--ease-water), left 850ms var(--ease-water), transform 850ms var(--ease-water)";
    el.style.top = top;
    el.style.left = left;
    el.style.transform = "translate(-50%,-50%) rotate(0deg)";
  };

  const cls = `group relative isolate inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-ui font-semibold uppercase tracking-[0.16em] transition-[color,border-color,transform] duration-500 ease-water active:scale-[0.97] disabled:opacity-50 ${v.base} ${v.hover} ${SIZE[size]} ${className}`;
  const inner = (
    <>
      <span
        ref={blob}
        aria-hidden="true"
        className={`pointer-events-none absolute -z-10 block size-[22rem] rounded-[40%] ${v.blob}`}
        style={{ top: "calc(100% + 220px)", left: "50%", transform: "translate(-50%,-50%) rotate(0deg)" }}
      />
      {children}
    </>
  );
  const handlers = { onPointerEnter: enter, onPointerLeave: leave, onClick };

  if (as === "button" || !href) {
    return (
      <button type={type} disabled={disabled} className={cls} style={style} {...handlers} {...aria}>
        {inner}
      </button>
    );
  }
  const external = /^(https?:|mailto:|tel:)/.test(href);
  if (external) {
    return (
      <a href={href} className={cls} style={style} {...handlers} {...aria} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} style={style} {...handlers} {...aria}>
      {inner}
    </Link>
  );
}

/** Arrow that nudges forward on the parent button's hover. */
export function Arrow({ dir = "right" }: { dir?: "right" | "down" | "up-right" }) {
  const glyph = dir === "down" ? "↓" : dir === "up-right" ? "↗" : "→";
  const move = dir === "down" ? "group-hover:translate-y-0.5" : dir === "up-right" ? "group-hover:-translate-y-0.5 group-hover:translate-x-0.5" : "group-hover:translate-x-1";
  return (
    <span aria-hidden="true" className={`inline-block transition-transform duration-500 ease-water ${move}`}>
      {glyph}
    </span>
  );
}
