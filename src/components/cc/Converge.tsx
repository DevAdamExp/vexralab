import type { CSSProperties, ReactNode } from "react";
import { PiBell, PiCalendarBlank, PiChartLineUp, PiGearSix, PiMagnifyingGlass, PiPackage, PiSquaresFour, PiUsers, PiWallet } from "react-icons/pi";
import { SiGooglesheets, SiHubspot, SiOdoo, SiQuickbooks, SiShopify, SiStripe, SiWhatsapp, SiZapier, SiZoho } from "react-icons/si";
import type { IconType } from "react-icons";
import { Mark } from "./Logo";
import { Band } from "./parts";
import { TileChart } from "./TileChart";
import s from "./cc.module.css";

/*
 * Home signature: The Convergence.
 * Nine source cards (the tools a business already runs on) start scattered in
 * space. Scrolling flies each card into its slot, where it flips into a live
 * dashboard widget; the app window builds around them and the whole product
 * shot straightens from a 3D tilt. Final state is the static fallback.
 * All figures are sample data.
 */

type Slot = { key: string; Icon: IconType; brand: string; name: string; snippet: string; area: string; dx: number; dy: number; rot: number; sc: number; widget: ReactNode };

const KPI = ({ label, value, delta, up = true }: { label: string; value: string; delta: string; up?: boolean }) => (
  <div className="flex h-full flex-col justify-between">
    <p className="text-[11px] text-white/60">{label}</p>
    <p className={`${s.mono} text-[22px] leading-none tracking-[-0.02em] text-white`}>{value}</p>
    <p className={`text-[11px] ${up ? "text-(--hi)" : "text-(--coral)"}`}>{delta}</p>
  </div>
);

