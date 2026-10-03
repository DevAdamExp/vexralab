import Link from "next/link";
import { PiCaretDown, PiCaretRight, PiCheck, PiLinkedinLogo, PiXLogo } from "react-icons/pi";
import { Glyph } from "./Glyph";
import { EMAIL } from "./Top";
import { FAQ } from "@/data/vx";
import { Mark } from "./Logo";
import { Band, Slash, Tiles } from "./parts";
import s from "./cc.module.css";

/** Without VexraLab vs with VexraLab: the same question, two very different afternoons. */
export function Compare() {
  const bad: [string, string][] = [
    ["Export a CSV from the CRM", "Two versions of the truth"],
    ["Match it against invoices by hand", "Three hours, one typo"],
    ["Email spreadsheet v7_final_FINAL", "Out of date on arrival"],
  ];
  const good = ["Open the dashboard. It’s already there.", "Split by product, region and rep.", "Same number for sales, ops and finance."];
  return (
    <>
      <section className={s.col} aria-labelledby="compare-title">
        <div className="border-b border-white/[0.13] px-6 py-12 lg:px-12">
          <Slash>
            <span id="compare-title">“what were sales last month?”</span>
          </Slash>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-white/[0.13] px-6 py-10 lg:border-r lg:border-b-0 lg:px-12">
            <p className={`${s.kicker} ${s.kickerCoral}`}>Without VexraLab</p>
            <ol className="mt-8 flex flex-col gap-6">
              {bad.map(([step, cost], k) => (
                <li key={step} className="grid grid-cols-[28px_1fr] gap-x-3">
                  <span className={`${s.mono} pt-0.5 text-[12px] text-white/40`}>0{k + 1}</span>
                  <span className="text-[16px] text-white/80">{step}</span>
                  <span />
                  <span className="mt-1 text-[14px] text-(--coral)">{cost}</span>
                </li>
              ))}
            </ol>
            <p className="mt-10 border-t border-white/[0.08] pt-6 text-[15px] text-white/55">
              Answer ready <b className="font-semibold text-white">by Wednesday</b>.
            </p>
          </div>
          <div className="bg-(--accent)/[0.07] px-6 py-10 lg:px-12">
            <p className={`${s.kicker} !text-(--hi)`}>With VexraLab</p>
            <ul className="mt-8 flex flex-col gap-6">
              {good.map((g) => (
                <li key={g} className="flex gap-3 text-[16px] text-white">
                  <PiCheck aria-hidden="true" className="mt-1 size-4 shrink-0 text-(--hi)" />
                  {g}
                </li>
              ))}
            </ul>
            <p className="mt-10 border-t border-white/[0.08] pt-6 text-[15px] text-white/55">
              Answer ready <b className="font-semibold text-(--hi)">in ten seconds</b>.
            </p>
          </div>
        </div>
      </section>
      <Band />
    </>
  );
}

const INCLUDED = ["Training for your team", "Written documentation", "[30] days of support after launch", "A weekly written update", "One shared channel with the team", "Data checks before go-live"];

const PLANS: [string, string, string][] = [
  ["Starter", "[$X]", "One system, e.g. a CRM rollout"],
  ["Growth", "[$X]", "CRM + dashboards + automations"],
  ["Scale", "[$X]", "ERP, warehouse and integrations"],
  ["Care", "[$X]/mo", "Improvements and support"],
];

