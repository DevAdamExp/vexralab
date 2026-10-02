import type { CSSProperties, ReactNode } from "react";
import type { ServiceId } from "@/data/site";
import styles from "./services.module.css";

/*
 * The deliverables, drawn in code. One fictional business runs through all five:
 * Larkfield, a physio clinic for desk workers. Every figure is sample data.
 * Colours here belong to the sample brand; Blue Sail stays inside these drawings.
 */

const SHADOW = "shadow-[0_1px_0_rgb(255_255_255/0.5)_inset,0_34px_64px_-30px_rgb(12_12_20/0.55),0_14px_28px_-14px_rgb(12_12_20/0.35)]";
const RING = "ring-1 ring-[#232733]/10";
const MONO = "font-mono uppercase tracking-[0.18em]";

/** A fixed-pixel drawing scaled to its column. `crop` > 1 draws it wider on phones and shows the left part. */
function Canvas({ w, h, label, crop, children }: { w: number; h: number; label: string; crop?: number; children: ReactNode }) {
  return (
    <div role="img" aria-label={label} className={styles.frame}>
      <div className={styles.canvas} style={{ "--w": w, "--h": h, "--crop": crop ?? 1 } as CSSProperties}>
        <div className={styles.inner}>{children}</div>
      </div>
    </div>
  );
}

