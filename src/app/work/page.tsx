import type { Metadata } from "next";
import Link from "next/link";
import { PiCaretRight } from "react-icons/pi";
import { SiHubspot, SiLooker, SiOdoo, SiPostgresql, SiShopify, SiZapier } from "react-icons/si";
import type { IconType } from "react-icons";
import { Compare } from "@/components/cc/Bottom";
import { Shell } from "@/components/cc/Page";
import { Band, Slash } from "@/components/cc/parts";
import s from "@/components/cc/cc.module.css";
import { PROCESS } from "@/data/vx";

export const metadata: Metadata = {
  title: "Work",
  description: "How VexraLab runs CRM, ERP and data projects, with sample engagements for retail, services and distribution businesses.",
};

// ponytail: illustrative engagements until real, approved case studies exist. Replace, don't add.
const CASES: { sector: string; title: string; problem: string; built: string[]; result: string[]; stack: { Icon: IconType; name: string }[] }[] = [
  {
    sector: "Retail · 3 stores and online",
    title: "Stock, orders and accounts in one system.",
    problem: "Online and in-store orders lived in different tools. Stock was counted by hand every weekend and still didn't match.",
    built: ["Odoo for inventory, sales and purchasing", "Shopify orders flowing straight into stock", "Nightly reconciliation with alerts"],
    result: ["Weekend stock counts replaced by a nightly check", "Reorders triggered automatically", "One margin report for every channel"],
    stack: [{ Icon: SiOdoo, name: "Odoo" }, { Icon: SiShopify, name: "Shopify" }],
  },
  {
    sector: "Professional services · 25 people",
    title: "Every lead in one pipeline.",
    problem: "Leads arrived by email, web form, WhatsApp and referrals. Follow-ups depended on who remembered.",
    built: ["HubSpot pipeline with clear deal stages", "Every channel captured automatically", "Follow-up sequences and task reminders"],
    result: ["No lead without an owner", "Follow-ups sent on time, every time", "Win rate visible by channel"],
    stack: [{ Icon: SiHubspot, name: "HubSpot" }, { Icon: SiZapier, name: "Zapier" }],
  },
  {
    sector: "Distribution · B2B",
    title: "From Monday reports to live numbers.",
    problem: "Finance rebuilt the weekly report from five exports. By Tuesday it was out of date.",
    built: ["A Postgres warehouse fed by ERP, CRM and payments", "Clean model with one customer ID", "Live dashboards for sales, ops and finance"],
    result: ["Weekly report replaced by a live view", "One revenue number everyone agrees on", "Questions answered in minutes"],
    stack: [{ Icon: SiPostgresql, name: "Postgres" }, { Icon: SiLooker, name: "Looker" }],
  },
];