const SLOTS: Slot[] = [
  { key: "stripe", Icon: SiStripe, brand: "#8f88ff", name: "Stripe", snippet: "1,204 payments", area: "k1", dx: 860, dy: 60, rot: 10, sc: 0.8, widget: <KPI label="Revenue (MTD)" value="$48,210" delta="▲ 12.4% vs last month" /> },
  { key: "shopify", Icon: SiShopify, brand: "#95bf47", name: "Shopify", snippet: "326 orders", area: "k2", dx: 630, dy: 170, rot: 8, sc: 0.8, widget: <KPI label="Orders today" value="326" delta="▲ 8.1% vs last week" /> },
  { key: "hubspot", Icon: SiHubspot, brand: "#ff7a59", name: "HubSpot", snippet: "41 open deals", area: "k3", dx: -630, dy: 140, rot: -7, sc: 0.8, widget: <KPI label="Open pipeline" value="$182.6k" delta="41 deals · 9 closing" /> },
  { key: "quickbooks", Icon: SiQuickbooks, brand: "#3fbf2c", name: "QuickBooks", snippet: "Ledger · 3 banks", area: "k4", dx: -270, dy: 50, rot: 6, sc: 0.8, widget: <KPI label="Cash on hand" value="$96.3k" delta="▼ 2 invoices overdue" up={false} /> },
  {
    key: "sheets", Icon: SiGooglesheets, brand: "#34a853", name: "Google Sheets", snippet: "revenue_v7_FINAL.xlsx", area: "ch", dx: 100, dy: 20, rot: -4, sc: 0.5,
    widget: (
      <div className="flex h-full flex-col">
        <div className="mb-3 flex items-center justify-between">
          <p className="text-[12px] text-white/80">Revenue by month</p>
          <div className={`${s.mono} flex gap-1 text-[10px]`}>
            {["1M", "6M", "1Y"].map((t) => (
              <span key={t} className={`rounded px-1.5 py-0.5 ${t === "1Y" ? "bg-(--panel-2) text-white" : "text-white/50"}`}>{t}</span>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <TileChart values={[38, 46, 42, 55, 51, 62, 58, 70, 66, 78, 84, 93]} label="Sample revenue by month" />
        </div>
      </div>
    ),
  },
  {
    key: "zoho", Icon: SiZoho, brand: "#ff5a5f", name: "Zoho", snippet: "2,918 leads", area: "ld", dx: -600, dy: -180, rot: 9, sc: 0.7,
    widget: (
      <div className="flex h-full flex-col justify-between">
        <p className="text-[12px] text-white/80">Leads by channel</p>
        {[["Website", 42], ["Referral", 27], ["Ads", 19], ["WhatsApp", 12]].map(([n, v]) => (
          <div key={n} className="grid grid-cols-[64px_1fr_28px] items-center gap-2 text-[11px]">
            <span className="text-white/65">{n}</span>
            <span className="h-1.5 rounded-full bg-white/[0.06]"><i className="block h-full rounded-full bg-gradient-to-r from-(--sail-hi) to-(--hi)" style={{ width: `${v}%` }} /></span>
            <span className={`${s.mono} text-right text-white/80`}>{v}%</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    key: "odoo", Icon: SiOdoo, brand: "#c39bbd", name: "Odoo", snippet: "1,140 SKUs", area: "iv", dx: -980, dy: 70, rot: -8, sc: 0.7,
    widget: (
      <div className="flex h-full flex-col justify-between">
        <p className="text-[12px] text-white/80">Stock watch</p>
        {[["Oak desk", "84", false], ["Lamp, brass", "12", true], ["Chair, linen", "57", false]].map(([n, q, low]) => (
          <div key={n as string} className="flex items-center justify-between text-[11px]">
            <span className="text-white/70">{n}</span>
            <span className="flex items-center gap-2">
              <span className={`${s.mono} text-white`}>{q}</span>
              {low && <span className="rounded bg-(--coral)/15 px-1.5 text-[10px] text-(--coral)">Low</span>}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    key: "whatsapp", Icon: SiWhatsapp, brand: "#25d366", name: "WhatsApp", snippet: "18 new chats", area: "ac", dx: 480, dy: -20, rot: 7, sc: 0.5,
    widget: (
      <div className="flex h-full flex-col justify-between">
        <p className="text-[12px] text-white/80">Live activity</p>
        {[["Order #1042 paid", "Stripe", "now"], ["New lead, Sara M.", "WhatsApp", "2m"], ["Lamp, brass below reorder", "Odoo", "9m"]].map(([t, src, ago]) => (
          <div key={t} className="flex items-center gap-2 text-[11px]">
            <span className={`${s.live} shrink-0 scale-75`} />
            <span className="flex-1 truncate text-white/80">{t}</span>
            <span className="text-white/45">{src}</span>
            <span className={`${s.mono} w-6 text-right text-white/45`}>{ago}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    key: "zapier", Icon: SiZapier, brand: "#ff4f00", name: "Zapier", snippet: "12 zaps", area: "au", dx: -540, dy: -20, rot: -6, sc: 0.5,
    widget: (
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-center justify-between">
          <p className="text-[12px] text-white/80">Automations</p>
          <span className={`${s.mono} rounded bg-(--accent)/30 px-1.5 text-[10px] text-(--hi)`}>12 running</span>
        </div>
        {[["Quote → invoice", "4m"], ["Lead → CRM + owner", "6m"], ["Low stock → reorder", "1h"]].map(([n, t]) => (
          <div key={n} className="flex items-center justify-between text-[11px]">
            <span className="flex items-center gap-2 text-white/75"><i className="size-1.5 rounded-full bg-(--hi)" />{n}</span>
            <span className={`${s.mono} text-white/45`}>{t}</span>
          </div>
        ))}
      </div>
    ),
  },
];

const NAV = [
  { Icon: PiSquaresFour, n: "Overview", on: true },
  { Icon: PiChartLineUp, n: "Sales" },
  { Icon: PiPackage, n: "Inventory" },
  { Icon: PiWallet, n: "Finance" },
  { Icon: PiUsers, n: "Customers" },
  { Icon: PiGearSix, n: "Settings" },
];

const CAPTIONS = ["Your data lives in nine different tools.", "We connect every source and clean it.", "Your whole business, on one screen."];

export function Converge() {
  return (
    <>
      <section id="platform" className={`${s.converge} scroll-mt-24`} aria-labelledby="converge-title">
        <h2 id="converge-title" className="sr-only">
          Nine tools become one dashboard
        </h2>
        <div className={s.convergeStage}>
          <div className="mx-auto flex h-full w-full max-w-[1152px] flex-col gap-5 px-4 py-7 sm:px-6 lg:px-12">
            <div className="flex items-end justify-between gap-6">
              <div className={s.captions}>
                {CAPTIONS.map((c, i) => (
                  <p key={c} className={`${s[`cap${i}`]} text-[clamp(26px,3vw,40px)] leading-[1.1] font-semibold tracking-[-0.035em]`}>
                    <span className={`${s.mono} mr-3 align-middle text-[12px] font-normal tracking-normal text-(--hi)`}>0{i + 1}</span>
                    {c}
                  </p>
                ))}
              </div>
              <p className={`${s.mono} hidden shrink-0 pb-2 text-[11px] text-white/50 lg:block`}>Sample data</p>
            </div>

            <div className={s.shot}>
              <div className={s.win}>
                <div className={s.winChrome} aria-hidden="true">
                  <div className="flex items-center gap-2 border-b border-white/[0.08] px-4 py-2.5">
                    <span className="size-2.5 rounded-full bg-white/15" />
                    <span className="size-2.5 rounded-full bg-white/15" />
                    <span className="size-2.5 rounded-full bg-white/15" />
                    <span className={`${s.mono} mx-auto rounded-md bg-white/[0.05] px-10 py-1 text-[10px] text-white/50`}>app.vexralab.com/acorn-supply</span>
                  </div>
                </div>
                <div className={s.app}>
                  <aside className={`${s.appSide} max-md:hidden`} aria-hidden="true">
                    <div className="mb-5 flex items-center gap-2 px-2">
                      <Mark size={11} />
                      <span className="text-[12px] font-semibold">Acorn Supply</span>
                    </div>
                    {NAV.map(({ Icon, n, on }) => (
                      <p key={n} className={`flex items-center gap-2.5 rounded-md px-2 py-1.5 text-[12px] ${on ? "bg-white/[0.07] text-white" : "text-white/55"}`}>
                        <Icon aria-hidden="true" className="size-3.5" /> {n}
                      </p>
                    ))}
                    <div className="mt-auto rounded-md border border-white/[0.08] p-2.5 text-[10px] text-white/55">
                      <p className="mb-1.5 text-white/80">9 sources connected</p>
                      <div className="flex flex-wrap gap-1.5">
                        {SLOTS.map(({ Icon, key, brand }) => (
                          <Icon key={key} aria-hidden="true" className="size-3" style={{ color: brand }} />
                        ))}
                      </div>
                    </div>
                  </aside>

                  <div className="flex min-w-0 flex-col">
                    <div className={`${s.appTop} flex items-center gap-3 border-b border-white/[0.08] px-4 py-2.5`} aria-hidden="true">
                      <p className="text-[13px] font-semibold">Overview</p>
                      <span className="flex flex-1 items-center gap-2 rounded-md bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/40 max-sm:hidden">
                        <PiMagnifyingGlass className="size-3" /> Search customers, orders, SKUs
                      </span>
                      <span className="ml-auto flex items-center gap-1.5 rounded-md border border-white/[0.08] px-2 py-1 text-[11px] text-white/70">
                        <PiCalendarBlank className="size-3" /> This month
                      </span>
                      <PiBell className="size-3.5 text-white/60" />
                      <span className="grid size-6 place-items-center rounded-full bg-(--accent) text-[10px] font-semibold">AS</span>
                    </div>

                    <div className={s.dash}>
                      {SLOTS.map((x, k) => (
                        <div
                          key={x.key}
                          className={s.slot}
                          style={{ gridArea: x.area, "--dx": `${x.dx}px`, "--dy": `${x.dy}px`, "--rot": `${x.rot}deg`, "--sc": x.sc, "--k": k } as CSSProperties}
                        >
                          <div className={s.slotBack}>{x.widget}</div>
                          <div className={s.slotFront} aria-hidden="true">
                            <x.Icon className="size-7" style={{ color: x.brand }} />
                            <span>
                              <span className="block text-[13px] font-semibold text-white">{x.name}</span>
                              <span className={`${s.mono} block text-[10px] text-white/55`}>{x.snippet}</span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Band />
    </>
  );
}
