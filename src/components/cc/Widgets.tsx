import type { CSSProperties, ReactNode } from "react";
import { PiArrowDownRight, PiArrowUpRight, PiDotsThree, PiGlobe, PiMegaphone, PiUsers } from "react-icons/pi";
import { SiOdoo, SiStripe, SiWhatsapp } from "react-icons/si";
import type { IconType } from "react-icons";
import { tone } from "./parts";
import s from "./cc.module.css";

/* Dashboard widgets for the home Convergence. Every figure is sample data. */

/** Widget header: title, optional right-hand slot, and an overflow affordance. */
function Head({ title, right }: { title: string; right?: ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-2">
      <p className="text-[12px] font-medium text-white/85">{title}</p>
      <div className="flex items-center gap-2">
        {right}
        <PiDotsThree aria-hidden="true" className="size-3.5 text-white/35" />
      </div>
    </div>
  );
}

/** A smooth sparkline with a soft fill, drawn in a 100 x 28 box. */
function Spark({ d, color }: { d: number[]; color: string }) {
  const max = Math.max(...d);
  const min = Math.min(...d);
  const pts = d.map((v, i) => [(i / (d.length - 1)) * 100, 26 - ((v - min) / (max - min || 1)) * 22] as const);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const id = `sp-${color.replace(/[^a-z0-9]/gi, "")}-${d.length}-${d[0]}`;
  return (
    <svg viewBox="0 0 100 28" preserveAspectRatio="none" className="h-7 w-full overflow-visible" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity=".28" />
          <stop offset="1" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={`${line} L100,28 L0,28 Z`} fill={`url(#${id})`} />
      <path d={line} fill="none" stroke={color} strokeWidth="1.5" vectorEffect="non-scaling-stroke" strokeLinejoin="round" className={s.sparkLine} />
      <circle cx={pts.at(-1)![0]} cy={pts.at(-1)![1]} r="2.2" fill={color} className={s.sparkDot} />
    </svg>
  );
}

