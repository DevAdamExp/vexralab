import type { CSSProperties, ReactNode } from "react";
import { SAMPLE } from "@/data/work";

/**
 * A drawn screen with its caption. The drawing is decorative (aria-hidden);
 * the caption carries the meaning and always says it is a sample.
 */
export function Plate({ caption, tone = "text-ink-muted", className = "", children }: { caption: string; tone?: string; className?: string; children: ReactNode }) {
  return (
    <figure className={`m-0 ${className}`}>
      <div aria-hidden="true">{children}</div>
      <figcaption className={`mt-5 max-w-[70ch] text-[14px] leading-relaxed ${tone}`}>
        {caption} <span className="label mt-1.5 block text-[11px] tracking-[0.16em]">{SAMPLE}</span>
      </figcaption>
    </figure>
  );
}

/**
 * Scales its contents like an image: inside, 1em = 1/`em` of the frame's width,
 * so a drawing sized in em keeps its proportions from 320px to 1600px.
 */
export function Canvas({ em, ratio, className = "", style, children }: { em: number; ratio?: string; className?: string; style?: CSSProperties; children: ReactNode }) {
  return (
    <div className="@container">
      <div className={`relative overflow-hidden ${className}`} style={{ fontSize: `calc(100cqw / ${em})`, aspectRatio: ratio, ...style }}>
        {children}
      </div>
    </div>
  );
}

/** Browser chrome around a 16:10 canvas, 90em wide (1em reads as 16px of a 1440px screen). */
export function Browser({ url, className = "", children }: { url: string; className?: string; children: ReactNode }) {
  return (
    <div className={`overflow-hidden rounded-[10px] bg-[#f7f5f1] text-ink shadow-[0_40px_90px_-40px_rgb(0_0_0/0.6)] ring-1 ring-black/10 md:rounded-[14px] ${className}`}>
      <div className="flex items-center gap-3 border-b border-black/8 bg-[#e9e5df] px-3 py-2 md:px-4 md:py-2.5">
        <span className="flex gap-1.5">
          <span className="size-2 rounded-full bg-black/15 md:size-2.5" />
          <span className="size-2 rounded-full bg-black/15 md:size-2.5" />
          <span className="size-2 rounded-full bg-black/15 md:size-2.5" />
        </span>
        <span className="mx-auto truncate rounded-full bg-white/80 px-3 py-0.5 font-mono text-[10px] text-ink-muted md:min-w-[40%] md:text-center md:text-[11px]">{url}</span>
        <span className="hidden w-[46px] md:block" />
      </div>
      <Canvas em={90} ratio="16 / 10">
        {children}
      </Canvas>
    </div>
  );
}

/** A phone: ink bezel around a 22em-wide screen. Always decorative; caption it nearby. */
export function Phone({ className = "", children }: { className?: string; children: ReactNode }) {
  return (
    <div aria-hidden="true" className={`rounded-[2.4rem] bg-ink p-2 shadow-[0_30px_60px_-30px_rgb(0_0_0/0.55)] ring-1 ring-black/20 ${className}`}>
      <Canvas em={22} ratio="9 / 18.5" className="rounded-[1.9rem] bg-[#f7f5f1] text-ink">
        <div className="flex items-center justify-between px-[1.6em] pt-[0.9em] text-[0.8em] font-semibold">
          <span>9:41</span>
          <span className="h-[1.6em] w-[6.5em] rounded-full bg-ink" />
          <span className="flex gap-[0.25em]">
            <span className="h-[0.7em] w-[0.35em] self-end rounded-[1px] bg-ink" />
            <span className="h-[0.95em] w-[0.35em] self-end rounded-[1px] bg-ink" />
            <span className="h-[1.2em] w-[0.35em] self-end rounded-[1px] bg-ink" />
          </span>
        </div>
        {children}
      </Canvas>
    </div>
  );
}
