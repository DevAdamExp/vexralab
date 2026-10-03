import Link from "next/link";
import { PiCaretDown, PiCaretRight, PiLinkedinLogo, PiXLogo } from "react-icons/pi";
import { SiGooglesheets, SiHubspot, SiMake, SiOdoo, SiQuickbooks, SiShopify, SiStripe, SiZoho } from "react-icons/si";
import { EMAIL } from "./Top";
import { FAQ } from "@/data/vx";
import { Band, Slash, Tiles } from "./parts";
import s from "./cc.module.css";

/** Without VexraLab vs with VexraLab, as two transcripts. */
export function Compare() {
  const bad: [string, string, string][] = [
    ["REQUEST", "> what were sales last month?", ""],
    ["WRONG", "✳ Exporting CSV from CRM", "two versions of the truth"],
    ["WRONG", "✳ Matching against invoices by hand", "three hours, one typo"],
    ["WRONG", "✳ Emailing spreadsheet v7_final_FINAL", "already out of date"],
  ];
  const good: [string, string][] = [
    ["REQUEST", "> what were sales last month?"],
    ["ANSWER", "✦ Open the dashboard. It’s already there."],
    ["ANSWER", "✦ Split by product, region and rep."],
    ["ANSWER", "✦ Same number for sales, ops and finance."],
  ];
  return (
    <>
      <section className={s.col} aria-labelledby="compare-title">
        <h2 id="compare-title" className="sr-only">
          Without and with VexraLab
        </h2>
        <div className="grid lg:grid-cols-2">
          <div className="border-b border-white/[0.13] px-6 py-7 lg:border-r">
            <p className="text-[18px] text-white">Without VexraLab</p>
            <p className="text-[15px] text-(--muted)">Spreadsheets. The same Monday ritual.</p>
          </div>
          <div className="border-b border-white/[0.13] px-6 py-7">
            <p className="text-[18px] text-white">With VexraLab</p>
            <p className="text-[15px] text-(--muted)">One system. Every answer.</p>
          </div>

          <div className={`${s.mono} flex flex-col gap-5 px-6 py-10 text-[14px] text-white/80 lg:border-r lg:border-white/[0.13]`}>
            {bad.map(([label, line, note], k) => (
              <div key={k} className="relative">
                <span className="absolute top-0 -left-[128px] hidden text-[11px] tracking-[0.1em] text-white/35 xl:block">[ {label} ]</span>
                <p>{line}</p>
                {note && (
                  <p className="mt-1.5">
                    <span className={s.badgeBad}>Interrupted</span>
                    <span className="ml-2 text-white/45">└ {note}</span>
                  </p>
                )}
              </div>
            ))}
            <p className="text-white/35">✦ Done. By Wednesday.</p>
          </div>
          <div className={`${s.mono} flex flex-col gap-5 border-t border-white/[0.13] px-6 py-10 text-[14px] text-white lg:border-t-0`}>
            {good.map(([label, line], k) => (
              <p key={k} className={label === "REQUEST" ? "text-white/80" : ""}>
                {line}
              </p>
            ))}
            <p className="text-(--ok)">✓ Done. In ten seconds.</p>
          </div>
        </div>
      </section>
      <Band />
    </>
  );
}

const STACK = [
  { Icon: SiHubspot, name: "HubSpot" },
  { Icon: SiZoho, name: "Zoho CRM" },
  { Icon: SiOdoo, name: "Odoo ERP" },
  { Icon: SiShopify, name: "Shopify" },
  { Icon: SiStripe, name: "Stripe" },
  { Icon: SiQuickbooks, name: "QuickBooks" },
  { Icon: SiGooglesheets, name: "Google Sheets" },
  { Icon: SiMake, name: "Make" },
];

const PLANS = [
  ["Audit", "Free"],
  ["Starter", "[$X]"],
  ["Growth", "[$X]"],
  ["Scale", "[$X]"],
  ["Care", "[$X]/mo"],
];

