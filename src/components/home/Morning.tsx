"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER } from "@/components/ui/tokens";

const MORNINGS = [
  { when: "First read", title: "People get what you do in one read.", body: "Clear words, a clear offer, a clear next step. Nobody needs a call just to understand you." },
  { when: "Overnight", title: "Enquiries arrive while you sleep.", body: "A site built to turn a curious visitor into a booked conversation, and to tell you where they came from." },
  { when: "Tuesday", title: "Changes take minutes, not invoices.", body: "Your team edits pages themselves. When you do need us, you get a reply the same working day." },
  { when: "Fundraise", title: "It looks like the company you are.", body: "The link you send investors, hires and partners does the convincing before you say a word." },
];

/**
 * Chapter two. Scrolling in, the night lifts: the ground turns to paper and the
 * sun clears the ridge. Without motion the section simply rests in daylight.
 */
export function Morning() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap
        .timeline({ scrollTrigger: { trigger: el, start: "top 90%", end: "top 10%", scrub: true } })
        .fromTo(el, { backgroundColor: "#151419", color: "#eee9e1" }, { backgroundColor: "#eee9e1", color: "#151419", ease: "none" }, 0)
        .fromTo("[data-sun]", { yPercent: 70, scale: 0.75 }, { yPercent: 0, scale: 1, ease: "none" }, 0)
        .fromTo("[data-ridge]", { opacity: 0.35 }, { opacity: 1, ease: "none" }, 0)
        .fromTo("[data-dawn-label]", { color: "#aaa4aa" }, { color: "#075056", ease: "none" }, 0);
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} aria-labelledby="morning-title" className="relative overflow-hidden bg-paper text-ink">
      {/* Sun and ridge: the view from the desk, now in daylight. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[min(62vw,560px)]">
        <div data-sun className="absolute top-[22%] left-1/2 aspect-square w-[clamp(140px,20vw,280px)] -translate-x-1/2 rounded-full bg-lamp" />
        <svg data-ridge viewBox="0 0 1440 300" preserveAspectRatio="none" className="absolute inset-x-0 bottom-0 h-[58%] w-full">
          <path d="M0 300V170l170-90 130 60 190-120 170 100 120-56 210 130 170-96 150 66 140-86V300Z" fill="var(--color-sea-soft)" />
          <path d="M0 300V230l200-70 170 56 220-92 190 80 170-46 220 80 270-60V300Z" fill="var(--color-sea)" />
        </svg>
      </div>

      <div className={`${CONTAINER} relative pt-[min(62vw,560px)] pb-28 md:pb-40`}>
        <Seen className="grid gap-8 pt-20 md:pt-28 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p data-dawn-label className="label fade text-sea">Chapter two · 07:40 AM</p>
            <p className="voice fade mt-6 text-[clamp(1.6rem,3vw,2.5rem)]" style={i(1)}>
              Now picture the morning after.
            </p>
            <h2 id="morning-title" className="rise mt-3 text-[clamp(2.75rem,6.8vw,6.5rem)] font-semibold leading-[0.95] tracking-[-0.04em]" style={i(2)}>
              A website you&rsquo;re <Mark gesture="highlight">proud</Mark> to send.
            </h2>
          </div>
          <p className="rise text-[18px] leading-relaxed opacity-75 lg:col-span-4" style={i(3)}>
            Same business, same product. The difference is that people finally see what you see when you talk about it.
          </p>
        </Seen>

        <Seen as="ul" className="mt-16 grid gap-px overflow-hidden rounded-[28px] border border-ink/12 bg-ink/12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4" threshold={0.15}>
          {MORNINGS.map((m, k) => (
            <li key={m.title} className="rise flex flex-col gap-4 bg-paper p-7 md:p-8" style={i(k)}>
              <span className="label text-sea">{m.when}</span>
              <h3 className="text-[clamp(1.5rem,2vw,1.9rem)] font-semibold leading-[1.08] tracking-[-0.025em]">{m.title}</h3>
              <p className="text-[16px] leading-relaxed text-ink-muted">{m.body}</p>
            </li>
          ))}
        </Seen>
      </div>
    </section>
  );
}