/** Pricing: the free audit as the way in, plans beside it, what every plan includes below. */
export function Pricing() {
  return (
    <>
      <section id="pricing" className={`${s.col} scroll-mt-24`} aria-labelledby="pricing-title">
        <div className="border-b border-white/[0.13] px-6 py-12 lg:px-12">
          <h2 id="pricing-title" className={s.h2big}>
            Start small.
            <span className="block text-white/55">Grow with us.</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-[5fr_7fr]">
          <div className="flex flex-col gap-6 bg-(--accent) px-8 py-10 lg:px-10">
            <p className={`${s.kicker} !text-white/80`}>Start here</p>
            <p>
              <span className="text-[56px] leading-none font-semibold tracking-[-0.04em]">Free</span>
              <span className="ml-2 text-[18px] text-white/75">30-minute audit</span>
            </p>
            <p className="max-w-[32ch] text-[17px] leading-7 text-white/85">We look at your tools and data together, then send a written plan with scope, timeline and a fixed price.</p>
            <Link href="/contact" data-magnet className={`${s.btnWhite} mt-auto self-start`}>
              Book a call <PiCaretRight aria-hidden="true" />
            </Link>
          </div>
          <ul className="flex flex-col">
            {PLANS.map(([name, price, fit]) => (
              <li key={name} data-spot className="grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 border-b border-white/[0.13] px-8 py-6 last:border-b-0">
                <span className="text-[18px] font-semibold">{name}</span>
                <span className={`${s.mono} ${s.tnum} row-span-2 text-[15px] text-white/80`}>{price}</span>
                <span className="text-[14px] text-white/55">{fit}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-white/[0.13] px-8 py-8 lg:px-10">
          <p className={s.kicker}>Included in every plan</p>
          <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {INCLUDED.map((x) => (
              <li key={x} className="flex gap-3 text-[15px] text-white/80">
                <PiCheck aria-hidden="true" className="mt-1 size-4 shrink-0 text-(--hi)" />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Band />
    </>
  );
}

const CASES = [
  { glyph: "erp", kicker: "Retail · Odoo ERP", text: "Orders, inventory and accounting in one system. Stock counts reconcile overnight instead of over a weekend." },
  { glyph: "crm", kicker: "Services · HubSpot CRM", text: "Leads from four channels in one pipeline, with follow-ups that send themselves. Nothing slips through." },
  { glyph: "dashboards", kicker: "Distribution · Dashboards", text: "Five weekly exports replaced by one live view that sales, operations and finance all agree on." },
];

/** Who we work with: one headline, three typical engagements. */
export function Community() {
  return (
    <>
      <section className={s.col} aria-labelledby="community-title">
        <div className="flex flex-col gap-6 border-b border-white/[0.13] px-6 py-12 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <h2 id="community-title" className={s.h2big}>
            Made for teams that
            <span className="block text-white/55">outgrew spreadsheets.</span>
          </h2>
          <Link href="/work" className="inline-flex items-center gap-2 text-[15px] text-white/70 transition-colors hover:text-white">
            See how we work <PiCaretRight aria-hidden="true" />
          </Link>
        </div>
        <ul className="grid lg:grid-cols-3">
          {CASES.map((c) => (
            <li key={c.kicker} data-spot data-glyph-host className="flex flex-col gap-6 border-b border-white/[0.13] px-8 py-10 lg:border-r lg:border-b-0 lg:last:border-r-0">
              <Glyph id={c.glyph} size={6} />
              <p className={s.kicker}>{c.kicker}</p>
              <p className="text-[16px] leading-7 text-white/80">{c.text}</p>
              <p className="mt-auto text-[13px] text-white/45">Typical engagement</p>
            </li>
          ))}
        </ul>
      </section>
      <Band />
    </>
  );
}

const BENEFITS: [string, string][] = [
  ["Decide faster.", "Reports that update themselves. No waiting for Monday."],
  ["One customer view.", "Every call, order and invoice on one record."],
  ["Scale without chaos.", "Systems that work at 5 users and at 500."],
  ["Fewer errors.", "No more copy-paste between tools."],
];

/** What changes: four outcomes in one calm row. */
export function Benefits() {
  return (
    <>
      <section className={s.col} aria-labelledby="benefits-title">
        <div className="border-b border-white/[0.13] px-6 py-12 lg:px-12">
          <Slash>
            <span id="benefits-title">what changes for you.</span>
          </Slash>
        </div>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(([b, t], k) => (
            <li key={b} data-spot className="flex flex-col gap-4 border-r border-b border-white/[0.13] px-8 py-10 last:border-r-0 lg:border-b-0">
              <span className={`${s.mono} text-[12px] text-(--hi)`}>0{k + 1}</span>
              <p className="text-[20px] leading-tight font-semibold tracking-[-0.02em]">{b}</p>
              <p className="text-[15px] leading-6 text-white/65">{t}</p>
            </li>
          ))}
        </ul>
      </section>
      <Band />
    </>
  );
}

export function Faq() {
  return (
    <>
      <section id="faq" className={`${s.col} scroll-mt-24`} aria-labelledby="faq-title">
        <div className="grid lg:grid-cols-[1fr_2fr]">
          <div className="border-b border-white/[0.13] px-6 py-14 lg:border-r lg:border-b-0 lg:px-10">
            <p className={s.kicker}>
              <span className="text-white/50">{"//"}</span> FAQ
            </p>
            <h2 id="faq-title" className={`${s.h2mid} mt-4`}>
              Questions,
              <span className="block">answered.</span>
            </h2>
            <p className="mt-6 max-w-[34ch] text-[16px] leading-[22px] text-(--muted)">
              Everything that usually comes up before a first call. Still curious?{" "}
              <Link href="/contact" className="underline underline-offset-4 hover:text-white">
                Ask us directly
              </Link>
              .
            </p>
          </div>
          <div>
            {FAQ.map(([q, a], k) => (
              <details key={q} className={`${s.faq} border-b border-white/[0.13] last:border-b-0`} open={k === 0}>
                <summary className="flex min-h-[76px] items-center justify-between gap-6 px-8 py-6 text-[16px] font-medium">
                  {q}
                  <PiCaretDown aria-hidden="true" className={`${s.chev} size-4 shrink-0`} />
                </summary>
                <p className="px-8 pb-8 text-[15px] leading-6 text-(--muted)">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <Band />
    </>
  );
}

const CTA_TILES: [number, number, number][] = [
  [1, 1, 1], [10, 1, 1], [1, 2, 2], [3, 1, 2], [9, 1, 2], [10, 2, 2], [1, 2, 3], [9, 2, 3], [1, 1, 4], [2, 1, 4], [9, 2, 4],
  [1, 1, 5], [10, 1, 5], [1, 2, 6], [9, 1, 6], [10, 1, 6], [1, 1, 7], [10, 1, 7], [1, 3, 8], [8, 3, 8], [1, 1, 9], [10, 1, 9],
];

export function FinalCta() {
  return (
    <>
      <section className={`${s.col} relative overflow-hidden`} aria-labelledby="cta-title">
        <Tiles cols={10} rows={9} rowH={64} tiles={CTA_TILES} mono className="pointer-events-none absolute inset-0 hidden opacity-80 lg:grid" />
        <div className="relative z-10 mx-auto flex max-w-[640px] flex-col items-center gap-8 bg-black px-6 py-20 text-center lg:my-16 lg:py-12">
          <h2 id="cta-title" className="text-[clamp(32px,3.8vw,48px)] leading-[1.1] font-semibold tracking-[-0.04em]">Take control of your data.</h2>
          <p className="-mt-3 max-w-[48ch] text-[18px] leading-7 text-(--muted)">Book a 30-minute call. Get a written plan in 5 days. No obligation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" data-magnet className={s.btnAccent}>
              Book a call
            </Link>
            <a href={`mailto:${EMAIL}`} className={s.btnGhost}>
              {EMAIL}
            </a>
          </div>
        </div>
      </section>
      <Band />
    </>
  );
}

const FOOT = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Work", "/work"],
  ["Studio", "/about"],
  ["Pricing", "/#pricing"],
  ["Process", "/work#process"],
  ["FAQ", "/#faq"],
  ["Contact", "/contact"],
];

export function Footer() {
  return (
    <footer className={s.col}>
      <div className="grid lg:grid-cols-[1fr_1fr_80px]">
        <ul className="grid grid-cols-2 sm:grid-cols-4">
          {FOOT.map(([l, h]) => (
            <li key={l} className="border-r border-b border-white/[0.13]">
              <Link href={h} className="flex h-[73px] items-center px-6 text-[14px] text-white/75 transition-colors hover:text-white">
                {l}
              </Link>
            </li>
          ))}
        </ul>
        <div className="relative flex min-h-[146px] items-end justify-center overflow-hidden border-b border-white/[0.13]">
          <p className="relative flex items-center gap-3 pb-5 text-[40px] leading-none font-semibold tracking-[-0.05em]">
            <Mark size={30} />
            <span>
              Vexra<span className="font-medium text-white/60">Lab</span>
            </span>
          </p>
        </div>
        <ul className="flex border-b border-white/[0.13] lg:flex-col lg:border-l">
          {[
            [PiXLogo, "X", "https://x.com/"],
            [PiLinkedinLogo, "LinkedIn", "https://www.linkedin.com/"],
          ].map(([Icon, label, href]) => {
            const I = Icon as typeof PiXLogo;
            return (
              <li key={label as string} className="flex-1 border-white/[0.13] max-lg:border-r lg:border-b lg:last:border-b-0">
                <a href={href as string} target="_blank" rel="noopener noreferrer" aria-label={label as string} className="grid h-[73px] place-items-center text-white/75 hover:text-white">
                  <I aria-hidden="true" className="size-5" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-6 text-[13px] text-(--muted)">
        <span>© {new Date().getFullYear()} VexraLab. Data, CRM and ERP partner.</span>
        <a href={`mailto:${EMAIL}`} className="hover:text-white">
          {EMAIL}
        </a>
      </div>
    </footer>
  );
}
