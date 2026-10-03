"use client";

import Link from "next/link";
import { useState } from "react";
import { PiArrowRight, PiCaretRight } from "react-icons/pi";
import { SERVICES } from "@/data/vx";
import { Glyph } from "./Glyph";
import { Band } from "./parts";
import s from "./cc.module.css";

/** Each service, introduced by the problem a business owner would actually say out loud. */
const PROBLEMS: Record<string, string> = {
  crm: "Leads slip through the cracks",
  erp: "Orders, stock and accounts don’t match",
  warehouse: "Every report shows a different number",
  dashboards: "Mondays are spent building reports",
  automation: "We copy and paste between tools all day",
  migration: "Our history is stuck in old spreadsheets",
  care: "Nobody looks after the system after launch",
};

/**
 * Services hero: a problem finder. Pick what’s wrong on the left; the right side
 * assembles that service’s glyph at large scale and says where we’d start.
 */
export function ServicesHero() {
  const [on, setOn] = useState(0);
  const x = SERVICES[on];

  return (
    <>
      <section className={s.col} aria-labelledby="page-title">
        <div className="grid lg:grid-cols-[5fr_7fr]">
          <div className="flex flex-col gap-8 border-b border-white/[0.13] px-6 py-14 lg:border-r lg:border-b-0 lg:px-12">
            <div>
              <p className={s.kicker}>Services</p>
              <h1 id="page-title" className={`${s.h1} ${s.rise} mt-5`}>
                What do you need <span className="text-(--hi)">fixed</span>?
              </h1>
              <p className="mt-4 max-w-[40ch] text-[17px] leading-7 text-(--muted)">Pick what sounds most like your business. We’ll show you where we’d start.</p>
            </div>

            <ul role="radiogroup" aria-label="What's slowing you down" className="flex flex-col">
              {SERVICES.map((sv, k) => (
                <li key={sv.id}>
                  <button
                    type="button"
                    role="radio"
                    aria-checked={on === k}
                    onClick={() => setOn(k)}
                    onMouseEnter={() => setOn(k)}
                    className={`${s.problem} ${on === k ? s.problemOn : ""}`}
                  >
                    <span className={`${s.mono} text-[11px] ${on === k ? "text-(--hi)" : "text-white/40"}`}>0{k + 1}</span>
                    <span className="flex-1 text-left">{PROBLEMS[sv.id]}</span>
                    <PiArrowRight aria-hidden="true" className={`size-4 transition-[opacity,transform] duration-300 ${on === k ? "translate-x-0 opacity-100 text-(--hi)" : "-translate-x-1 opacity-0"}`} />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className={`${s.finder} relative flex flex-col justify-between gap-10 overflow-hidden px-6 py-14 lg:px-14`} aria-live="polite">
            <div className="flex items-start justify-between gap-6">
              <p className={`${s.kicker}`}>We’d start with</p>
              <p className={`${s.mono} text-[12px] text-white/45`}>
                0{on + 1} / 0{SERVICES.length}
              </p>
            </div>

            <div key={x.id} className="grid items-center gap-10 sm:grid-cols-[auto_1fr]">
              <div className={s.finderGlyph} data-glyph-host>
                <Glyph id={x.id} size={20} label={`${x.name} icon`} />
              </div>
              <div className={s.rise}>
                <h2 className="text-[clamp(30px,3.2vw,42px)] leading-[1.06] font-semibold tracking-[-0.035em]">{x.name}</h2>
                <p className="mt-3 text-[18px] leading-7 text-(--muted)">
                  <b className="font-semibold text-white">{x.title}</b> {x.body}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {x.after.map((a) => (
                    <li key={a} className="rounded-full border border-(--hi)/25 bg-(--hi)/[0.06] px-3 py-1 text-[13px] text-white/85">
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.1] pt-6">
              <p className={`${s.mono} text-[13px] text-white/60`}>
                {x.timeline} · {x.price}
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={`#${x.id}`} className={s.btnGhost}>
                  How it works
                </a>
                <Link href="/contact" data-magnet className={s.btnAccent}>
                  Book a call <PiCaretRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Band />
    </>
  );
}
