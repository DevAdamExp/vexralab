import Link from "next/link";
import { PiArrowsClockwise, PiChartBar, PiDatabase, PiQuestion } from "react-icons/pi";
import { Band, Slash } from "./parts";
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
            <p className="text-[24px] leading-[33px] text-[#a1a1aa]">
              <b className="font-semibold text-white">See everything, live.</b> Sales, stock, finance and operations in one dashboard your whole team trusts.
            </p>
            <div className="flex flex-col items-center gap-3 self-start">
              <Link href="/contact" className="inline-flex h-11 w-full min-w-[300px] items-center justify-center gap-2 rounded-full bg-[#fafafa] px-6 text-[16px] font-medium text-black transition-colors hover:bg-white">
                <PiChartBar aria-hidden="true" className="size-5" /> Book a call
              </Link>
              <p className="text-[12px] text-[#a1a1aa]">
                Built on <u className="decoration-white/30 underline-offset-2">HubSpot</u>, <u className="decoration-white/30 underline-offset-2">Odoo</u> &amp; <u className="decoration-white/30 underline-offset-2">your stack</u>
              </p>
            </div>
          </div>

          <figure className="border-white/[0.13] bg-[#141a33] lg:border-l" aria-label="Sample client dashboard">
            <div className="grid grid-cols-[150px_1fr] text-[11px] max-sm:grid-cols-1">
              <aside className="flex flex-col gap-1.5 border-r border-[#1c2447] bg-[#10152b] p-3 text-white/70 max-sm:hidden">
                <p className="mb-2 font-semibold text-white">Acorn Supply</p>
                {["Overview", "Sales", "Inventory", "Finance", "Customers", "Reports"].map((n, k) => (
                  <p key={n} className={`rounded px-2 py-1.5 ${k === 0 ? "bg-[#1c2447] text-white" : ""}`}>
                    {n}
                  </p>
                ))}
              </aside>
              <div className="flex flex-col gap-3 p-4">
                <div className="flex items-center justify-between text-white">
                  <p className="text-[13px] font-semibold">Overview <span className="ml-1 font-normal text-white/50">this month</span></p>
                  <span className={`${s.mono} rounded bg-[#1c2447] px-2 py-0.5 text-[10px] text-[#7c97f0]`}>sample data</span>
                </div>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {kpis.map(([l, v, d]) => (
                    <div key={l} className="rounded-md border border-[#1c2447] bg-[#10152b] p-2.5">
                      <p className="text-white/55">{l}</p>
                      <p className={`${s.mono} mt-1 text-[15px] text-white`}>{v}</p>
                      <p className="text-[#7ee2c8]">{d}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-md border border-[#1c2447] bg-[#10152b] p-3">
                  <p className="mb-3 text-white/70">Revenue by month</p>
                  <div className="flex h-28 items-end gap-1.5">
                    {bars.map((h, k) => (
                      <span key={k} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: k === bars.length - 1 ? "#7c97f0" : "#2a4c9e" }} />
                    ))}
                  </div>
                </div>
                <div className="grid gap-2 sm:grid-cols-2">
                  <div className="rounded-md border border-[#1c2447] bg-[#10152b] p-3 text-white/75">
                    <p className="mb-2 text-white">Needs attention</p>
                    <p>⚠ [N] invoices overdue</p>
                    <p>⚠ [N] SKUs below reorder point</p>
                  </div>
                  <div className={`${s.mono} rounded-md border border-[#1c2447] bg-[#0b0f20] p-3 text-[10px] text-white/70`}>
                    <p className="text-[#7ee2c8]">✓ CRM synced 2 min ago</p>
                    <p className="text-[#7ee2c8]">✓ ERP synced 2 min ago</p>
                    <p>⟳ Payments syncing…</p>
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

/** "// stop running on spreadsheets." Two tagged statements. */
export function Statements() {
  return (
    <>
      <section className={s.col} aria-labelledby="stmt-title">
        <div className="border-b border-white/[0.13] px-6 py-12 lg:px-12">
          <Slash>
            <span id="stmt-title">stop running on spreadsheets.</span>
          </Slash>
        </div>
        <div className="grid lg:grid-cols-2">
          <div className="border-white/[0.13] px-6 py-12 lg:border-r lg:px-12">
            <span className={s.tag}>data without structure is noise</span>
            <p className="mt-4 text-[20px] leading-7 text-[#a1a1aa]">
              <span className="mr-2 text-white/35">{"//"}</span>
              <b className="font-semibold text-white">Scattered. Manual. Late.</b> Five tools, ten spreadsheets, and nobody trusts the numbers. What if every answer was one click away?
            </p>
          </div>
          <div className="border-t border-white/[0.13] px-6 py-12 lg:border-t-0 lg:px-12">
            <span className={s.tag}>systems, not spreadsheets</span>
            <p className="mt-4 text-[20px] leading-7 text-[#a1a1aa]">
              <span className="mr-2 text-white/35">{"//"}</span>
              <b className="font-semibold text-white">Growing businesses run on VexraLab.</b> CRMs, ERPs and{" "}
              <u className="decoration-white/30 underline-offset-4">data pipelines</u> designed around your process, with{" "}
              <u className="decoration-white/30 underline-offset-4">fixed-price scopes</u> and weekly demos.
            </p>
          </div>
        </div>
      </section>
      <Band />
    </>
  );
}

/** "Hello, clarity." Input → thinking flow beside an insight panel, then the big mono line. */
export function Clarity() {
  const steps = [
    { icon: PiDatabase, title: "Connect every source.", text: "CRM, ERP, ads and payments, synced on a schedule." },
    { icon: PiArrowsClockwise, title: "Clean and model.", text: "duplicates merged, one ID per customer and product." },
    { icon: PiChartBar, title: "Answer the question.", text: "margin by product, region and rep, live." },
  ];
  return (
    <>
      <section id="process" className={`${s.col} scroll-mt-24`} aria-labelledby="clarity-title">
        <div className="grid lg:grid-cols-2">
          <h2 id="clarity-title" className="px-6 py-16 text-[26px] leading-[34px] font-normal text-[#a1a1aa] sm:text-[30px] sm:leading-9 lg:col-span-2 lg:px-[76px]">
            <span className="text-white">Hello, clarity.</span> One source of truth that ties your CRM, ERP and finance into a single{" "}
            <u className="decoration-white/40 underline-offset-[6px]">view of your business</u>.
          </h2>
        </div>

        <div className="relative flex items-center gap-4 border-y border-white/[0.13] px-6 py-8">
          <span className={`${s.mono} absolute top-1/2 -left-[118px] hidden -translate-y-1/2 text-[13px] text-white/40 xl:block`}>[ Input ]</span>
          <PiQuestion aria-hidden="true" className="size-6 shrink-0 rounded border border-white/25 p-0.5 text-white/70" />
          <p className="text-[15px]">Why are our margins shrinking this quarter?</p>
        </div>

        <div className="grid lg:grid-cols-2">
          <ol className="relative border-white/[0.13] lg:border-r">
            {steps.map(({ icon: Icon, title, text }, k) => (
              <li key={title} className={`relative flex items-center gap-4 px-6 py-8 ${k === 0 ? "bg-white/[0.04]" : ""}`}>
                {k === 0 && <span className={`${s.mono} absolute top-1/2 -left-[132px] hidden -translate-y-1/2 text-[13px] text-white/40 xl:block`}>[ Thinking ]</span>}
                <Icon aria-hidden="true" className="size-6 shrink-0 rounded border border-white/25 p-0.5 text-white/70" />
                <p className="text-[15px] text-white">
                  {title} <span className="text-[#a1a1aa]">{text}</span>
                </p>
              </li>
            ))}
          </ol>
          <div className="p-6">
            <div className={`${s.term} min-h-[320px]`}>
              <div className={s.termBar}>
                <span className={s.dot} style={{ background: "#ff5f57" }} />
                <span className={s.dot} style={{ background: "#febc2e" }} />
                <span className={s.dot} style={{ background: "#28c840" }} />
                <span className="ml-2">~/insights</span>
              </div>
              <div className="flex flex-col gap-2 p-4">
                <p className={s.prompt}>❯ analysis complete</p>
                <p><span className={s.badge}>FOUND</span>discounting up on two product lines</p>
                <p><span className={s.badge}>FOUND</span>shipping costs rising in one region</p>
                <p><span className={s.badge}>FOUND</span>slow-moving stock tying up cash</p>
                <p className="text-[#7ee2c8]">✓ 3 actions recommended</p>
                <p className="mt-4 text-[12px] text-white/40">Illustrative example.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid border-t border-white/[0.13] lg:grid-cols-2">
          <div className="hidden lg:block lg:border-r lg:border-white/[0.13]" />
          <div className="flex flex-col items-center gap-8 px-6 py-16">
            <p className={`${s.mono} text-[clamp(48px,6vw,72px)] leading-none font-medium`}>
              <span className="text-white/25">{"//"}</span>one-view
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className={s.btnAccent}>
                Book a call
              </Link>
              <a href="#pricing" className={s.btnGhost}>
                Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
      <Band />
    </>
  );
}
