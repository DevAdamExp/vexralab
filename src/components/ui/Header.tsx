"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { EMAIL, NAV } from "@/data/site";
import { DropletLink } from "./DropletLink";
import { Arrow, LiquidButton } from "./LiquidButton";
import { Logo } from "./Logo";

/**
 * Full-width and transparent at the top of the page; after 24px it gathers into a
 * floating pill. `tone="paper"` is for pages that open on a light register.
 */
export function Header({ tone = "night" }: { tone?: "night" | "paper" }) {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onPaper = tone === "paper" && !scrolled && !open;

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, [open]);

  return (
    <>
      <header className={`fixed inset-x-0 z-50 flex justify-center px-3 transition-[top,padding] duration-700 ease-water ${scrolled ? "top-3 md:top-4" : "top-0 py-4 md:py-6"}`}>
        <div
          className={`flex w-full items-center justify-between gap-4 rounded-full border transition-[max-width,background-color,border-color,padding] duration-700 ease-water ${
            scrolled ? "max-w-[960px] border-fg/10 bg-night/75 py-2 pr-2 pl-5 backdrop-blur-xl" : "max-w-[1320px] border-transparent px-2 py-0 sm:px-4 lg:px-8"
          } ${onPaper ? "text-ink" : "text-fg"}`}
        >
          <Link href="/" aria-label="VexraLab, home" className="relative z-10 rounded-full">
            <Logo tone={onPaper ? "ink" : "fg"} />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {NAV.map((n) => (
              <DropletLink key={n.href} href={n.href} current={path.startsWith(n.href)}>
                {n.label}
              </DropletLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <span className={`label hidden items-center gap-2.5 text-[11px] transition-opacity duration-500 xl:flex ${scrolled ? "pointer-events-none w-0 opacity-0" : "opacity-80"}`}>
              <span className="lamp-dot" aria-hidden="true" />
              Booking new projects
            </span>
            {!path.startsWith("/contact") && (
              <span className="hidden md:contents">
                <LiquidButton href="/contact" size="sm" variant={onPaper ? "ink" : "lamp"}>
                  Start a project <Arrow />
                </LiquidButton>
              </span>
            )}
            <button
              type="button"
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-controls="drawer"
              aria-label={open ? "Close menu" : "Open menu"}
              className={`relative z-[60] flex size-11 flex-col items-center justify-center gap-[5px] rounded-full border md:hidden ${open ? "border-fg/20 text-fg" : onPaper ? "border-ink/20" : "border-fg/20"}`}
            >
              <span className={`block h-[1.5px] bg-current transition-transform duration-500 ease-water ${open ? "w-4 translate-y-[3.25px] rotate-45" : "w-5"}`} />
              <span className={`block h-[1.5px] bg-current transition-transform duration-500 ease-water ${open ? "w-4 -translate-y-[3.25px] -rotate-45" : "w-3 translate-x-1"}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Phone drawer: the night closes in from the menu button like water. */}
      <div
        id="drawer"
        inert={!open}
        aria-hidden={!open}
        className="fixed inset-0 z-40 flex flex-col bg-night text-fg transition-[clip-path] duration-700 ease-water md:hidden"
        style={{ clipPath: open ? "circle(150% at calc(100% - 38px) 38px)" : "circle(0% at calc(100% - 38px) 38px)" }}
      >
        <div aria-hidden="true" className="absolute -top-24 -right-24 size-80 rounded-[40%] bg-sea/60" />
        <nav aria-label="Mobile" className="relative flex flex-1 flex-col justify-center gap-5 px-6 pt-20">
          {NAV.map((n, k) => (
            <Link
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="flex items-baseline gap-4"
              style={{ transition: "opacity 700ms var(--ease-water), transform 700ms var(--ease-water)", transitionDelay: open ? `${180 + k * 60}ms` : "0ms", opacity: open ? 1 : 0, transform: open ? "none" : "translateY(24px)" }}
            >
              <span className="label text-lamp">0{k + 1}</span>
              <span className="text-[clamp(2.75rem,13vw,4rem)] font-semibold leading-none tracking-[-0.04em]">{n.label}</span>
            </Link>
          ))}
        </nav>
        <div className="relative flex flex-col gap-5 border-t border-fg/10 px-6 pt-6 pb-10" style={{ transition: "opacity 700ms var(--ease-water)", transitionDelay: open ? "420ms" : "0ms", opacity: open ? 1 : 0 }}>
          <span className="label text-muted">Write to us</span>
          <span className="text-[17px] select-all">{EMAIL}</span>
          <Link href="/contact" onClick={() => setOpen(false)} className="flex min-h-14 items-center justify-between rounded-full bg-lamp px-7 font-semibold text-ink">
            Start a project <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
