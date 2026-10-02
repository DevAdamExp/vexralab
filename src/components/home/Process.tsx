"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mark } from "@/components/ui/Mark";
import { CONTAINER } from "@/components/ui/tokens";

const STAGES = [
  { n: "01", name: "Listen", when: "Week 1", items: ["A working session with you and your team", "Calls with two or three of your customers", "A written brief and a fixed quote"], feel: "Heard, for the first time in a while." },
  { n: "02", name: "Shape", when: "Weeks 2–3", items: ["Messaging and page structure", "A visual direction you can react to", "A clickable prototype"], feel: "“Yes. That's us.”" },
  { n: "03", name: "Build", when: "Weeks 4–7", items: ["Production code, tested on real phones", "A staging link that always works", "A demo every Friday, a plan every Monday"], feel: "Calm. You always know where it's at." },
  { n: "04", name: "Stay", when: "After launch", items: ["Training so your team can edit it", "Monthly check-ins on what's working", "A same-day reply when you need us"], feel: "Like you have a team, not a vendor." },
];

const PANEL = ["bg-fg text-ink", "bg-belle text-ink", "bg-lamp text-ink", "bg-night text-fg"];

/**
 * Chapter four, on the sea register: the studio's own hand. On wide screens the
 * section pins and the four stages slide past sideways; elsewhere they stack.
 */
export function Process() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLOListElement>(null);

  useEffect(() => {
    const el = root.current;
    const tr = track.current;
    if (!el || !tr || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const dist = () => Math.max(0, tr.scrollWidth - el.clientWidth + 48);
      gsap.to(tr, { x: () => -dist(), ease: "none", scrollTrigger: { trigger: el, start: "top top", end: () => `+=${dist()}`, pin: true, scrub: 0.6, invalidateOnRefresh: true } });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} aria-labelledby="process-title" className="relative overflow-hidden bg-sea text-fg">
      <div className={`${CONTAINER} pt-24 pb-14 md:pt-32 lg:pt-28 lg:pb-12`}>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="label text-fg/80">Chapter four · how we work</p>
            <h2 id="process-title" className="mt-6 text-[clamp(2.5rem,5.6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
              No ghosting. <Mark>Not once.</Mark>
            </h2>
          </div>
          <p className="max-w-[42ch] text-[18px] leading-relaxed text-fg/85 lg:col-span-5">
            Four stages, a fixed price agreed before we start, and a demo every Friday so you never have to wonder what&rsquo;s happening.
          </p>
        </div>
      </div>

      <ol ref={track} className="flex flex-col gap-5 px-4 pb-24 sm:px-6 md:pb-32 lg:w-max lg:flex-row lg:px-10 lg:pb-28">
        {STAGES.map((s, k) => (
          <li key={s.n} className={`flex min-h-[420px] flex-col gap-6 rounded-[28px] p-8 lg:w-[min(440px,36vw)] ${PANEL[k]}`}>
            <div className="label flex items-center justify-between">
              <span>Stage {s.n}</span>
              <span>{s.when}</span>
            </div>
            <h3 className="text-[clamp(3rem,4.4vw,4.25rem)] font-semibold leading-none tracking-[-0.045em]">{s.name}</h3>
            <ul className="flex flex-col gap-2.5 text-[16px]">
              {s.items.map((it) => (
                <li key={it} className="flex gap-3">
                  <svg aria-hidden="true" width="9" height="11" viewBox="0 0 30 36" className="mt-[7px] shrink-0">
                    <path d="M15 2C15 2 3 16 3 23a12 12 0 0 0 24 0C27 16 15 2 15 2Z" fill={k === 2 ? "var(--color-ink)" : "var(--color-sea)"} />
                  </svg>
                  {it}
                </li>
              ))}
            </ul>
            <div className="mt-auto border-t border-current/20 pt-5">
              <p className="label opacity-70">How you&rsquo;ll feel</p>
              <p className="voice mt-2 text-[24px] leading-snug">{s.feel}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
