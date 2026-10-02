import type { CSSProperties, ReactNode } from "react";
import type { ServiceId } from "@/data/site";
import styles from "./services.module.css";

/*
 * The deliverables, drawn in code. One fictional business runs through all five:
 * Larkfield, a physio clinic for desk workers. Every figure is sample data.
 * Each plate is accented in its service's brand colour; type is Cranio (display),
 * Mifetro (body), Manrope (UI) and JetBrains Mono (labels).
 */

const SHADOW = "shadow-[0_40px_80px_-36px_rgb(10_10_14/0.6),0_16px_32px_-18px_rgb(10_10_14/0.4)]";
const RING = "ring-1 ring-ink/10";
const MONO = "font-mono uppercase tracking-[0.18em]";
const UI = "font-ui font-semibold";

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

/** Larkfield's mark: a Cranio L in a disc. */
function Lark({ size, bg = "bg-fg", fg = "text-ink" }: { size: number; bg?: string; fg?: string }) {
  return (
    <span aria-hidden="true" className={`font-display grid shrink-0 place-items-center rounded-full leading-none ${bg} ${fg}`} style={{ width: size, height: size, fontSize: size * 0.6 }}>
      L
    </span>
  );
}

function SampleTag({ children = "Sample", className = "" }: { children?: ReactNode; className?: string }) {
  return <span className={`${MONO} rounded-full border border-dashed border-current/35 px-2.5 py-1 text-[9px] opacity-70 ${className}`}>{children}</span>;
}

/* Brand & messaging (red): an identity sheet. --------------------------- */

const PALETTE = [
  { name: "Inferno", hex: "#BD1B1F", cls: "bg-red text-fg" },
  { name: "Belle", hex: "#DAD2C8", cls: "bg-belle text-ink" },
  { name: "Void", hex: "#151419", cls: "bg-void text-fg" },
  { name: "Lamp", hex: "#F6BB02", cls: "bg-lamp text-ink" },
];

function BrandSheet() {
  return (
    <Canvas w={960} h={640} label="Sample identity sheet for Larkfield, a fictional physio clinic: logo lockup, four brand colours, type specimen, one-line positioning and business cards.">
      <div className={`absolute top-0 left-0 flex h-[392px] w-[452px] flex-col justify-between overflow-hidden rounded-[16px] bg-red p-8 text-fg ${SHADOW}`}>
        <span className="flex justify-between">
          <span className={`${MONO} text-[10px] text-fg/75`}>Primary lockup</span>
          <SampleTag />
        </span>
        <div className="flex flex-col items-center gap-5">
          <Lark size={84} />
          <p className="font-display text-[72px] leading-none tracking-[-0.02em]">Larkfield</p>
          <p className={`${MONO} text-[11px] tracking-[0.34em] text-fg/80`}>Physio &amp; movement</p>
        </div>
        <span className={`${MONO} text-[9.5px] text-fg/65`}>Clear space = one disc</span>
      </div>

      <div className={`absolute top-0 left-[468px] grid h-[180px] w-[492px] grid-cols-4 overflow-hidden rounded-[16px] ${SHADOW}`}>
        {PALETTE.map((c) => (
          <div key={c.name} className={`flex flex-col justify-end p-4 ${c.cls}`}>
            <p className="font-display text-[19px] leading-none">{c.name}</p>
            <p className="mt-1.5 font-mono text-[10.5px] tracking-[0.08em] opacity-75">{c.hex}</p>
          </div>
        ))}
      </div>

      <div className={`absolute top-[196px] left-[468px] flex h-[196px] w-[492px] gap-7 rounded-[16px] bg-fg p-6 text-ink ${SHADOW}`}>
        <p className="font-display text-[120px] leading-[0.85]">Aa</p>
        <div className="flex min-w-0 flex-1 flex-col justify-between">
          <div className="space-y-1.5 border-b border-ink/12 pb-3 font-mono text-[10.5px] tracking-[0.06em] text-ink/70">
            <p className="flex justify-between"><span>DISPLAY</span><span>Cranio 400</span></p>
            <p className="flex justify-between"><span>BODY</span><span>Mifetro 400</span></p>
          </div>
          <p className="font-display text-[30px] leading-none">Move well again.</p>
          <p className="font-mono text-[11px] tracking-[0.06em] text-ink/60">0123456789 &amp; ?!</p>
        </div>
      </div>

      <div className={`absolute top-[408px] left-0 flex h-[232px] w-[452px] flex-col justify-between rounded-[16px] bg-void p-7 text-fg ${SHADOW}`}>
        <p className={`${MONO} text-[10px] text-fg/65`}>One line</p>
        <p className="font-display text-[31px] leading-[1.1]">
          Physio for people who sit all day. We fix <span className="text-lamp">the cause.</span>
        </p>
      </div>

      <div className="absolute top-[408px] left-[468px] h-[232px] w-[492px] overflow-hidden rounded-[16px] bg-belle ring-1 ring-ink/10">
        <p className={`${MONO} absolute top-5 left-6 text-[10px] text-ink/60`}>Cards</p>
        <div className={`absolute top-[52px] left-[34px] flex h-[144px] w-[252px] -rotate-[7deg] items-center justify-center gap-3 rounded-[8px] bg-red text-fg ${SHADOW}`}>
          <Lark size={34} />
          <span className="font-display text-[28px]">Larkfield</span>
        </div>
        <div className={`absolute top-[62px] left-[214px] flex h-[144px] w-[252px] rotate-[4deg] flex-col justify-between rounded-[8px] bg-fg p-4 text-ink ${SHADOW}`}>
          <Lark size={24} bg="bg-red" fg="text-fg" />
          <div>
            <p className="font-display text-[17px] leading-none">Nadia Reyes</p>
            <p className="mt-1 text-[10px] text-ink/65">Lead physiotherapist</p>
            <p className="mt-2 font-mono text-[9px] tracking-[0.04em] text-ink/75">hello@larkfield.example</p>
          </div>
        </div>
      </div>
    </Canvas>
  );
}