export default function WorkPage() {
  return (
    <Shell>
      {/* Work opening: a case index. Headline left; the three engagements as an index on the right. */}
      <section className={s.col} aria-labelledby="page-title">
        <div className="grid lg:grid-cols-[5fr_7fr]">
          <div className="flex flex-col justify-between gap-10 border-b border-white/[0.13] px-6 py-14 lg:border-r lg:border-b-0 lg:px-12">
            <div>
              <p className={s.kicker}>Work</p>
              <h1 id="page-title" className={`${s.h1} ${s.rise} mt-5`}>
                Systems that run <span className="text-(--hi)">real</span> businesses.
              </h1>
              <p className="mt-5 max-w-[40ch] text-[17px] leading-7 text-(--muted)">Three typical engagements and the process behind every one.</p>
            </div>
            <dl className="grid grid-cols-3 gap-4 border-t border-white/[0.1] pt-6">
              {[["3", "sectors"], ["5", "steps, every project"], ["Fri", "live demo, weekly"]].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className={`${s.mono} ${s.tnum} text-[28px] leading-none tracking-[-0.03em]`}>{v}</dd>
                  <dd className="mt-2 text-[13px] text-white/55">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <ol className="flex flex-col">
            {CASES.map((c, k) => (
              <li key={c.title} className="flex-1 border-b border-white/[0.13] last:border-b-0">
                <a href={`#case-${k}`} className={`${s.caseRow} group flex h-full flex-col justify-center gap-3 px-6 py-8 lg:px-10`}>
                  <div className="flex items-center justify-between gap-4">
                    <span className={`${s.mono} text-[12px] text-white/50`}>
                      Case 0{k + 1} · {c.sector}
                    </span>
                    <span className="flex gap-1.5">
                      {c.stack.map(({ Icon, name }) => (
                        <span key={name} title={name} className="grid size-7 place-items-center rounded-md border border-white/[0.1] text-white/70">
                          <Icon aria-hidden="true" className="size-3.5" />
                        </span>
                      ))}
                    </span>
                  </div>
                  <p className="text-[22px] leading-tight font-semibold tracking-[-0.025em] transition-colors group-hover:text-(--hi)">{c.title}</p>
                  <p className="flex items-center gap-2 text-[14px] text-white/60">
                    <PiCaretRight aria-hidden="true" className="size-3.5 text-(--hi) transition-transform group-hover:translate-x-1" />
                    {c.result[0]}
                  </p>
                </a>
              </li>
            ))}
          </ol>
        </div>
        <p className={`${s.mono} border-t border-white/[0.13] px-6 py-3 text-[11px] text-white/45 lg:px-12`}>Sample engagements, shown to illustrate how we work.</p>
      </section>
      <Band />

      {/* Case stack: each case pins, and the next card slides up over it as it recedes. */}
      <section className={s.col} aria-labelledby="cases-title">
        <div className="border-b border-white/[0.13] px-6 py-12 lg:px-12">
          <Slash>
            <span id="cases-title">the details.</span>
          </Slash>
        </div>
        <div className={`${s.stack} px-4 py-10 sm:px-6 lg:px-10`}>
          {CASES.map((c, k) => (
            <article key={c.title} id={`case-${k}`} className={`${s.card} ${s[`card${k}`]} scroll-mt-28`} style={{ "--k": k } as React.CSSProperties} aria-labelledby={`case-${k}-title`}>
              <div className="flex flex-col gap-6 border-b border-white/[0.13] px-6 py-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
                <div>
                  <p className={s.kicker}>
                    Case 0{k + 1} · Sample · {c.sector}
                  </p>
                  <h2 id={`case-${k}-title`} className={`${s.h2mid} mt-4 max-w-[22ch]`}>
                    {c.title}
                  </h2>
                </div>
                <ul className="flex gap-2">
                  {c.stack.map(({ Icon, name }) => (
                    <li key={name} className="inline-flex h-9 items-center gap-2 rounded-full border border-white/[0.13] px-3.5 text-[13px] text-white/80">
                      <Icon aria-hidden="true" className="size-4" />
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid lg:grid-cols-3">
                <div className="border-b border-white/[0.13] px-6 py-8 lg:border-r lg:border-b-0 lg:px-10">
                  <p className={`${s.kicker} ${s.kickerCoral}`}>The problem</p>
                  <p className="mt-5 text-[16px] leading-6 text-white/70">{c.problem}</p>
                </div>
                <div className="border-b border-white/[0.13] px-6 py-8 lg:border-r lg:border-b-0 lg:px-10">
                  <p className={s.kicker}>What we built</p>
                  <ol className="mt-5 flex flex-col gap-3 text-[15px] leading-6 text-white">
                    {c.built.map((b, i) => (
                      <li key={b} className="flex gap-3">
                        <span className={`${s.mono} pt-0.5 text-[11px] text-white/55`}>0{i + 1}</span>
                        {b}
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="bg-(--accent)/12 px-6 py-8 lg:px-10">
                  <p className={`${s.kicker} !text-(--hi)`}>What changed</p>
                  <ul className="mt-5 flex flex-col gap-3 text-[15px] leading-6 text-white">
                    {c.result.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Band />

      {/* Process */}
      <section id="process" className={`${s.col} scroll-mt-24`} aria-labelledby="process-title">
        <div className="border-b border-white/[0.13] px-6 py-12 lg:px-12">
          <Slash>
            <span id="process-title">how every project runs.</span>
          </Slash>
        </div>
        {/* One packet travels the pipeline as you scroll; each step lights when it arrives. */}
        <div className={s.proc}>
          <div aria-hidden="true" className={`${s.procTrack} hidden lg:block`}>
            <span className={s.procFill} />
            <span className={s.procPacket} />
          </div>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-5">
            {PROCESS.map((p, k) => (
              <li key={p.name} data-spot className={`${s[`step${k}`]} flex flex-col gap-4 border-r border-b border-white/[0.13] px-6 pt-16 pb-10 lg:pt-20 lg:border-b-0 lg:last:border-r-0`}>
                <span aria-hidden="true" className={s.procNode} />
                <span className={`${s.mono} ${s.stepNum} text-[12px]`}>0{k + 1}</span>
                <p className="text-[24px] font-semibold tracking-[-0.02em]">{p.name}</p>
                <p className={`${s.mono} text-[12px] text-white/60`}>{p.when}</p>
                <p className="text-[15px] leading-6 text-white/70">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.13] px-6 py-6 lg:px-10">
          <p className="text-[15px] text-(--muted)">Every step ends with something you can see. No black boxes.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 text-[14px] text-white hover:text-(--hi)">
            Start with the audit <PiCaretRight aria-hidden="true" />
          </Link>
        </div>
      </section>
      <Band />

      <Compare />
    </Shell>
  );
}
