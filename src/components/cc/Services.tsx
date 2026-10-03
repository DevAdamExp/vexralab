"use client";

import Link from "next/link";
import { useState } from "react";
import { PiCaretRight, PiCheck, PiX } from "react-icons/pi";
import { SERVICES } from "@/data/vx";
import { Slash } from "./parts";
import s from "./cc.module.css";

/** "// data that runs your business." Numbered list on the left; the selected service shows before and after. */
export function Services() {
  const [on, setOn] = useState(0);
  const it = SERVICES[on];

  return (
    <section id="services" className={`${s.col} scroll-mt-24`} aria-labelledby="services-title">
      <div className="grid lg:grid-cols-2">
        <div className="border-b border-white/[0.13] px-6 py-12 lg:border-r lg:px-12">
          <Slash>
            <span id="services-title">data that runs your business.</span>
          </Slash>
        </div>
        <div className="hidden border-b border-white/[0.13] lg:block" />

        <p className="flex items-center border-b border-white/[0.13] px-6 py-10 text-[20px] leading-[25px] text-(--muted) lg:border-r lg:px-12">
          Capture. Connect. Clean. Report. Grow, without the spreadsheets.
        </p>
        <div className="flex flex-wrap items-center gap-4 border-b border-white/[0.13] px-6 pb-10 lg:justify-center lg:px-12 lg:py-10">
          <Link href="/services" data-magnet className={s.btnWhite}>
            Explore all services <PiCaretRight aria-hidden="true" className="size-4" />
          </Link>
          <Link href="/#pricing" className={s.btnGhost}>
            Pricing
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        <div role="tablist" aria-label="Services" className="lg:border-r lg:border-white/[0.13]">
          {SERVICES.map((x, k) => (
            <button
              key={x.id}
              role="tab"
              aria-selected={on === k}
              aria-controls="service-panel"
              onClick={() => setOn(k)}
              onMouseEnter={() => setOn(k)}
              className={`${s.row} ${on === k ? s.rowOn : ""}`}
            >
              <span className={s.rowNum}>0{k + 1}</span>
              <span>
                {x.name} <span className={`${s.mono} ml-1 text-[14px] text-white/60 max-sm:hidden`}>{x.tag}</span>
              </span>
            </button>
          ))}
        </div>

        <div id="service-panel" role="tabpanel" className="flex flex-col">
          <p key={`t${on}`} className={`${s.rise} border-b border-white/[0.13] px-6 py-12 text-[20px] leading-7 text-(--muted) lg:px-10`}>
            <span className="mr-2 text-white/50">{"//"}</span>
            <b className="font-semibold text-white">{it.title}</b> {it.body}
          </p>
          <div key={`p${on}`} className={`${s.rise} grid flex-1 sm:grid-cols-2`}>
            <div className="border-b border-white/[0.13] px-6 py-8 sm:border-r sm:border-b-0 lg:px-10">
              <p className={`${s.kicker} ${s.kickerCoral}`}>Before</p>
              <ul className={`${s.stagger} mt-5 flex flex-col gap-3.5`}>
                {it.before.map((b, i) => (
                  <li key={b} style={{ "--i": i } as React.CSSProperties} className="flex gap-3 text-[15px] leading-6 text-white/55">
                    <PiX aria-hidden="true" className="mt-1 size-4 shrink-0 text-(--coral)" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-(--accent)/12 px-6 py-8 lg:px-10">
              <p className={`${s.kicker} !text-(--hi)`}>After</p>
              <ul className={`${s.stagger} mt-5 flex flex-col gap-3.5`}>
                {it.after.map((a, i) => (
                  <li key={a} style={{ "--i": i + 3 } as React.CSSProperties} className="flex gap-3 text-[15px] leading-6 text-white">
                    <PiCheck aria-hidden="true" className="mt-1 size-4 shrink-0 text-(--hi)" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.13] px-6 py-5 lg:px-10">
            <span className={`${s.mono} text-[13px] text-white/50`}>
              {it.timeline} · {it.price}
            </span>
            <Link href={`/services#${it.id}`} className="inline-flex items-center gap-2 text-[14px] text-(--muted) transition-colors hover:text-white">
              How we do it <PiCaretRight aria-hidden="true" className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