/* Websites (sea): the homepage in a browser, the phone beside it. -------- */

const PRICES = [
  { name: "Assessment", time: "45 min" },
  { name: "Follow-up", time: "30 min" },
  { name: "Desk review", time: "60 min" },
];

/** The theme photo, standing in for the clinic's own imagery. */
function Photo({ className }: { className: string }) {
  // eslint-disable-next-line @next/next/no-img-element -- drawn at a fixed pixel size inside a scaled canvas
  return <img src="/img/desk-window.jpg" alt="" loading="lazy" className={`object-cover ${className}`} />;
}

function Website() {
  return (
    <Canvas w={1000} h={640} crop={1.45} label="Sample homepage for Larkfield, a fictional physio clinic, in a desktop browser with the mobile version on a phone beside it.">
      <div className={`absolute top-6 left-0 h-[592px] w-[790px] overflow-hidden rounded-[16px] bg-fg text-ink ${RING} ${SHADOW}`}>
        <div className="flex h-10 items-center gap-2 border-b border-ink/10 bg-paper-2 px-4">
          {[0, 1, 2].map((k) => <span key={k} className="size-[11px] rounded-full bg-ink/15" />)}
          <span className="mx-auto flex h-6 w-[300px] items-center justify-center rounded-md bg-fg/80 font-mono text-[10.5px] text-ink/65">larkfield.example</span>
          <span className="w-[45px]" />
        </div>

        <div className="flex h-16 items-center justify-between px-9">
          <span className="flex items-center gap-2.5 font-display text-[20px]">
            <Lark size={24} bg="bg-sea" fg="text-fg" /> Larkfield
          </span>
          <span className={`flex items-center gap-7 font-ui text-[12px] text-ink/70`}>
            <span>Treatments</span>
            <span>Prices</span>
            <span>Team</span>
            <span className={`${UI} rounded-full bg-sea px-4 py-2 text-fg`}>Book</span>
          </span>
        </div>

        <div className="grid grid-cols-[1fr_320px] gap-9 px-9 pt-6">
          <div>
            <p className={`${MONO} text-[10px] text-sea`}>Physio for desk workers</p>
            <p className="mt-4 font-display text-[50px] leading-[0.98]">Back pain from desk work, fixed at the cause.</p>
            <div className="mt-8 flex gap-2.5 font-ui text-[12px] font-semibold">
              <span className="rounded-full bg-sea px-5 py-3 text-fg">Book an assessment</span>
              <span className="rounded-full px-5 py-3 ring-1 ring-ink/25">See prices</span>
            </div>
          </div>
          <div className="relative h-[270px] overflow-hidden rounded-[18px]">
            <Photo className="absolute inset-0 size-full" />
            <div className={`absolute bottom-4 left-4 rounded-[12px] bg-fg px-3.5 py-2.5 ${SHADOW}`}>
              <p className="font-mono text-[9px] tracking-[0.12em] text-ink/60 uppercase">Next free slot</p>
              <p className="mt-0.5 font-display text-[18px] leading-none tabular-nums">Tue 18:30</p>
            </div>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-3 px-9">
          {PRICES.map((p) => (
            <div key={p.name} className="flex items-end justify-between rounded-[14px] bg-paper-2 p-5">
              <span>
                <span className="block font-display text-[20px] leading-none">{p.name}</span>
                <span className="mt-2 block font-mono text-[10px] tracking-[0.1em] text-ink/60">{p.time}</span>
              </span>
              <span className="font-display text-[20px] leading-none text-sea">[$X]</span>
            </div>
          ))}
        </div>
      </div>

      <div className={`absolute top-[110px] left-[750px] h-[510px] w-[236px] rounded-[40px] bg-void p-[9px] ${SHADOW}`}>
        <div className="relative h-full overflow-hidden rounded-[32px] bg-fg text-ink">
          <div className="flex h-9 items-center justify-between px-5 font-ui text-[10.5px] font-semibold tabular-nums">
            <span>9:41</span>
            <span className="h-[18px] w-[64px] rounded-full bg-void" />
            <span className="w-6" />
          </div>
          <div className="flex items-center justify-between px-4 py-2">
            <span className="flex items-center gap-1.5 font-display text-[15px]">
              <Lark size={18} bg="bg-sea" fg="text-fg" /> Larkfield
            </span>
            <span className="flex flex-col gap-[3px]">
              <span className="h-[1.5px] w-4 bg-current" />
              <span className="h-[1.5px] w-3 self-end bg-current" />
            </span>
          </div>
          <div className="px-4 pt-3">
            <p className={`${MONO} text-[8px] text-sea`}>Physio for desk workers</p>
            <p className="mt-2 font-display text-[27px] leading-[0.98]">Back pain from desk work, fixed at the cause.</p>
          </div>
          <Photo className="mx-4 mt-5 h-[150px] w-[calc(100%-2rem)] rounded-[14px]" />
          <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-[18px] bg-paper-2 p-2 pl-4">
            <span className="font-display text-[14px] leading-none tabular-nums">Tue 18:30</span>
            <span className={`${UI} rounded-full bg-sea px-4 py-2 text-[10.5px] text-fg`}>Book</span>
          </div>
        </div>
      </div>
    </Canvas>
  );
}

