"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CONTAINER } from "@/components/ui/tokens";

type Thought = { text: string; from?: string; at: string; ping?: boolean };

/** The founder's 2 AM thoughts. Positions are desktop placements inside the cloud. */
const THOUGHTS: Thought[] = [
  { text: "Why does nobody fill in the contact form?", at: "left-[1%] top-[2%]" },
  { text: "Quick call about scope? It's grown a bit.", from: "Agency · unread 3 days", at: "right-[3%] top-[0%]", ping: true },
  { text: "I sent them my Instagram again. The website felt too embarrassing.", at: "left-[28%] top-[24%]" },
  { text: "They said two weeks. That was March.", at: "right-[1%] top-[36%]" },
  { text: "Invoice #7: “Minor homepage changes”", from: "Accounts · overdue", at: "left-[4%] top-[50%]", ping: true },
  { text: "Our competitor's site looks like a real company. Ours looks like a template.", at: "left-[40%] top-[58%]" },
  { text: "Maybe I should just learn to code it myself.", at: "right-[5%] top-[78%]" },
  { text: "Is it the design? Or is it me?", at: "left-[10%] top-[82%]" },
];

/**
 * Chapter one. On desktop the scene pins while the thoughts crowd in one by one,
 * then blur and fall away to leave the verdict. Phones and reduced motion get the
 * same content as a calm stacked list.
 */
export function Noise() {
  const stage = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stage.current;
    if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px)", () => {
      el.dataset.pinned = "true";
      const thoughts = gsap.utils.toArray<HTMLElement>("[data-thought]", el);
      const tl = gsap.timeline({ scrollTrigger: { trigger: el, start: "top top", end: () => `+=${innerHeight * 3.2}`, pin: true, scrub: 0.8, invalidateOnRefresh: true } });
      thoughts.forEach((t, k) => tl.from(t, { autoAlpha: 0, y: 70, scale: 0.92, rotate: k % 2 ? 2.5 : -2.5, duration: 1, ease: "power3.out" }, k * 0.55));
      tl.to("[data-noise-head]", { autoAlpha: 0.12, duration: 1 }, "+=.5")
        .to(thoughts, { autoAlpha: 0, y: () => gsap.utils.random(90, 240), rotate: () => gsap.utils.random(-9, 9), filter: "blur(10px)", duration: 1.6, stagger: 0.05, ease: "power2.in" }, "<")
        .to("[data-noise-head]", { autoAlpha: 0, duration: 0.6 }, "<.6")
        .fromTo("[data-verdict]", { autoAlpha: 0, scale: 0.94 }, { autoAlpha: 1, scale: 1, duration: 1.2, ease: "power3.out" }, "-=.4")
        .to({}, { duration: 0.8 });
      return () => {
        delete el.dataset.pinned;
      };
    }, el);
    mm.add("(max-width: 899px)", () => {
      gsap.utils.toArray<HTMLElement>("[data-thought], [data-verdict]", el).forEach((t) =>
        gsap.from(t, { autoAlpha: 0, y: 28, duration: 0.9, ease: "expo.out", scrollTrigger: { trigger: t, start: "top 90%" } })
      );
    }, el);
    return () => mm.revert();
  }, []);

  return (
    <section id="story" aria-labelledby="noise-title" className="relative bg-night text-fg">
      <div ref={stage} className="group/stage relative flex min-h-[100svh] flex-col justify-center overflow-hidden py-28">
        <div className={CONTAINER}>
          <header data-noise-head className="relative z-[3] mx-auto flex max-w-3xl flex-col items-center gap-5 text-center">
            <p className="label text-muted">Chapter one · the noise</p>
            <h2 id="noise-title" className="text-[clamp(2.25rem,5vw,4.75rem)] font-semibold leading-[0.98] tracking-[-0.035em]">
              Things you&rsquo;ve thought at two in the morning.
            </h2>
          </header>

          <ul className="relative mt-14 flex flex-col gap-3 min-[900px]:h-[min(54vh,520px)] min-[900px]:block">
            {THOUGHTS.map((t) => (
              <li
                key={t.text}
                data-thought
                className={`max-w-[min(390px,86%)] rounded-[18px] border border-fg/10 px-5 py-4 shadow-[0_24px_48px_-24px_rgb(0_0_0/0.7)] odd:self-start even:self-end min-[900px]:absolute ${t.at} ${t.ping ? "bg-night-3" : "bg-night-2"}`}
              >
                <p className={t.ping ? "text-[17px] leading-snug" : "voice text-[clamp(1.2rem,1.7vw,1.5rem)] leading-[1.3]"}>{t.text}</p>
                {t.from && (
                  <p className="label mt-2 flex items-center gap-2 text-[11px] text-muted">
                    <span aria-hidden="true" className="size-1.5 rounded-full bg-alarm" />
                    {t.from}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div
          data-verdict
          className="relative z-[4] mt-20 flex flex-col items-center gap-5 px-4 text-center group-data-[pinned=true]/stage:pointer-events-none group-data-[pinned=true]/stage:absolute group-data-[pinned=true]/stage:inset-0 group-data-[pinned=true]/stage:mt-0 group-data-[pinned=true]/stage:justify-center"
        >
          <p className="text-[clamp(3.75rem,10vw,10rem)] font-semibold leading-[0.9] tracking-[-0.055em]">It&rsquo;s not you.</p>
          <p className="max-w-[30ch] text-[clamp(1.25rem,2.4vw,2.1rem)] leading-snug text-muted">
            It&rsquo;s what you were sold: <span className="voice text-lamp">a template, a mystery invoice, and silence.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