/** KPI: label + icon, a large tabular value (optionally counting up), delta pill and sparkline. */
export function Kpi({ label, Icon, value, count, prefix = "", delta, up = true, note, spark }: { label: string; Icon: IconType; value?: string; count?: number; prefix?: string; delta: string; up?: boolean; note: string; spark: number[] }) {
  const color = up ? "var(--hi)" : "var(--coral)";
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between">
        <p className="text-[11px] text-white/60">{label}</p>
        <span className="grid size-5 place-items-center rounded-md bg-white/[0.05]">
          <Icon aria-hidden="true" className="size-3 text-white/60" />
        </span>
      </div>
      <div className="mt-1.5 flex items-end justify-between gap-3">
        <p className={`${s.mono} ${s.tnum} text-[21px] leading-none tracking-[-0.03em] text-white`}>
          {count !== undefined ? (
            <span className={s.count} style={{ "--to": count } as CSSProperties} aria-label={`${prefix}${count}`}>
              {prefix}
            </span>
          ) : (
            value
          )}
        </p>
        <div className="w-[42%] max-w-[90px]">
          <Spark d={spark} color={color} />
        </div>
      </div>
      <div className="mt-auto flex items-center gap-2 text-[10.5px]">
        <span className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-px font-medium ${up ? "bg-(--hi)/12 text-(--hi)" : "bg-(--coral)/12 text-(--coral)"}`}>
          {up ? <PiArrowUpRight aria-hidden="true" className="size-2.5" /> : <PiArrowDownRight aria-hidden="true" className="size-2.5" />}
          {delta}
        </span>
        <span className="truncate text-white/45">{note}</span>
      </div>
    </div>
  );
}

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const ROWS = 10;

/** Revenue by month: columns of cells, y-axis, month initials, target line, per-column hover readout. */
export function RevenueChart({ values }: { values: number[] }) {
  return (
    <div className="flex h-full flex-col">
      <Head
        title="Revenue by month"
        right={
          <div className={`${s.mono} flex gap-0.5 rounded-md bg-white/[0.04] p-0.5 text-[9.5px]`}>
            {["1M", "6M", "1Y"].map((t) => (
              <span key={t} className={`rounded px-1.5 py-0.5 ${t === "1Y" ? "bg-white/[0.09] text-white" : "text-white/45"}`}>
                {t}
              </span>
            ))}
          </div>
        }
      />
      <div className="mt-1 flex items-baseline gap-2">
        <p className={`${s.mono} ${s.tnum} text-[17px] tracking-[-0.02em] text-white`}>$612.4k</p>
        <p className="text-[10.5px] text-(--hi)">+23.6% year on year</p>
      </div>

      <div className="mt-auto grid grid-cols-[30px_minmax(0,1fr)] gap-2">
        <div className={`${s.mono} flex flex-col justify-between py-0.5 text-right text-[9px] text-white/35`} aria-hidden="true">
          <span>$80k</span>
          <span>$40k</span>
          <span>$0</span>
        </div>
        <div className="relative">
          <span aria-hidden="true" className={s.target} style={{ bottom: "78%" }}>
            <em>Target</em>
          </span>
          <div className="grid gap-[3px]" style={{ gridTemplateColumns: `repeat(${values.length}, minmax(0, 1fr))` }}>
            {values.map((v, c) => {
              const filled = Math.round(v / 10);
              return (
                <div key={c} className={s.col2} data-v={`$${Math.round(v * 0.86)}k`}>
                  <div className="grid gap-[3px]" style={{ gridTemplateRows: `repeat(${ROWS}, 9px)` }}>
                    {Array.from({ length: ROWS }, (_, r) => {
                      const fb = ROWS - 1 - r;
                      const on = fb < filled;
                      return (
                        <i
                          key={r}
                          className={on ? `${s.cell} ${fb === filled - 1 && c === values.length - 1 ? s.cellLive : ""}` : s.cellEmpty}
                          style={on ? ({ "--c": tone(c + 1, 1, values.length, false), "--o": 0.35 + (0.65 * (fb + 1)) / filled, "--d": c * 45 + fb * 35 } as CSSProperties) : undefined}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={`${s.mono} mt-2 grid text-center text-[9px] text-white/35`} style={{ gridTemplateColumns: `repeat(${values.length}, minmax(0, 1fr))` }} aria-hidden="true">
            {MONTHS.map((m, i) => (
              <span key={i} className={i === values.length - 1 ? "text-white/80" : ""}>
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const CHANNELS: [IconType, string, number, string][] = [
  [PiGlobe, "Website", 42, "1,226"],
  [PiUsers, "Referral", 27, "788"],
  [PiMegaphone, "Ads", 19, "554"],
  [SiWhatsapp, "WhatsApp", 12, "350"],
];

export function Leads() {
  return (
    <div className="flex h-full flex-col justify-between">
      <Head title="Leads by channel" right={<span className={`${s.mono} ${s.tnum} text-[10px] text-white/45`}>2,918</span>} />
      {CHANNELS.map(([Icon, n, v, abs], i) => (
        <div key={n} className="grid grid-cols-[14px_56px_minmax(0,1fr)_30px] items-center gap-2 text-[10.5px]">
          <Icon aria-hidden="true" className="size-3 text-white/50" />
          <span className="text-white/70">{n}</span>
          <span className="h-[5px] overflow-hidden rounded-full bg-white/[0.06]" title={`${abs} leads`}>
            <i className={`${s.barGrow} block h-full rounded-full`} style={{ width: `${v * 2.2}%`, background: `linear-gradient(90deg, var(--sail-hi), ${tone(i + 2, 1, 5, false)})`, "--d": i * 90 } as CSSProperties} />
          </span>
          <span className={`${s.mono} ${s.tnum} text-right text-white/85`}>{v}%</span>
        </div>
      ))}
    </div>
  );
}

const STOCK: [string, string, number, number][] = [
  ["Oak desk", "SKU-104", 84, 100],
  ["Lamp, brass", "SKU-118", 12, 100],
  ["Chair, linen", "SKU-131", 57, 100],
];

export function Stock() {
  return (
    <div className="flex h-full flex-col justify-between">
      <Head title="Stock watch" right={<span className="rounded bg-(--coral)/12 px-1.5 text-[9.5px] text-(--coral)">1 low</span>} />
      {STOCK.map(([n, sku, q, max]) => {
        const low = q < 20;
        return (
          <div key={sku} className="text-[10.5px]">
            <div className="flex items-baseline justify-between">
              <span className="text-white/75">
                {n} <span className={`${s.mono} text-[9px] text-white/35`}>{sku}</span>
              </span>
              <span className={`${s.mono} ${s.tnum} ${low ? "text-(--coral)" : "text-white"}`}>{q}</span>
            </div>
            <span className="mt-1 block h-[3px] overflow-hidden rounded-full bg-white/[0.06]">
              <i className={`${s.barGrow} block h-full rounded-full ${low ? "bg-(--coral)" : "bg-(--hi)/70"}`} style={{ width: `${(q / max) * 100}%` } as CSSProperties} />
            </span>
          </div>
        );
      })}
    </div>
  );
}

const FEED: [IconType, string, string, string, string][] = [
  [SiStripe, "#8f88ff", "Order #1042 paid", "$1,280.00", "now"],
  [SiWhatsapp, "#25d366", "New lead, Sara M.", "Referral", "2m"],
  [SiOdoo, "#c39bbd", "Lamp, brass below reorder", "12 left", "9m"],
];

export function Activity() {
  return (
    <div className="flex h-full flex-col justify-between">
      <Head
        title="Live activity"
        right={
          <span className="flex items-center gap-1.5 text-[10px] text-white/55">
            <span className={`${s.live} scale-75`} /> Live
          </span>
        }
      />
      {FEED.map(([Icon, c, t, meta, ago], i) => (
        <div key={t} className={`${i === 0 ? s.feedNew : ""} flex items-center gap-2.5 text-[10.5px]`}>
          <span className="grid size-5 shrink-0 place-items-center rounded-md bg-white/[0.05]">
            <Icon aria-hidden="true" className="size-2.5" style={{ color: c }} />
          </span>
          <span className="flex-1 truncate text-white/85">{t}</span>
          <span className={`${s.mono} ${s.tnum} text-white/50`}>{meta}</span>
          <span className={`${s.mono} w-7 text-right text-white/35`}>{ago}</span>
        </div>
      ))}
    </div>
  );
}

const FLOWS: [string, string, number][] = [
  ["Quote → invoice", "4m ago", 318],
  ["Lead → CRM + owner", "6m ago", 1204],
  ["Low stock → reorder", "1h ago", 46],
];

export function Automations() {
  return (
    <div className="flex h-full flex-col justify-between">
      <Head
        title="Automations"
        right={
          <span className={`${s.mono} rounded bg-(--accent)/30 px-1.5 text-[9.5px] text-(--hi)`}>
            <span className={s.count} style={{ "--to": 12 } as CSSProperties} aria-label="12" /> running
          </span>
        }
      />
      {FLOWS.map(([n, t, runs]) => (
        <div key={n} className="flex items-center gap-2.5 text-[10.5px]">
          <span aria-hidden="true" className={s.toggle} />
          <span className="flex-1 truncate text-white/80">{n}</span>
          <span className={`${s.mono} ${s.tnum} text-white/45`}>{runs.toLocaleString("en-US")} runs</span>
          <span className={`${s.mono} w-12 text-right text-white/35`}>{t}</span>
        </div>
      ))}
    </div>
  );
}
