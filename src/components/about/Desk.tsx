"use client";

import { useState } from "react";

/** The desk photo as a large plate. The lamp button fades a warm glow over the picture. */
export function Desk() {
  const [lit, setLit] = useState(false);
  return (
    <figure className="relative h-[68svh] min-h-[420px] overflow-hidden rounded-[28px] bg-void md:h-[78svh] md:rounded-[36px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/img/desk-window.jpg" alt="The studio desk by the window." fetchPriority="high" className="absolute inset-0 size-full object-cover scale-[1.02] object-[50%_45%] saturate-[0.95]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgb(21_20_25/0.75)_100%)]" />
      <div aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(120deg,rgb(7_80_86/0.35)_0%,transparent_50%)] mix-blend-multiply" />
      <div
        aria-hidden="true"
        className={`absolute inset-0 bg-[radial-gradient(ellipse_at_68%_40%,rgb(246_187_2/0.42),transparent_60%)] mix-blend-screen transition-opacity duration-1000 ease-water ${lit ? "opacity-100" : "opacity-0"}`}
      />
      <figcaption className="label absolute bottom-5 left-5 rounded-full bg-void/70 px-4 py-2.5 text-fg backdrop-blur-md md:bottom-8 md:left-8">☀️ The desk</figcaption>
      <button
        type="button"
        aria-pressed={lit}
        onClick={() => setLit((l) => !l)}
        className={`absolute right-5 bottom-5 min-h-11 rounded-full px-5 font-ui text-[11px] font-semibold uppercase tracking-[0.16em] backdrop-blur-md transition-colors duration-500 md:right-8 md:bottom-8 ${lit ? "bg-lamp text-ink" : "bg-void/70 text-fg hover:bg-void"}`}
      >
        💡 Lamp {lit ? "on" : "off"}
      </button>
    </figure>
  );
}