/* Web apps & portals (sail): the clinic's dashboard. --------------------- */

const NAV = ["Overview", "Bookings", "Patients", "Invoices", "Messages"];
const KPIS = [
  { label: "Bookings", value: "128", note: "+14 this week" },
  { label: "Rebooked", value: "64%", note: "+6 pts" },
  { label: "Unpaid", value: "$1,240", note: "3 invoices" },
];
const DAYS = [["Mon", 18], ["Tue", 24], ["Wed", 21], ["Thu", 27], ["Fri", 22], ["Sat", 11], ["Sun", 5]] as const;
const ROWS = [
  { who: "Jordan P.", what: "Assessment", time: "09:00", status: "Checked in" },
  { who: "Amara K.", what: "Follow-up", time: "10:30", status: "Confirmed" },
  { who: "Leo M.", what: "Desk review", time: "13:00", status: "Form pending" },
];
const PILL: Record<string, string> = {
  "Checked in": "bg-sea/12 text-sea",
  Confirmed: "bg-sail/12 text-sail",
  "Form pending": "bg-lamp/30 text-ink",
};

const CHART_H = 150;
const CHART_MAX = 30;

function Dashboard() {
  return (
    <Canvas w={1000} h={540} crop={1.5} label="Sample clinic portal: navigation, three headline figures, appointments by day and today's list with statuses.">
      <div className={`absolute inset-0 flex overflow-hidden rounded-[18px] bg-paper-2 text-ink ${RING} ${SHADOW}`}>
        <aside className="flex w-[200px] shrink-0 flex-col bg-void p-5 text-fg">
          <span className="flex items-center gap-2.5 font-display text-[19px]">
            <Lark size={24} bg="bg-sail" fg="text-fg" /> Larkfield
          </span>
          <ul className="mt-10 space-y-1 font-ui text-[12.5px]">
            {NAV.map((n, k) => (
              <li key={n} className={`flex items-center gap-2.5 rounded-[10px] px-3 py-2.5 ${k === 0 ? "bg-sail font-semibold text-fg" : "text-fg/65"}`}>
                {n}
                {n === "Messages" && <span className="ml-auto rounded-full bg-lamp px-1.5 text-[10px] font-semibold text-ink tabular-nums">2</span>}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-full bg-lamp font-ui text-[10px] font-semibold text-ink">NR</span>
            <span className="font-ui text-[11.5px] leading-tight">
              Nadia Reyes
              <span className="block text-[10px] text-fg/55">Admin</span>
            </span>
          </div>
        </aside>

        <div className="min-w-0 flex-1 p-7">
          <div className="flex items-center gap-3">
            <p className="font-display text-[30px] leading-none">Overview</p>
            <SampleTag className="ml-auto">Sample data</SampleTag>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            {KPIS.map((k) => (
              <div key={k.label} className="rounded-[14px] bg-fg p-4">
                <p className={`${MONO} text-[9px] text-ink/60`}>{k.label}</p>
                <p className="mt-3 font-display text-[36px] leading-none tabular-nums">{k.value}</p>
                <p className="mt-2 font-ui text-[10.5px] text-sail">{k.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-3 grid grid-cols-[1fr_300px] gap-3">
            <div className="rounded-[14px] bg-fg p-5">
              <p className={`${MONO} text-[9px] text-ink/60`}>Appointments by day</p>
              <div className="relative mt-6 flex items-end justify-between px-1" style={{ height: CHART_H }}>
                {DAYS.map(([d, v]) => (
                  <div key={d} className="flex w-[30px] flex-col items-center gap-2">
                    <span className="font-ui text-[9.5px] font-semibold text-ink/70 tabular-nums">{v}</span>
                    <span className={`w-full rounded-[6px] ${d === "Thu" ? "bg-sail" : "bg-sail/25"}`} style={{ height: (v / CHART_MAX) * (CHART_H - 40) }} />
                  </div>
                ))}
              </div>
              <div className="mt-2 flex justify-between px-1 font-mono text-[9px] text-ink/55">
                {DAYS.map(([d]) => <span key={d} className="w-[30px] text-center">{d}</span>)}
              </div>
            </div>

            <div className="rounded-[14px] bg-fg p-5">
              <p className={`${MONO} text-[9px] text-ink/60`}>Today</p>
              <ul className="mt-3 divide-y divide-ink/8">
                {ROWS.map((r) => (
                  <li key={r.who} className="flex items-center justify-between gap-2 py-3">
                    <span>
                      <span className="block font-ui text-[12px] font-semibold">{r.who}</span>
                      <span className="block font-mono text-[9.5px] text-ink/55 tabular-nums">{r.time} · {r.what}</span>
                    </span>
                    <span className={`rounded-full px-2.5 py-1 font-ui text-[9.5px] font-semibold ${PILL[r.status]}`}>{r.status}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Canvas>
  );
}

/* Automation & AI (lamp): the enquiry workflow. ------------------------- */

const NODE = `absolute h-[140px] w-[184px] rounded-[16px] bg-fg p-4 text-ink ${SHADOW}`;
/** Connectors run from the right middle of one node to the left middle of the next. */
const LINKS = ["M204 260C242 260 242 112 280 112", "M464 112C502 112 502 376 540 376", "M724 376C762 376 762 224 800 224"];

function NodeHead({ step, title, tone = "bg-lamp text-ink" }: { step: string; title: string; tone?: string }) {
  return (
    <>
      <p className="flex items-center gap-2">
        <span className={`grid h-6 min-w-6 place-items-center rounded-full px-1.5 font-mono text-[9px] ${tone}`}>{step}</span>
      </p>
      <p className="mt-3 font-display text-[21px] leading-none">{title}</p>
    </>
  );
}

function Workflow() {
  return (
    <Canvas w={1000} h={500} label="Sample automation: a website enquiry goes to an AI triage step that tags it and drafts a reply, then a CRM lead is created and the front desk is told.">
      <div className={`absolute inset-0 rounded-[20px] bg-void bg-[radial-gradient(rgb(241_236_229/0.12)_1px,transparent_1.2px)] [background-size:22px_22px] ${SHADOW}`} />

      <svg viewBox="0 0 1000 500" className="absolute inset-0 size-full" aria-hidden="true">
        {LINKS.map((d) => (
          <path key={d} d={d} fill="none" stroke="rgb(241 236 229 / 0.35)" strokeWidth="1.5" strokeDasharray="2 6" strokeLinecap="round" />
        ))}
        {[[204, 260], [280, 112], [464, 112], [540, 376], [724, 376], [800, 224]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="4.5" fill="var(--color-void)" stroke="var(--color-lamp)" strokeWidth="1.5" />
        ))}
      </svg>
      {LINKS.map((d, k) => (
        <span key={d} className={styles.pulse} style={{ offsetPath: `path("${d}")`, "--d": `${k * 1.4}s` } as CSSProperties} />
      ))}

      <div className={`${NODE} top-[190px] left-5`}>
        <NodeHead step="01" title="New enquiry" />
        <p className="mt-3 font-ui text-[11px] leading-[1.5] text-ink/70">Jordan P. · lower back · evenings</p>
      </div>

      <div className={`${NODE} top-[42px] left-[280px]`}>
        <NodeHead step="02" title="AI triage" tone="bg-sail text-fg" />
        <p className="mt-3 flex flex-wrap gap-1 font-ui text-[9.5px] font-semibold">
          <span className="rounded-full bg-sail/12 px-2 py-0.5 text-sail">New patient</span>
          <span className="rounded-full bg-sea/12 px-2 py-0.5 text-sea">Not urgent</span>
        </p>
        <p className="mt-2 font-ui text-[10px] text-ink/60">Reply drafted</p>
      </div>

      <div className={`${NODE} top-[306px] left-[540px]`}>
        <NodeHead step="03" title="Lead in CRM" />
        <p className="mt-3 font-ui text-[11px] leading-[1.5] text-ink/70">Stage: new · Owner: front desk</p>
      </div>

      <div className={`${NODE} top-[154px] left-[800px]`}>
        <NodeHead step="04" title="Team told" tone="bg-red text-fg" />
        <p className="mt-3 rounded-[10px] bg-paper-2 p-2 font-ui text-[10px] leading-[1.45]">
          <span className="font-semibold">#front-desk</span> New enquiry, reply ready.
        </p>
      </div>

      <span className="absolute right-6 bottom-5 text-fg"><SampleTag>Sample workflow</SampleTag></span>
    </Canvas>
  );
}

/* Care & growth (void): the monthly report. ----------------------------- */

const VISITS = [42, 45, 44, 48, 47, 52, 50, 55, 58, 57, 61, 64];
const SHIPPED = ["Booking form: 9 fields to 4", "Evening slots on the homepage", "Faster hero images", "Prices rewritten plainly"];

function sparkline(w: number, h: number) {
  const lo = 40;
  const hi = 66;
  const pts = VISITS.map((v, k) => [(k / (VISITS.length - 1)) * w, h - ((v - lo) / (hi - lo)) * h] as const);
  const line = pts.map(([x, y], k) => `${k ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join("");
  return { line, area: `${line}L${w} ${h}L0 ${h}Z`, last: pts[pts.length - 1] };
}

function Report() {
  const s = sparkline(340, 96);
  return (
    <Canvas w={880} h={480} label="Sample monthly report for Larkfield: booking rate up from 2.1% to 3.4% and website visits rising over twelve weeks, in sample figures, with four improvements shipped this month.">
      <div className={`absolute inset-0 rounded-[20px] bg-fg p-9 text-ink ${SHADOW}`}>
        <div className="flex items-center justify-between border-b border-ink/10 pb-6">
          <span className="flex items-center gap-3">
            <Lark size={34} bg="bg-void" fg="text-lamp" />
            <span>
              <span className="block font-display text-[26px] leading-none">Monthly report</span>
              <span className="mt-1.5 block font-mono text-[10px] tracking-[0.12em] text-ink/60 uppercase">Larkfield · [Month]</span>
            </span>
          </span>
          <SampleTag>Sample figures</SampleTag>
        </div>

        <div className="mt-8 grid grid-cols-[360px_1fr] gap-10">
          <div>
            <p className={`${MONO} text-[9.5px] text-ink/60`}>Booking rate</p>
            <p className="mt-3 flex items-end gap-4 font-display leading-none tabular-nums">
              <span className="text-[34px] text-ink/40">2.1%</span>
              <span className="pb-1 text-[22px] text-ink/40">→</span>
              <span className="text-[64px] text-sea">3.4%</span>
            </p>
            <div className="mt-8 rounded-[14px] bg-paper-2 p-5">
              <p className="flex items-baseline justify-between">
                <span className={`${MONO} text-[9px] text-ink/60`}>Visits, 12 weeks</span>
                <span className="font-ui text-[11px] font-semibold text-sea">+52%</span>
              </p>
              <svg viewBox="-4 -6 348 108" width="320" height="100" className="mt-3 overflow-visible" aria-hidden="true">
                <path d={s.area} fill="rgb(7 80 86 / 0.12)" />
                <path d={s.line} fill="none" stroke="var(--color-sea)" strokeWidth="2.25" strokeLinejoin="round" strokeLinecap="round" />
                <circle cx={s.last[0]} cy={s.last[1]} r="5" fill="var(--color-lamp)" stroke="var(--color-ink)" strokeWidth="1.5" />
              </svg>
            </div>
          </div>

          <div>
            <p className={`${MONO} text-[9.5px] text-ink/60`}>Shipped this month</p>
            <ul className="mt-3 divide-y divide-ink/10">
              {SHIPPED.map((t) => (
                <li key={t} className="flex items-center gap-3 py-3.5 font-ui text-[13px]">
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-sea text-[10px] text-fg">✓</span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 rounded-[14px] bg-void p-4 font-ui text-[12px] text-fg">
              <span className={`${MONO} block text-[9px] text-lamp`}>Next month</span>
              <span className="mt-1.5 block">Test a shorter prices headline.</span>
            </p>
          </div>
        </div>
      </div>
    </Canvas>
  );
}

export const DELIVERABLE: Record<ServiceId, { Drawing: () => ReactNode; caption: string }> = {
  brand: { Drawing: BrandSheet, caption: "Sample · identity sheet for a fictional clinic" },
  websites: { Drawing: Website, caption: "Sample · homepage, desktop and phone" },
  apps: { Drawing: Dashboard, caption: "Sample · clinic portal, made-up data" },
  automation: { Drawing: Workflow, caption: "Sample · enquiry to team in one pass" },
  care: { Drawing: Report, caption: "Sample · monthly report" },
};