/** Pricing: headline + platform grid, the free audit as the accent card, plans on the right. */
export function Pricing() {
  return (
    <>
      <section id="pricing" className={`${s.col} scroll-mt-24`} aria-labelledby="pricing-title">
        <div className="grid lg:grid-cols-[1.5fr_1fr_1fr]">
          <div className="flex flex-col">
            <h2 id="pricing-title" className={`${s.h2big} border-b border-white/[0.13] px-6 py-14 lg:px-10`}>
              Start small.
              <span className="block text-white/55">Grow with us.</span>
            </h2>
            <ul className="grid flex-1 grid-cols-2">
              {STACK.map(({ Icon, name }) => (
                <li key={name} className="flex h-[81px] items-center gap-3 border-r border-b border-white/[0.13] px-6 text-[16px]">
                  <Icon aria-hidden="true" className="size-6 text-white/85" />
                  {name}
                </li>
              ))}
              <li className={`${s.mono} col-span-2 flex h-[81px] items-center gap-2 border-r border-white/[0.13] px-6 text-[14px] text-white/60`}>
                and the rest of your stack <PiCaretRight aria-hidden="true" />
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-end gap-6 bg-(--accent) px-8 py-10 text-white">
            <p className={`${s.mono} text-[64px] leading-none font-medium tracking-[-0.04em] text-white/90`} aria-hidden="true">
              30:00
            </p>
            <p className="text-[16px] tracking-[0.2em] text-white/80">AUDIT</p>
            <p>
              <span className="text-[56px] leading-none font-semibold tracking-[-0.04em]">Free</span>
              <span className="ml-1 text-[20px] text-white/70">/30 min</span>
            </p>
            <p className="text-[20px] leading-6">
              A written data plan
              <span className="block">for your business.</span>
            </p>
            <Link href="/contact" className="inline-flex h-10 items-center gap-2 self-start rounded-full bg-white px-4 text-[14px] font-medium text-black transition-colors hover:bg-white/90">
              Book a call <PiCaretRight aria-hidden="true" />
            </Link>
          </div>

          <div className="flex flex-col border-white/[0.13] lg:border-l">
            <div className="flex flex-col justify-center gap-2 border-b border-white/[0.13] px-8 py-14 lg:min-h-[227px]">
              <p className="text-[36px] leading-tight font-medium tracking-[-0.03em]">Built to scale.</p>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[14px] text-(--muted) hover:text-white">
                Ask for a quote <PiCaretRight aria-hidden="true" />
              </Link>
            </div>
            {PLANS.map(([name, price]) => (
              <div key={name} data-spot className="flex h-[81px] items-center justify-between border-b border-white/[0.13] px-8 last:border-b-0">
                <span className="font-semibold">{name}</span>
                <span className="text-[14px] text-white/70">{price}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Band />
    </>
  );
}

const CASES = [
  {
    kicker: "RETAIL · ODOO ERP",
    text: "Orders, inventory and accounting in one system. Stock counts reconcile overnight instead of over a weekend.",
    who: "Typical retail engagement",
  },
  {
    kicker: "SERVICES · HUBSPOT CRM",
    text: "Leads from four channels in one pipeline, with follow-ups that send themselves. Nothing slips through.",
    who: "Typical services engagement",
  },
];

/** Who we work with: the headline, follow buttons, then two typical engagements. */
export function Community() {
  return (
    <>
      <section className={s.col} aria-labelledby="community-title">
        <div className="flex flex-col gap-8 border-b border-white/[0.13] px-6 py-14 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div>
            <p className={s.kicker}>
              <span className="text-white/35">{"//"}</span> Who we work with
            </p>
            <h2 id="community-title" className={`${s.h2big} mt-5`}>
              Made for teams that
              <span className="block text-white/55">outgrew spreadsheets.</span>
            </h2>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer" className={s.btnGhost}>
              Follow on X <PiXLogo aria-hidden="true" className="size-5" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className={s.btnGhost}>
              Follow on LinkedIn <PiLinkedinLogo aria-hidden="true" className="size-5" />
            </a>
          </div>
        </div>
        <div className="grid lg:grid-cols-2">
          {CASES.map((c, k) => (
            <article key={c.kicker} className={`flex flex-col gap-4 px-7 py-9 ${k === 0 ? "border-white/[0.13] lg:border-r" : "border-t border-white/[0.13] lg:border-t-0"}`}>
              <p className={s.kicker}>{c.kicker}</p>
              <p className="max-w-[46ch] text-[15px] leading-6 text-white/80">{c.text}</p>
              <p className="mt-6 flex items-center gap-3 text-[14px]">
                <span aria-hidden="true" className="grid size-9 place-items-center bg-(--accent) text-[12px] font-semibold">
                  VL
                </span>
                <span>
                  <span className="block font-semibold text-white">{c.who}</span>
                  <span className="text-[12px] text-(--muted)">Illustrative scope</span>
                </span>
              </p>
            </article>
          ))}
        </div>
      </section>
      <Band />
    </>
  );
}

const T_A: [number, number, number][] = [[1, 1, 1], [2, 2, 1], [1, 2, 2], [3, 1, 2], [1, 1, 3], [2, 1, 3], [3, 1, 3], [1, 1, 4], [2, 2, 4], [1, 1, 5], [2, 2, 5]];
const T_B: [number, number, number][] = [[1, 1, 1], [2, 2, 1], [1, 1, 2], [2, 2, 2], [1, 3, 3], [1, 1, 4], [2, 2, 4], [1, 2, 5], [3, 1, 5]];

function Stmt({ b, rest }: { b: string; rest: string }) {
  return (
    <div data-spot className="flex items-center px-8 py-16 text-[22px] leading-[30px] text-(--muted) lg:px-10">
      <p>
        <b className="font-semibold text-white">{b}</b> {rest}
      </p>
    </div>
  );
}

function Blocks({ t }: { t: [number, number, number][] }) {
  return <Tiles cols={3} rows={5} rowH={58} tiles={t} mono className="grid h-full min-h-[290px]" />;
}

/** "// take control of your data." 3 x 3 grid of statements and grain blocks, CTA in the centre. */
export function Benefits() {
  return (
    <>
      <section className={s.col} aria-labelledby="benefits-title">
        <div className="border-b border-white/[0.13] px-6 py-12 lg:px-12">
          <Slash>
            <span id="benefits-title">take control of your data.</span>
          </Slash>
        </div>
        <div className="grid lg:grid-cols-3 [&>*]:border-white/[0.13] lg:[&>*:nth-child(3n+1)]:border-r lg:[&>*:nth-child(3n+2)]:border-r [&>*:nth-child(-n+6)]:border-b">
          <Stmt b="Decide faster." rest="Reports that update themselves. No waiting for Monday." />
          <div className="hidden lg:block"><Blocks t={T_A} /></div>
          <Stmt b="One customer view." rest="Every call, order and invoice on one record." />
          <div className="hidden lg:block"><Blocks t={T_B} /></div>
          <div className="flex flex-col items-center justify-center gap-6 px-6 py-16 text-center">
            <p className="text-[28px] leading-[34px] font-semibold tracking-[-0.02em]">
              Start growing.
              <span className="block font-normal text-(--muted)">With your data.</span>
            </p>
            <Link href="/contact" className={`${s.btnAccent} w-[220px] justify-between`}>
              Book a call <PiCaretRight aria-hidden="true" />
            </Link>
            <p className="text-[12px] text-(--muted)">Audit. Plan. Build.</p>
          </div>
          <div className="hidden lg:block"><Blocks t={T_A} /></div>
          <Stmt b="Scale without chaos." rest="Systems that work at 5 users and at 500." />
          <div className="hidden lg:block"><Blocks t={T_B} /></div>
          <Stmt b="Errors, slashed." rest="No more copy-paste between tools." />
        </div>
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
              <span className="text-white/35">{"//"}</span> FAQ
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
        <Tiles cols={10} rows={9} rowH={64} tiles={CTA_TILES} mono className="pointer-events-none absolute inset-0 hidden opacity-60 lg:grid" />
        <div className="relative z-10 mx-auto flex max-w-[640px] flex-col items-center gap-8 bg-black px-6 py-20 text-center lg:my-16 lg:py-12">
          <h2 id="cta-title" className="text-[clamp(32px,3.8vw,48px)] leading-[1.1] font-semibold tracking-[-0.04em]">
            <span className="mr-2 text-[0.8em] text-white/30">{"//"}</span>Take control of your data.
            <span className="mt-1 block font-medium text-(--muted)">Book a 30-minute call. Get a written plan. Start growing.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className={s.btnAccent}>
              Book a call
            </Link>
            <a href={`mailto:${EMAIL}`} className={s.btnGhost}>
              {EMAIL}
            </a>
          </div>
          <p className={`${s.mono} text-[11px] tracking-[0.2em] text-white/45`}>FREE AUDIT · NO OBLIGATION</p>
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
          <Tiles cols={6} rows={2} rowH={73} mono tiles={[[1, 2, 1], [4, 3, 1], [2, 3, 2], [6, 1, 2]]} className="absolute inset-0 grid opacity-50" />
          <p className={`${s.mono} relative pb-3 text-[44px] leading-none font-semibold tracking-[-0.05em]`}>
            vexra<span className="text-(--hi)">/</span>lab
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
