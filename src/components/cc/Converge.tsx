import type { CSSProperties, ReactNode } from "react";
import { PiBank, PiBell, PiCalendarBlank, PiChartLineUp, PiCurrencyDollar, PiGearSix, PiHandshake, PiMagnifyingGlass, PiPackage, PiShoppingCart, PiSquaresFour, PiUsers, PiWallet } from "react-icons/pi";
import { SiGooglesheets, SiHubspot, SiOdoo, SiQuickbooks, SiShopify, SiStripe, SiWhatsapp, SiZapier, SiZoho } from "react-icons/si";
import type { IconType } from "react-icons";
import { Mark } from "./Logo";
import { Band } from "./parts";
import { Activity, Automations, Kpi, Leads, RevenueChart, Stock } from "./Widgets";
import s from "./cc.module.css";

/*
 * Home signature: The Convergence.
 * Nine source cards (the tools a business already runs on) start scattered in
 * space. Scrolling flies each card into its slot, where it flips into a live
 * dashboard widget; the app window builds around them and the whole product
 * shot straightens from a 3D tilt. Final state is the static fallback.
 * All figures are sample data.
 */

type Slot = { key: string; Icon: IconType; brand: string; name: string; cat: string; stat: string; unit: string; area: string; dx: number; dy: number; rot: number; sc: number; widget: ReactNode };

const SLOTS: Slot[] = [
  { key: "stripe", Icon: SiStripe, brand: "#8f88ff", name: "Stripe", cat: "Payments", stat: "1,204", unit: "payments", area: "k1", dx: 700, dy: 60, rot: 4, sc: 1,
    widget: <Kpi label="Revenue, this month" Icon={PiCurrencyDollar} value="$48,210" delta="12.4%" note="vs last month" spark={[22, 24, 23, 27, 26, 30, 29, 33, 35, 34, 38, 41]} /> },
  { key: "shopify", Icon: SiShopify, brand: "#95bf47", name: "Shopify", cat: "Online store", stat: "326", unit: "orders today", area: "k2", dx: 470, dy: 190, rot: 3, sc: 1,
    widget: <Kpi label="Orders today" Icon={PiShoppingCart} count={326} delta="8.1%" note="vs last Tuesday" spark={[12, 18, 15, 22, 19, 26, 24, 23, 29, 31, 28, 33]} /> },
  { key: "hubspot", Icon: SiHubspot, brand: "#ff7a59", name: "HubSpot", cat: "CRM", stat: "41", unit: "open deals", area: "k3", dx: -630, dy: 140, rot: -2, sc: 1,
    widget: <Kpi label="Open deals" Icon={PiHandshake} count={41} delta="9 closing" note="$182.6k pipeline" spark={[30, 32, 31, 35, 33, 36, 38, 37, 40, 39, 42, 41]} /> },
  { key: "quickbooks", Icon: SiQuickbooks, brand: "#3fbf2c", name: "QuickBooks", cat: "Accounting", stat: "3", unit: "bank feeds", area: "k4", dx: -270, dy: 50, rot: 2, sc: 1,
    widget: <Kpi label="Cash on hand" Icon={PiBank} value="$96.3k" delta="2 overdue" up={false} note="$7.4k to collect" spark={[44, 42, 45, 41, 40, 42, 39, 38, 40, 37, 36, 35]} /> },
  { key: "sheets", Icon: SiGooglesheets, brand: "#34a853", name: "Google Sheets", cat: "Spreadsheet", stat: "37", unit: "tabs, 4 versions", area: "ch", dx: 100, dy: 20, rot: -2, sc: 1,
    widget: <RevenueChart values={[38, 46, 42, 55, 51, 62, 58, 70, 66, 78, 84, 93]} /> },
  { key: "zoho", Icon: SiZoho, brand: "#ff5a5f", name: "Zoho", cat: "Lead capture", stat: "2,918", unit: "leads", area: "ld", dx: -600, dy: -180, rot: 3, sc: 1, widget: <Leads /> },
  { key: "odoo", Icon: SiOdoo, brand: "#c39bbd", name: "Odoo", cat: "ERP", stat: "1,140", unit: "SKUs", area: "iv", dx: -980, dy: 70, rot: -3, sc: 1, widget: <Stock /> },
  { key: "whatsapp", Icon: SiWhatsapp, brand: "#25d366", name: "WhatsApp", cat: "Messaging", stat: "18", unit: "new chats", area: "ac", dx: 480, dy: -20, rot: 2, sc: 1, widget: <Activity /> },
  { key: "zapier", Icon: SiZapier, brand: "#ff4f00", name: "Zapier", cat: "Automation", stat: "12", unit: "zaps", area: "au", dx: -540, dy: -20, rot: -2, sc: 1, widget: <Automations /> },
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
                  <div className="flex items-center gap-2 border-b border-(--line-soft) px-4 py-2.5">
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
                    <div className="mt-auto rounded-md border border-(--line-soft) p-2.5 text-[10px] text-white/55">
                      <p className="mb-1.5 text-white/80">9 sources connected</p>
                      <div className="flex flex-wrap gap-1.5">
                        {SLOTS.map(({ Icon, key, brand }) => (
                          <Icon key={key} aria-hidden="true" className="size-3" style={{ color: brand }} />
                        ))}
                      </div>
                    </div>
                  </aside>

                  <div className="flex min-w-0 flex-col">
                    <div className={`${s.appTop} flex items-center gap-3 border-b border-(--line-soft) px-4 py-2.5`} aria-hidden="true">
                      <p className="text-[13px] font-semibold">Overview</p>
                      <span className="flex flex-1 items-center gap-2 rounded-md bg-white/[0.04] px-2.5 py-1 text-[11px] text-white/40 max-sm:hidden">
                        <PiMagnifyingGlass className="size-3" /> Search customers, orders, SKUs
                      </span>
                      <span className="ml-auto flex items-center gap-1.5 rounded-md border border-(--line-soft) px-2 py-1 text-[11px] text-white/70">
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
                          <div className={s.slotFront} aria-hidden="true" style={{ "--b": x.brand } as CSSProperties}>
                            <div className="flex items-center gap-3">
                              <span className={s.toolIcon}>
                                <x.Icon className="size-6" style={{ color: x.brand }} />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block truncate text-[16px] leading-tight font-semibold tracking-[-0.01em] text-white">{x.name}</span>
                                <span className="block text-[12px] text-white/55">{x.cat}</span>
                              </span>
                              <i aria-hidden="true" className={`${s.toolDot} self-start`} />
                            </div>
                            <div className="flex items-end justify-between gap-3">
                              <p className="leading-none">
                                <span className={`${s.mono} ${s.tnum} text-[22px] leading-none tracking-[-0.03em] text-white`}>{x.stat}</span>
                                <span className="ml-1.5 text-[12px] text-white/55">{x.unit}</span>
                              </p>
                            </div>
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
