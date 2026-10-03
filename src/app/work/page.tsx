import type { Metadata } from "next";
import Link from "next/link";
import { PiCaretRight } from "react-icons/pi";
import { SiHubspot, SiLooker, SiOdoo, SiPostgresql, SiShopify, SiZapier } from "react-icons/si";
import type { IconType } from "react-icons";
import { Compare } from "@/components/cc/Bottom";
import { PageHead, Shell } from "@/components/cc/Page";
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
      <PageHead
        kicker="Work"
        title={
          <>
            Systems that run <span className="text-(--hi)">real</span> businesses.
          </>
        }
        grey="Here’s how."
        lede="Three typical engagements and the process behind every one. Sample scopes, shown to illustrate how we work."
        action={{ label: "Book a call", href: "/contact" }}
      />

      {CASES.map((c, k) => (
        <div key={c.title}>
          <section className={s.col} aria-labelledby={`case-${k}`}>
            <div className="flex flex-col gap-6 border-b border-white/[0.13] px-6 py-12 lg:flex-row lg:items-end lg:justify-between lg:px-10">
              <div>
                <p className={s.kicker}>
                  <span className="text-white/50">{"//"}</span> Sample · {c.sector}
                </p>
                <h2 id={`case-${k}`} className={`${s.h2mid} mt-4 max-w-[22ch]`}>
                  {c.title}
                </h2>
              </div>
              <ul className="flex gap-2">
                {c.stack.map(({ Icon, name }) => (
                  <li key={name} data-spot className="inline-flex h-9 items-center gap-2 rounded-full border border-white/[0.13] px-3.5 text-[13px] text-white/80">
                    <Icon aria-hidden="true" className="size-4" />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid lg:grid-cols-3">
              <div className="border-b border-white/[0.13] px-6 py-10 lg:border-r lg:border-b-0 lg:px-10">
                <p className={`${s.kicker} ${s.kickerCoral}`}>The problem</p>
                <p className="mt-5 text-[16px] leading-6 text-white/70">{c.problem}</p>
              </div>
              <div className="border-b border-white/[0.13] px-6 py-10 lg:border-r lg:border-b-0 lg:px-10">
                <p className={s.kicker}>What we built</p>
                <ol className="mt-5 flex flex-col gap-3 text-[15px] leading-6 text-white">
                  {c.built.map((b, i) => (
                    <li key={b} data-spot className="flex gap-3">
                      <span className={`${s.mono} pt-0.5 text-[11px] text-white/55`}>0{i + 1}</span>
                      {b}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="bg-(--accent)/12 px-6 py-10 lg:px-10">
                <p className={`${s.kicker} !text-(--hi)`}>What changed</p>
                <ul className="mt-5 flex flex-col gap-3 text-[15px] leading-6 text-white">
                  {c.result.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
          <Band />
        </div>
      ))}

      {/* Process */}
      <section id="process" className={`${s.col} scroll-mt-24`} aria-labelledby="process-title">
        <div className="border-b border-white/[0.13] px-6 py-12 lg:px-12">
          <Slash>
            <span id="process-title">how every project runs.</span>
          </Slash>
        </div>
        <ol className="grid sm:grid-cols-2 lg:grid-cols-5">
          {PROCESS.map((p, k) => (
            <li key={p.name} data-spot className="flex flex-col gap-4 border-r border-b border-white/[0.13] px-6 py-9 lg:border-b-0 lg:last:border-r-0">
              <span className={`${s.mono} text-[12px] text-(--hi)`}>0{k + 1}</span>
              <p className="text-[24px] font-semibold tracking-[-0.02em]">{p.name}</p>
              <p className={`${s.mono} text-[12px] text-white/60`}>{p.when}</p>
              <p className="text-[15px] leading-6 text-white/70">{p.text}</p>
            </li>
          ))}
        </ol>
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
