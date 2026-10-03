"use client";

import Link from "next/link";
import { useState } from "react";
import { PiCaretRight } from "react-icons/pi";
import { Slash } from "./parts";
import s from "./cc.module.css";

const ITEMS = [
  {
    name: "CRM implementation",
    tag: "HubSpot · Zoho",
    title: "Every lead, one record.",
    body: "Pipelines, deal stages and follow-ups set up around how your team actually sells.",
    log: [["SYNCED", "4 lead sources → 1 pipeline"], ["MERGED", "1,284 duplicate contacts"], ["OK", "follow-up rules live"]],
  },
  {
    name: "ERP setup & integration",
    tag: "Odoo · SAP",
    title: "Run the whole business.",
    body: "Inventory, orders, purchasing and finance in one system that talks to your CRM.",
    log: [["LINKED", "orders ↔ inventory ↔ invoices"], ["MAPPED", "chart of accounts"], ["OK", "stock reconciled nightly"]],
  },
  {
    name: "Data warehouse & pipelines",
    tag: "Postgres · BigQuery",
    title: "One source of truth.",
    body: "Every tool syncs into one clean model, so every report starts from the same numbers.",
    log: [["SOURCES", "CRM, ERP, ads, payments"], ["MODELED", "one customer ID"], ["OK", "refreshed every hour"]],
  },
  {
    name: "Dashboards & reporting",
    tag: "/bi",
    title: "Answers, not exports.",
    body: "Live dashboards for sales, operations and finance. No more Monday spreadsheet ritual.",
    log: [["BUILT", "revenue, margin, cash"], ["SHARED", "per-team views"], ["OK", "weekly digest by email"]],
  },
  {
    name: "Workflow automation",
    tag: "Zapier · Make · custom",
    title: "Stop copy-pasting.",
    body: "Handoffs between tools, approvals and alerts, handled by workflows that report back.",
    log: [["AUTOMATED", "quote → invoice → reminder"], ["SAVED", "hours of manual entry"], ["OK", "alerts on exceptions"]],
  },
  {
    name: "Data migration & cleanup",
    tag: "/migrate",
    title: "Move without losing a row.",
    body: "From spreadsheets or legacy systems to the new stack, validated and audited.",
    log: [["IMPORTED", "legacy records"], ["VALIDATED", "row counts match"], ["OK", "audit trail kept"]],
  },
  {
    name: "Training & ongoing care",
    tag: "/care",
    title: "Your team, confident.",
    body: "Hands-on training, documentation and a monthly check-in so the system keeps up with you.",
    log: [["TRAINED", "admins and users"], ["DOCUMENTED", "every workflow"], ["OK", "monthly health check"]],
  },
];

/** "// data that runs your business." Numbered list on the left; the selected service explains itself on the right. */
export function Services() {
  const [on, setOn] = useState(0);
  const it = ITEMS[on];

  return (
    <section id="services" className={`${s.col} scroll-mt-24`} aria-labelledby="services-title">
      <div className="grid lg:grid-cols-2">
        <div className="border-b border-white/[0.13] px-6 py-12 lg:border-r lg:px-12">
          <Slash>
            <span id="services-title">data that runs your business.</span>
          </Slash>
        </div>
        <div className="hidden border-b border-white/[0.13] lg:block" />

        <p className="flex items-center border-b border-white/[0.13] px-6 py-10 text-[20px] leading-[25px] text-[#a1a1aa] lg:border-r lg:px-12">
          Captures. Connects. Cleans. Reports. Grows with you, all the while.
        </p>
        <div className="flex flex-wrap items-center gap-4 border-b border-white/[0.13] px-6 pb-10 lg:justify-center lg:px-12 lg:py-10">
          <a href="#platform" className={s.btnWhite}>
            Explore all services <PiCaretRight aria-hidden="true" className="size-4" />
          </a>
          <a href="#pricing" className={s.btnGhost}>
            Pricing
          </a>
        </div>
      </div>

      <div className="grid lg:grid-cols-2">
        <div role="tablist" aria-label="Services" className="lg:border-r lg:border-white/[0.13]">
          {ITEMS.map((x, k) => (
            <button
              key={x.name}
              role="tab"
              aria-selected={on === k}
              aria-controls="service-panel"
              onClick={() => setOn(k)}
              onMouseEnter={() => setOn(k)}
              className={`${s.row} ${on === k ? s.rowOn : ""}`}
            >
              <span className={s.rowNum}>0{k + 1}</span>
              <span>
                {x.name} <code className={`${s.mono} ml-1 text-[17px] text-white/90 max-sm:hidden`}>`{x.tag}`</code>
              </span>
            </button>
          ))}
        </div>

        <div id="service-panel" role="tabpanel" className="flex flex-col">
          <p key={`t${on}`} className={`${s.rise} border-b border-white/[0.13] px-6 py-12 text-[20px] leading-7 text-[#a1a1aa] lg:px-10`}>
            <span className="mr-2 text-white/35">{"//"}</span>
            <b className="font-semibold text-white">{it.title}</b> {it.body}
          </p>
          <div className="flex-1 p-4">
            <div key={`p${on}`} className={`${s.term} ${s.rise} h-full min-h-[300px]`}>
              <div className={s.termBar}>
                <span className={s.dot} style={{ background: "#ff5f57" }} />
                <span className={s.dot} style={{ background: "#febc2e" }} />
                <span className={s.dot} style={{ background: "#28c840" }} />
                <span className="ml-2">~/your-business</span>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <p className={s.prompt}>❯ vexra run {it.tag.split(" ")[0].replace("/", "")}</p>
                {it.log.map(([b, t]) => (
                  <p key={t}>
                    <span className={s.badge}>{b}</span>
                    {t}
                  </p>
                ))}
                <p className="mt-2 text-[#7ee2c8]">✓ {it.name.toLowerCase()} ready</p>
                <p className="mt-4 text-[12px] text-white/40">Sample output. Your numbers will differ.</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/[0.13] px-6 py-5 lg:px-10">
            <Link href="/contact" className="inline-flex items-center gap-2 text-[14px] text-[#a1a1aa] transition-colors hover:text-white">
              Talk to us about {it.name.toLowerCase()} <PiCaretRight aria-hidden="true" className="size-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
