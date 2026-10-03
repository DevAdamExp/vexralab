import Link from "next/link";
import { PiChartBar } from "react-icons/pi";
import { Band, Slash } from "./parts";
import { TileChart } from "./TileChart";
import s from "./cc.module.css";

/** "// your business, one screen." Text left, a client dashboard right (the desktop-app section). */
export function Platform() {
  const kpis = [
    ["Revenue (MTD)", "[$X]", "+[X]%"],
    ["Open pipeline", "[$X]", "[N] deals"],
    ["Stock value", "[$X]", "[N] SKUs"],
    ["Cash on hand", "[$X]", "[N] days"],
  ];
  const bars = [42, 55, 48, 62, 58, 71, 66, 78, 74, 86, 81, 92];
  return (
    <>
      <Band />
      <section id="platform" className={`${s.col} scroll-mt-24`} aria-labelledby="platform-title">
        <div className="border-b border-white/[0.13] px-6 py-12 lg:px-12">
          <Slash>
            <span id="platform-title">your business, one screen.</span>
          </Slash>
        </div>
        <div className="grid lg:grid-cols-[5fr_7fr]">
          <div className="flex flex-col justify-center gap-10 px-6 py-14 lg:px-12">
            <p className="text-[24px] leading-[33px] text-(--muted)">
              <b className="font-semibold text-white">See everything, live.</b> Sales, stock, finance and operations in one dashboard your whole team trusts.
            </p>
            <div className="flex flex-col items-center gap-3 self-start">
              <Link href="/contact" className="inline-flex h-11 w-full min-w-[300px] items-center justify-center gap-2 rounded-full bg-(--fg) px-6 text-[16px] font-medium text-black transition-colors hover:bg-white">
                <PiChartBar aria-hidden="true" className="size-5" /> Book a call
              </Link>
              <p className="text-[12px] text-(--muted)">
                Built on <u className="decoration-white/30 underline-offset-2">HubSpot</u>, <u className="decoration-white/30 underline-offset-2">Odoo</u> &amp; <u className="decoration-white/30 underline-offset-2">your stack</u>
              </p>
            </div>
          </div>

          <figure className="border-white/[0.13] bg-(--panel) lg:border-l" aria-label="Sample client dashboard">
            <div className="grid grid-cols-[150px_1fr] text-[11px] max-sm:grid-cols-1">
              <aside className="flex flex-col gap-1.5 border-r border-(--panel-2) bg-(--panel-3) p-3 text-white/70 max-sm:hidden">
                <p className="mb-2 font-semibold text-white">Acorn Supply</p>
                {["Overview", "Sales", "Inventory", "Finance", "Customers", "Reports"].map((n, k) => (
                  <p key={n} className={`rounded px-2 py-1.5 ${k === 0 ? "bg-(--panel-2) text-white" : ""}`}>
                    {n}
                  </p>
                ))}
              </aside>
              <div className="flex flex-col gap-3 p-4">
                <div className="flex items-center justify-between text-white">
                  <p className="text-[13px] font-semibold">Overview <span className="ml-1 font-normal text-white/50">this month</span></p>
                  <span className={`${s.mono} rounded bg-(--panel-2) px-2 py-0.5 text-[10px] text-(--hi)`}>sample data</span>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {kpis.map(([l, v, d]) => (
                    <div key={l} className="rounded-md border border-(--panel-2) bg-(--panel-3) p-2.5">
                      <p className="text-white/55">{l}</p>
                      <p className={`${s.mono} mt-1 text-[15px] text-white`}>{v}</p>
                      <p className="text-(--ok)">{d}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-md border border-(--panel-2) bg-(--panel-3) p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <p className="text-white/75">Revenue by month</p>
                    <p className={`${s.mono} text-[10px] text-(--hi)`}>+[X]% vs last year</p>
                  </div>
                  <TileChart values={bars} label="Sample revenue by month, rising through the year" />
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="rounded-md border border-(--panel-2) bg-(--panel-3) p-3 text-white/75">
                    <p className="mb-2 text-white">Needs attention</p>
                    <p><span className="text-(--coral)">●</span> [N] invoices overdue</p>
                    <p><span className="text-(--coral)">●</span> [N] SKUs below reorder point</p>
                  </div>
                  <div className={`${s.mono} rounded-md border border-(--panel-2) bg-(--panel-4) p-3 text-[10px] text-white/70`}>
                    <p className="text-(--ok)">✓ CRM synced 2 min ago</p>
                    <p className="text-(--ok)">✓ ERP synced 2 min ago</p>
                    <p className="flex items-center gap-2"><span aria-hidden="true" className={s.live} /> Payments syncing…</p>
                  </div>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </section>
      <Band />
    </>
  );
}