/** Larkfield's mark: a low sun over a rolling hill. */
function LarkMark({ size, sun = "#F2A477", hill = "#F4F0E8" }: { size: number; sun?: string; hill?: string }) {
  return (
    <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden="true" className="shrink-0">
      <circle cx="30" cy="18" r="7.5" fill={sun} />
      <path d="M3 41C11 30 19 26 26 29.5C32 32.5 37 31.5 45 25V41Z" fill={hill} />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Brand & messaging: an identity sheet.                               */
/* ------------------------------------------------------------------ */

const PALETTE = [
  { name: "Sail", hex: "#2A4C9E", cls: "bg-sail text-white" },
  { name: "Linen", hex: "#F4F0E8", cls: "bg-[#F4F0E8] text-[#232733] ring-1 ring-inset ring-[#232733]/10" },
  { name: "Slate", hex: "#232733", cls: "bg-[#232733] text-white" },
  { name: "Apricot", hex: "#F2A477", cls: "bg-[#F2A477] text-[#232733]" },
];

function BrandSheet() {
  return (
    <Canvas w={960} h={640} label="Sample identity sheet for Larkfield, a fictional physio clinic: logo, one-line positioning, four brand colours, type specimen and business cards.">
      {/* Primary lockup */}
      <div className={`absolute top-0 left-0 flex h-[392px] w-[452px] flex-col justify-between overflow-hidden rounded-[12px] bg-sail p-8 text-white ${SHADOW}`}>
        <p className={`${MONO} text-[10px] text-white/65`}>Primary lockup</p>
        <div className="flex flex-col items-center gap-4">
          <LarkMark size={92} />
          <p className="text-[64px] leading-none font-semibold tracking-[-0.045em]">Larkfield</p>
          <p className={`${MONO} text-[11px] tracking-[0.34em] text-white/75`}>Physio &amp; movement</p>
        </div>
        <div className="flex items-center justify-between text-[10px] text-white/60">
          <span className={MONO}>Min. size 24px</span>
          <span className={MONO}>Clear space = 1 sun</span>
        </div>
      </div>

      {/* Palette */}
      <div className={`absolute top-0 left-[468px] grid h-[180px] w-[492px] grid-cols-4 overflow-hidden rounded-[12px] ${SHADOW}`}>
        {PALETTE.map((c) => (
          <div key={c.name} className={`flex flex-col justify-end p-4 ${c.cls}`}>
            <p className="text-[16px] font-semibold tracking-[-0.01em]">{c.name}</p>
            <p className="mt-0.5 font-mono text-[11px] tracking-[0.08em] opacity-75">{c.hex}</p>
          </div>
        ))}
      </div>

      {/* Type specimen */}
      <div className={`absolute top-[196px] left-[468px] flex h-[196px] w-[492px] gap-6 rounded-[12px] bg-[#F4F0E8] p-6 text-[#232733] ${RING} ${SHADOW}`}>
        <p className="text-[112px] leading-[0.9] font-semibold tracking-[-0.05em]">Aa</p>
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div className="space-y-1.5 border-b border-[#232733]/12 pb-3 text-[12px]">
            <p className="flex justify-between"><span className="font-semibold">Display</span><span className="text-[#232733]/60">Grotesk 600 / -3.5%</span></p>
            <p className="flex justify-between"><span>Body</span><span className="text-[#232733]/60">Grotesk 400 / 1.6</span></p>
          </div>
          <p className="text-[26px] leading-[1.05] font-semibold tracking-[-0.03em]">Move well again.</p>
          <p className="font-mono text-[12px] tracking-[0.06em] text-[#232733]/60 tabular-nums">0123456789 &amp; ?!</p>
        </div>
      </div>

      {/* Positioning */}
      <div className={`absolute top-[408px] left-0 flex h-[232px] w-[452px] flex-col justify-between rounded-[12px] bg-[#232733] p-7 text-[#F4F0E8] ${SHADOW}`}>
        <p className={`${MONO} text-[10px] text-[#F4F0E8]/60`}>One-line positioning</p>
        <p className="text-[27px] leading-[1.12] font-semibold tracking-[-0.025em]">
          Physio for people who sit all day. We find the cause, <span className="text-[#F2A477]">not just the ache.</span>
        </p>
        <p className="text-[11px] text-[#F4F0E8]/60">Used on: homepage, Google profile, team intros, email signature</p>
      </div>

      {/* Business cards */}
      <div className={`absolute top-[408px] left-[468px] h-[232px] w-[492px] overflow-hidden rounded-[12px] bg-[#E6E0D5] ${RING}`}>
        <p className={`${MONO} absolute top-5 left-6 text-[10px] text-[#232733]/55`}>Business card</p>
        <div className={`absolute top-[52px] left-[34px] flex h-[144px] w-[252px] -rotate-[7deg] items-center justify-center gap-2.5 rounded-[6px] bg-sail text-white ${SHADOW}`}>
          <LarkMark size={34} />
          <span className="text-[24px] font-semibold tracking-[-0.04em]">Larkfield</span>
        </div>
        <div className={`absolute top-[62px] left-[214px] flex h-[144px] w-[252px] rotate-[4deg] flex-col justify-between rounded-[6px] bg-[#F4F0E8] p-4 text-[#232733] ${SHADOW}`}>
          <LarkMark size={22} sun="#F2A477" hill="#2A4C9E" />
          <div>
            <p className="text-[14px] font-semibold tracking-[-0.01em]">Nadia Reyes</p>
            <p className="text-[10px] text-[#232733]/65">Lead physiotherapist</p>
            <p className="mt-2 font-mono text-[9px] tracking-[0.04em] text-[#232733]/75">hello@larkfield.example</p>
          </div>
        </div>
      </div>
    </Canvas>
  );
}

/* ------------------------------------------------------------------ */
/* Websites: a browser window with the phone version laid over it.     */
/* ------------------------------------------------------------------ */

const PRICES = [
  { name: "Assessment", time: "45 min", note: "Find the cause, leave with a plan." },
  { name: "Follow-up", time: "30 min", note: "Hands-on treatment and progress check." },
  { name: "Desk setup review", time: "60 min", note: "We look at how you actually sit." },
];

function Website() {
  return (
    <Canvas w={1000} h={640} crop={1.45} label="Sample homepage for Larkfield, a fictional physio clinic, shown in a desktop browser with the mobile version on a phone beside it.">
      {/* Browser */}
      <div className={`absolute top-6 left-0 h-[592px] w-[790px] overflow-hidden rounded-[12px] bg-[#F4F0E8] ${RING} ${SHADOW}`}>
        <div className="flex h-10 items-center gap-2 border-b border-[#232733]/10 bg-[#E9E4DA] px-4">
          <span className="size-[11px] rounded-full bg-[#232733]/20" />
          <span className="size-[11px] rounded-full bg-[#232733]/20" />
          <span className="size-[11px] rounded-full bg-[#232733]/20" />
          <span className="mx-auto flex h-6 w-[300px] items-center justify-center gap-1.5 rounded-md bg-white/70 text-[11px] text-[#232733]/65">
            <svg width="9" height="11" viewBox="0 0 9 11" aria-hidden="true"><rect x="0.5" y="4.5" width="8" height="6" rx="1.5" fill="currentColor" /><path d="M2.5 4.5V3a2 2 0 0 1 4 0v1.5" stroke="currentColor" fill="none" /></svg>
            larkfield.example
          </span>
          <span className="w-[45px]" />
        </div>

        <div className="flex h-14 items-center justify-between px-8 text-[#232733]">
          <span className="flex items-center gap-2 text-[17px] font-semibold tracking-[-0.04em]">
            <LarkMark size={22} hill="#2A4C9E" /> Larkfield
          </span>
          <span className="flex items-center gap-6 text-[12.5px] text-[#232733]/75">
            <span>Treatments</span>
            <span>Prices</span>
            <span>Team</span>
            <span>Visit us</span>
            <span className="rounded-full bg-sail px-3.5 py-1.5 font-semibold text-white">Book</span>
          </span>
        </div>

        <div className="grid grid-cols-[1fr_300px] gap-8 px-8 pt-7 text-[#232733]">
          <div>
            <p className={`${MONO} text-[10px] text-sail`}>Physio for desk workers</p>
            <p className="mt-3 text-[40px] leading-[1.02] font-semibold tracking-[-0.035em]">Back pain from desk work, fixed at the cause.</p>
            <p className="mt-4 max-w-[38ch] text-[13.5px] leading-[1.6] text-[#232733]/70">
              A 45-minute assessment, a plan you can follow at your desk, and evening slots that fit around work.
            </p>
            <div className="mt-6 flex gap-2.5 text-[12.5px] font-semibold">
              <span className="rounded-full bg-sail px-5 py-2.5 text-white shadow-[0_8px_16px_-8px_rgb(42_76_158/0.7)]">Book an assessment</span>
              <span className="rounded-full px-5 py-2.5 ring-1 ring-[#232733]/25">See prices</span>
            </div>
            <p className="mt-6 flex gap-4 text-[11px] text-[#232733]/60">
              <span>Evening slots</span>
              <span aria-hidden="true">·</span>
              <span>Same-week appointments</span>
              <span aria-hidden="true">·</span>
              <span>[Insurer] accepted</span>
            </p>
          </div>
          <div className="relative h-[260px] overflow-hidden rounded-[16px] bg-sail">
            <svg viewBox="0 0 300 260" className="absolute inset-0 size-full" aria-hidden="true">
              <circle cx="190" cy="96" r="38" fill="#F2A477" />
              <path d="M0 220C50 160 110 140 160 158C205 175 245 168 300 128V260H0Z" fill="#F4F0E8" opacity=".18" />
              <path d="M0 250C60 198 120 186 175 200C220 212 260 204 300 180V260H0Z" fill="#F4F0E8" opacity=".9" />
            </svg>
            <div className={`absolute top-4 left-4 rounded-[10px] bg-white px-3 py-2 text-[#232733] ${SHADOW}`}>
              <p className="text-[9.5px] text-[#232733]/60">Next free slot</p>
              <p className="text-[13px] font-semibold tabular-nums">Tue 18:30</p>
            </div>
          </div>
        </div>

        <div className="mt-9 grid grid-cols-3 gap-3 px-8 text-[#232733]">
          {PRICES.map((p) => (
            <div key={p.name} className="rounded-[12px] bg-white p-4 ring-1 ring-[#232733]/8">
              <p className="flex items-baseline justify-between">
                <span className="text-[14px] font-semibold">{p.name}</span>
                <span className="text-[11px] text-[#232733]/55 tabular-nums">{p.time}</span>
              </p>
              <p className="mt-1.5 text-[11.5px] leading-[1.5] text-[#232733]/65">{p.note}</p>
              <p className="mt-3 text-[15px] font-semibold tabular-nums">[$X]</p>
            </div>
          ))}
        </div>
      </div>

      {/* Phone */}
      <div className={`absolute top-[118px] left-[748px] h-[500px] w-[236px] rounded-[38px] bg-[#232733] p-[9px] ${SHADOW}`}>
        <div className="relative h-full overflow-hidden rounded-[30px] bg-[#F4F0E8] text-[#232733]">
          <div className="flex h-9 items-center justify-between px-5 text-[10.5px] font-semibold tabular-nums">
            <span>9:41</span>
            <span className="h-[18px] w-[64px] rounded-full bg-[#232733]" />
            <span className="flex gap-0.5">
              <span className="h-2 w-[3px] rounded-[1px] bg-current" />
              <span className="h-2 w-[3px] rounded-[1px] bg-current" />
              <span className="h-2 w-[3px] rounded-[1px] bg-current/30" />
            </span>
          </div>
          <div className="flex items-center justify-between px-4 py-2">
            <span className="flex items-center gap-1.5 text-[13px] font-semibold tracking-[-0.04em]">
              <LarkMark size={16} hill="#2A4C9E" /> Larkfield
            </span>
            <span className="flex flex-col gap-[3px]">
              <span className="h-[1.5px] w-4 bg-current" />
              <span className="h-[1.5px] w-3 self-end bg-current" />
            </span>
          </div>
          <div className="px-4 pt-3">
            <p className={`${MONO} text-[8px] text-sail`}>Physio for desk workers</p>
            <p className="mt-2 text-[22px] leading-[1.04] font-semibold tracking-[-0.035em]">Back pain from desk work, fixed at the cause.</p>
            <p className="mt-2.5 text-[10.5px] leading-[1.55] text-[#232733]/70">A 45-minute assessment and a plan you can follow at your desk.</p>
          </div>
          <div className="relative mx-4 mt-4 h-[116px] overflow-hidden rounded-[12px] bg-sail">
            <svg viewBox="0 0 200 116" className="absolute inset-0 size-full" aria-hidden="true">
              <circle cx="128" cy="44" r="18" fill="#F2A477" />
              <path d="M0 108C40 82 80 76 116 86C146 94 172 90 200 76V116H0Z" fill="#F4F0E8" opacity=".9" />
            </svg>
          </div>
          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-[16px] bg-white p-2 pl-3.5 ring-1 ring-[#232733]/8 shadow-[0_10px_24px_-12px_rgb(12_12_20/0.4)]">
            <span>
              <span className="block text-[8.5px] text-[#232733]/55">Next free</span>
              <span className="block text-[11px] font-semibold tabular-nums">Tue 18:30</span>
            </span>
            <span className="rounded-full bg-sail px-3.5 py-2 text-[10.5px] font-semibold text-white">Book</span>
          </div>
        </div>
      </div>
    </Canvas>
  );
}

/* ------------------------------------------------------------------ */
/* Web apps & portals: the clinic's dashboard.                         */
/* ------------------------------------------------------------------ */

const NAV = ["Overview", "Bookings", "Patients", "Invoices", "Messages", "Reports"];
const KPIS = [
  { label: "Bookings this week", value: "128", note: "+14 on last week" },
  { label: "Rebooked after first visit", value: "64%", note: "+6 pts" },
  { label: "Unpaid invoices", value: "$1,240", note: "3 invoices" },
  { label: "Intake forms done", value: "92%", note: "Before the visit" },
];
const DAYS = [
  ["Mon", 18],
  ["Tue", 24],
  ["Wed", 21],
  ["Thu", 27],
  ["Fri", 22],
  ["Sat", 11],
  ["Sun", 5],
] as const;
const ROWS = [
  { who: "Jordan P.", what: "Assessment", time: "09:00", by: "Nadia R.", status: "Checked in" },
  { who: "Amara K.", what: "Follow-up", time: "10:30", by: "Tom B.", status: "Confirmed" },
  { who: "Leo M.", what: "Desk setup review", time: "13:00", by: "Nadia R.", status: "Form pending" },
  { who: "Priya S.", what: "Follow-up", time: "17:30", by: "Tom B.", status: "Confirmed" },
];
const PILL: Record<string, string> = {
  "Checked in": "bg-[#1F7A5A]/12 text-[#17694C]",
  Confirmed: "bg-sail/10 text-sail",
  "Form pending": "bg-[#F2A477]/30 text-[#7A3F14]",
};

/** Chart area, drawn to scale: 30 appointments = 132px. */
const CHART_H = 132;
const CHART_MAX = 30;

function Dashboard() {
  return (
    <Canvas w={1000} h={680} crop={1.5} label="Sample clinic portal dashboard: navigation, four headline figures, a bar chart of appointments by day and today's appointment list with statuses.">
      <div className={`absolute inset-0 flex overflow-hidden rounded-[14px] bg-[#F7F5F1] text-[#232733] ${RING} ${SHADOW}`}>
        <aside className="flex w-[196px] shrink-0 flex-col bg-[#232733] p-4 text-[#F4F0E8]">
          <span className="flex items-center gap-2 px-2 pt-1 text-[16px] font-semibold tracking-[-0.04em]">
            <LarkMark size={20} /> Larkfield
          </span>
          <span className={`${MONO} mt-1 px-2 text-[8.5px] text-[#F4F0E8]/50`}>Clinic portal</span>
          <ul className="mt-7 space-y-0.5 text-[12.5px]">
            {NAV.map((n, k) => (
              <li key={n} className={`flex items-center gap-2.5 rounded-[8px] px-2.5 py-2 ${k === 0 ? "bg-white/10 font-semibold text-white" : "text-[#F4F0E8]/65"}`}>
                <span className={`size-3.5 rounded-[4px] ${k === 0 ? "bg-[#F2A477]" : "border border-current opacity-60"}`} />
                {n}
                {n === "Messages" && <span className="ml-auto rounded-full bg-white/15 px-1.5 text-[10px] tabular-nums">2</span>}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex items-center gap-2.5 rounded-[10px] bg-white/6 p-2.5">
            <span className="grid size-7 place-items-center rounded-full bg-sail text-[10px] font-semibold">NR</span>
            <span className="leading-tight">
              <span className="block text-[11.5px] font-semibold">Nadia Reyes</span>
              <span className="block text-[10px] text-[#F4F0E8]/55">Admin</span>
            </span>
          </div>
        </aside>

        <div className="min-w-0 flex-1 p-5">
          <div className="flex h-9 items-center gap-3">
            <p className="text-[19px] font-semibold tracking-[-0.025em]">Overview</p>
            <span className="rounded-full bg-[#232733]/6 px-2.5 py-1 text-[10.5px] text-[#232733]/70">This week</span>
            <span className={`${MONO} rounded-full border border-dashed border-[#232733]/30 px-2 py-0.5 text-[9px] text-[#232733]/60`}>Sample data</span>
            <span className="ml-auto flex h-8 w-[200px] items-center gap-2 rounded-[8px] bg-white px-3 text-[11px] text-[#232733]/45 ring-1 ring-[#232733]/8">
              <svg width="11" height="11" viewBox="0 0 11 11" aria-hidden="true"><circle cx="4.5" cy="4.5" r="3.5" stroke="currentColor" fill="none" strokeWidth="1.4" /><path d="M7.5 7.5L10 10" stroke="currentColor" strokeWidth="1.4" /></svg>
              Search patients
            </span>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-3">
            {KPIS.map((k) => (
              <div key={k.label} className="rounded-[12px] bg-white p-3.5 ring-1 ring-[#232733]/8">
                <p className="text-[10.5px] text-[#232733]/60">{k.label}</p>
                <p className="mt-1.5 text-[25px] leading-none font-semibold tracking-[-0.03em] tabular-nums">{k.value}</p>
                <p className="mt-1.5 text-[10px] text-[#232733]/55 tabular-nums">{k.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-[1fr_250px] gap-3">
            <div className="rounded-[12px] bg-white p-4 ring-1 ring-[#232733]/8">
              <p className="flex items-baseline justify-between">
                <span className="text-[12.5px] font-semibold">Appointments by day</span>
                <span className="text-[10px] text-[#232733]/55 tabular-nums">128 total</span>
              </p>
              <div className="relative mt-4 ml-6" style={{ height: CHART_H }}>
                {[0, 10, 20, 30].map((t) => (
                  <div key={t} className="absolute inset-x-0 border-t border-[#232733]/8" style={{ bottom: (t / CHART_MAX) * CHART_H }}>
                    <span className="absolute -top-[7px] -left-6 w-4 text-right text-[9px] text-[#232733]/45 tabular-nums">{t}</span>
                  </div>
                ))}
                <div className="absolute inset-0 flex items-end justify-around px-2">
                  {DAYS.map(([d, v]) => (
                    <div key={d} className="relative w-[34px] rounded-t-[5px]" style={{ height: (v / CHART_MAX) * CHART_H, background: d === "Thu" ? "var(--color-sail)" : "rgb(42 76 158 / 0.28)" }}>
                      <span className="absolute -top-4 inset-x-0 text-center text-[9.5px] font-semibold text-[#232733]/70 tabular-nums">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-1.5 ml-6 flex justify-around px-2 text-[9.5px] text-[#232733]/55">
                {DAYS.map(([d]) => (
                  <span key={d} className="w-[34px] text-center">{d}</span>
                ))}
              </div>
            </div>

            <div className="rounded-[12px] bg-white p-4 ring-1 ring-[#232733]/8">
              <p className="text-[12.5px] font-semibold">Needs attention</p>
              <ul className="mt-3 divide-y divide-[#232733]/8 text-[11px]">
                {[
                  ["3 intake forms not started", "Send reminder"],
                  ["2 invoices due Friday", "Review"],
                  ["1 cancellation to rebook", "Offer slot"],
                ].map(([t, a]) => (
                  <li key={t} className="flex items-center justify-between gap-2 py-2.5">
                    <span>{t}</span>
                    <span className="shrink-0 font-semibold text-sail">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-3 rounded-[12px] bg-white ring-1 ring-[#232733]/8">
            <p className="flex items-baseline justify-between px-4 pt-3.5 pb-2">
              <span className="text-[12.5px] font-semibold">Today</span>
              <span className="text-[10px] text-[#232733]/55">4 of 11 shown</span>
            </p>
            <table className="w-full text-left text-[11px]">
              <thead className="text-[9.5px] text-[#232733]/50">
                <tr className="border-y border-[#232733]/8">
                  <th className="font-mono uppercase px-4 py-2 font-normal tracking-[0.12em]">Patient</th>
                  <th className="font-mono uppercase py-2 font-normal tracking-[0.12em]">Treatment</th>
                  <th className="font-mono uppercase py-2 font-normal tracking-[0.12em]">Time</th>
                  <th className="font-mono uppercase py-2 font-normal tracking-[0.12em]">Clinician</th>
                  <th className="font-mono uppercase py-2 font-normal tracking-[0.12em]">Status</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r) => (
                  <tr key={r.who} className="border-b border-[#232733]/6 last:border-0">
                    <td className="px-4 py-[7px] font-semibold">{r.who}</td>
                    <td className="py-[7px] text-[#232733]/75">{r.what}</td>
                    <td className="py-[7px] tabular-nums">{r.time}</td>
                    <td className="py-[7px] text-[#232733]/75">{r.by}</td>
                    <td className="py-[7px]">
                      <span className={`rounded-full px-2 py-[3px] text-[10px] font-semibold ${PILL[r.status]}`}>{r.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Canvas>
  );
}

/* ------------------------------------------------------------------ */
/* Automation & AI: the enquiry workflow.                              */
/* ------------------------------------------------------------------ */

const NODE = `absolute h-[140px] w-[180px] rounded-[14px] bg-white p-3.5 text-[#232733] ${RING} ${SHADOW}`;
/** Connectors run from the right middle of one node to the left middle of the next. */
const LINKS = ["M200 260C240 260 240 112 280 112", "M460 112C500 112 500 376 540 376", "M720 376C760 376 760 224 800 224"];

function NodeHead({ step, title, icon }: { step: string; title: string; icon: ReactNode }) {
  return (
    <>
      <p className="flex items-center gap-2">
        <span className="grid size-6 place-items-center rounded-[7px] bg-sail/10 text-sail">{icon}</span>
        <span className={`${MONO} text-[8.5px] text-[#232733]/55`}>{step}</span>
      </p>
      <p className="mt-2 text-[14.5px] font-semibold tracking-[-0.015em]">{title}</p>
    </>
  );
}

function Workflow() {
  const dot = <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><rect x="1" y="1" width="8" height="8" rx="2" stroke="currentColor" fill="none" strokeWidth="1.5" /></svg>;
  return (
    <Canvas w={1000} h={500} label="Sample automation: a new enquiry from the website form goes to an AI triage step, which tags it and drafts a reply, then creates a lead in the CRM and notifies the front-desk team.">
      <div className="absolute inset-0 rounded-[16px] bg-[radial-gradient(rgb(35_39_51/0.13)_1px,transparent_1.2px)] [background-size:20px_20px]" />

      <svg viewBox="0 0 1000 500" className="absolute inset-0 size-full" aria-hidden="true">
        {LINKS.map((d) => (
          <g key={d}>
            <path d={d} fill="none" stroke="rgb(35 39 51 / 0.22)" strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" />
            <path d={d} fill="none" stroke="var(--color-sail)" strokeWidth="1.5" opacity=".35" />
          </g>
        ))}
        {[[200, 260], [280, 112], [460, 112], [540, 376], [720, 376], [800, 224]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#fff" stroke="var(--color-sail)" strokeWidth="1.5" />
        ))}
      </svg>
      {LINKS.map((d, k) => (
        <span key={d} className={styles.pulse} style={{ offsetPath: `path("${d}")`, "--d": `${k * 1.4}s` } as CSSProperties} />
      ))}

      <div className={`${NODE} top-[190px] left-5`}>
        <NodeHead step="01 Trigger" title="New enquiry" icon={dot} />
        <dl className="mt-2 space-y-1 text-[10.5px]">
          {[["Name", "Jordan P."], ["Need", "Lower back, desk job"], ["When", "Evenings"]].map(([k, v]) => (
            <div key={k} className="flex gap-2"><dt className="w-9 text-[#232733]/50">{k}</dt><dd className="truncate">{v}</dd></div>
          ))}
        </dl>
      </div>

      <div className={`${NODE} top-[42px] left-[280px]`}>
        <NodeHead step="02 AI triage" title="Reads and sorts it" icon={<svg width="11" height="11" viewBox="0 0 11 11" aria-hidden="true"><path d="M5.5 0.5L6.8 4.2L10.5 5.5L6.8 6.8L5.5 10.5L4.2 6.8L0.5 5.5L4.2 4.2Z" fill="currentColor" /></svg>} />
        <p className="mt-2 flex flex-wrap gap-1 text-[9.5px] font-semibold">
          <span className="rounded-full bg-sail/10 px-2 py-0.5 text-sail">New patient</span>
          <span className="rounded-full bg-sail/10 px-2 py-0.5 text-sail">Lower back</span>
          <span className="rounded-full bg-[#232733]/6 px-2 py-0.5 text-[#232733]/70">Not urgent</span>
        </p>
        <p className="mt-2 text-[10px] text-[#232733]/60">Reply drafted for review</p>
      </div>

      <div className={`${NODE} top-[306px] left-[540px]`}>
        <NodeHead step="03 CRM" title="Lead created" icon={dot} />
        <dl className="mt-2 space-y-1 text-[10.5px]">
          {[["Stage", "New lead"], ["Owner", "Front desk"], ["Source", "Website form"]].map(([k, v]) => (
            <div key={k} className="flex gap-2"><dt className="w-11 text-[#232733]/50">{k}</dt><dd>{v}</dd></div>
          ))}
        </dl>
      </div>

      <div className={`${NODE} top-[154px] left-[800px]`}>
        <NodeHead step="04 Notify" title="Team told" icon={dot} />
        <div className="mt-2 rounded-[8px] bg-[#F4F0E8] p-2 text-[10px] leading-[1.45]">
          <span className="font-semibold">#front-desk</span> New enquiry from Jordan P. Reply drafted, ready to send.
        </div>
      </div>

      <p className="absolute top-[312px] left-[800px] flex w-[180px] items-center gap-1.5 rounded-full bg-[#232733] px-3 py-1.5 text-[10px] text-[#F4F0E8]">
        <span className="size-1.5 rounded-full bg-[#F2A477]" /> Weekly summary to your inbox
      </p>
    </Canvas>
  );
}

/* ------------------------------------------------------------------ */
/* Care & growth: the monthly report.                                  */
/* ------------------------------------------------------------------ */

const VISITS = [42, 45, 44, 48, 47, 52, 50, 55, 58, 57, 61, 64];
const SHIPPED = [
  "Booking form cut from 9 fields to 4",
  "Evening slots shown on the homepage",
  "Hero images compressed, pages load faster",
  "Prices page rewritten in plain words",
  "Framework and plugins updated",
];

function sparkline(w: number, h: number) {
  const lo = 40;
  const hi = 66;
  const pts = VISITS.map((v, k) => [(k / (VISITS.length - 1)) * w, h - ((v - lo) / (hi - lo)) * h] as const);
  const line = pts.map(([x, y], k) => `${k ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join("");
  return { line, area: `${line}L${w} ${h}L0 ${h}Z`, last: pts[pts.length - 1] };
}

function Report() {
  const s = sparkline(340, 84);
  return (
    <Canvas w={880} h={600} label="Sample monthly report for Larkfield: website visits rising over twelve weeks, booking rate up from 2.1% to 3.4% in sample figures, and a checklist of five improvements shipped this month.">
      <div className={`absolute inset-0 rounded-[16px] bg-white p-8 text-[#232733] ${RING} ${SHADOW}`}>
        <div className="flex items-center justify-between border-b border-[#232733]/10 pb-5">
          <span className="flex items-center gap-2.5">
            <LarkMark size={26} hill="#2A4C9E" />
            <span>
              <span className="block text-[17px] font-semibold tracking-[-0.03em]">Monthly report</span>
              <span className="block text-[11px] text-[#232733]/60">Larkfield · [Month, Year]</span>
            </span>
          </span>
          <span className={`${MONO} rounded-full border border-dashed border-[#232733]/30 px-2.5 py-1 text-[9.5px] text-[#232733]/60`}>Sample figures</span>
        </div>

        <div className="mt-6 grid grid-cols-[360px_1fr] gap-8">
          <div>
            <p className={`${MONO} text-[9.5px] text-[#232733]/55`}>Booking rate</p>
            <div className="mt-3 flex items-end gap-4">
              <p>
                <span className="block text-[11px] text-[#232733]/55">Before</span>
                <span className="text-[34px] leading-none font-semibold tracking-[-0.03em] text-[#232733]/40 tabular-nums">2.1%</span>
              </p>
              <svg width="34" height="14" viewBox="0 0 34 14" className="mb-2.5 text-sail" aria-hidden="true"><path d="M0 7H31M25 1L32 7L25 13" stroke="currentColor" strokeWidth="1.8" fill="none" /></svg>
              <p>
                <span className="block text-[11px] text-[#232733]/55">After</span>
                <span className="text-[52px] leading-none font-semibold tracking-[-0.04em] text-sail tabular-nums">3.4%</span>
              </p>
            </div>

            <div className="mt-8 rounded-[12px] bg-[#F7F5F1] p-4">
              <p className="flex items-baseline justify-between">
                <span className="text-[12px] font-semibold">Website visits, 12 weeks</span>
                <span className="text-[11px] text-sail tabular-nums">+52%</span>
              </p>
              <svg viewBox="-4 -6 348 96" width="340" height="96" className="mt-3 overflow-visible" aria-hidden="true">
                <path d={s.area} fill="rgb(42 76 158 / 0.1)" />
                <path d={s.line} fill="none" stroke="var(--color-sail)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
                <circle cx={s.last[0]} cy={s.last[1]} r="4" fill="var(--color-sail)" stroke="#fff" strokeWidth="2" />
              </svg>
            </div>
          </div>

          <div>
            <p className={`${MONO} text-[9.5px] text-[#232733]/55`}>Shipped this month</p>
            <ul className="mt-3 divide-y divide-[#232733]/8">
              {SHIPPED.map((t) => (
                <li key={t} className="flex items-center gap-3 py-3 text-[13px]">
                  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="shrink-0">
                    <circle cx="9" cy="9" r="9" fill="var(--color-sail)" />
                    <path d="M5 9.2L7.7 11.8L13 6.5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
            <div className="mt-4 rounded-[12px] border border-dashed border-[#232733]/20 p-4">
              <p className={`${MONO} text-[9.5px] text-[#232733]/55`}>Next month</p>
              <p className="mt-1.5 text-[13px] font-semibold">Test a shorter headline on the prices page.</p>
            </div>
          </div>
        </div>

        <p className="absolute right-8 bottom-6 left-8 flex justify-between border-t border-[#232733]/10 pt-4 text-[11px] text-[#232733]/60">
          <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-[#1F7A5A]" /> All uptime checks passed</span>
          <span>Questions? Reply to this email.</span>
        </p>
      </div>
    </Canvas>
  );
}

export const DELIVERABLE: Record<ServiceId, { Drawing: () => ReactNode; caption: string }> = {
  brand: { Drawing: BrandSheet, caption: "Sample identity sheet · Larkfield, a fictional clinic" },
  websites: { Drawing: Website, caption: "Sample homepage · desktop and phone" },
  apps: { Drawing: Dashboard, caption: "Sample clinic portal · sample data" },
  automation: { Drawing: Workflow, caption: "Sample workflow · enquiry to team in one pass" },
  care: { Drawing: Report, caption: "Sample monthly report · sample figures" },
};
