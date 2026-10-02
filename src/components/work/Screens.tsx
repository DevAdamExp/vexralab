// Product screens for the sample case study, drawn in code. Sample data only.
import { FaWhatsapp } from "react-icons/fa6";
import { Seen, i } from "@/components/ui/Seen";
import { DAY, DAYS, SERVICES, THREAD, TIMES, type Status } from "@/data/work";
import { Phone } from "./Frames";

const BTN = "absolute inset-x-[1.4em] bottom-[1.6em] rounded-full bg-sail py-[0.85em] text-center text-[0.95em] font-semibold text-white";

function Step({ n, title }: { n: number; title: string }) {
  return (
    <div className="px-[1.4em] pt-[1.4em]">
      <div className="flex items-center justify-between text-[0.75em] text-ink-muted">
        <span>{n > 1 ? "← Back" : "Harbour Physio"}</span>
        <span>Step {n} of 3</span>
      </div>
      <div className="mt-[0.7em] grid grid-cols-3 gap-[0.3em]">
        {[1, 2, 3].map((k) => (
          <span key={k} className={`h-[0.22em] rounded-full ${k <= n ? "bg-sail" : "bg-ink/10"}`} />
        ))}
      </div>
      <span className="mt-[1em] block font-display text-[1.7em] leading-[1.05]">{title}</span>
    </div>
  );
}

/** 03.1: pick a service → pick a time → confirmed. */
export function BookingFlow() {
  return (
    <Seen as="ol" aria-label="The booking flow, in three steps" className="grid gap-12 sm:grid-cols-3 sm:gap-5 lg:gap-8">
      <li className="rise mx-auto w-full max-w-[290px] lg:max-w-[330px]" style={i(0)}>
        <Phone>
          <Step n={1} title="What do you need?" />
          <div className="mt-[1em] flex flex-col gap-[0.55em] px-[1.4em]">
            {SERVICES.map((s, k) => (
              <div key={s.name} className={`flex items-center gap-[0.8em] rounded-[0.8em] border-[0.1em] px-[0.9em] py-[0.75em] ${k === 1 ? "border-sail bg-sail/6" : "border-ink/12 bg-white"}`}>
                <span className={`grid size-[1em] shrink-0 place-items-center rounded-full border-[0.12em] ${k === 1 ? "border-sail" : "border-ink/25"}`}>
                  {k === 1 && <span className="size-[0.5em] rounded-full bg-sail" />}
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.85em] leading-tight font-semibold">{s.name}</span>
                  <span className="block text-[0.72em] text-ink-muted">
                    {s.mins} min · {s.price}
                  </span>
                </span>
              </div>
            ))}
          </div>
          <span className={BTN}>Choose a time</span>
        </Phone>
        <StepCaption n={1}>Pick a service. Prices up front.</StepCaption>
      </li>
      <li className="rise mx-auto w-full max-w-[290px] lg:max-w-[330px]" style={i(1)}>
        <Phone>
          <Step n={2} title="When suits you?" />
          <div className="mt-[1em] grid grid-cols-5 gap-[0.35em] px-[1.4em]">
            {DAYS.map((d) => (
              <span key={d.n} className={`rounded-[0.7em] py-[0.5em] text-center ${d.n === 14 ? "bg-sail text-white" : "bg-white text-ink"}`}>
                <span className="block text-[0.62em] opacity-75">{d.d}</span>
                <span className="block text-[0.95em] font-semibold">{d.n}</span>
              </span>
            ))}
          </div>
          <span className="mt-[1.1em] block px-[1.4em] text-[0.75em] font-semibold text-ink-muted">Thursday 14 Nov · with Amina</span>
          <div className="mt-[0.6em] grid grid-cols-2 gap-[0.45em] px-[1.4em]">
            {TIMES.map((t) => {
              const taken = t === "12:00" || t === "13:30";
              const picked = t === "17:30";
              return (
                <span
                  key={t}
                  className={`rounded-[0.7em] border-[0.1em] py-[0.6em] text-center text-[0.9em] font-semibold ${picked ? "border-sail bg-sail text-white" : taken ? "border-transparent bg-ink/5 text-ink/35 line-through" : "border-ink/12 bg-white"}`}
                >
                  {t}
                </span>
              );
            })}
          </div>
          <span className={BTN}>Continue</span>
        </Phone>
        <StepCaption n={2}>Pick a time. Only real free slots.</StepCaption>
      </li>
      <li className="rise mx-auto w-full max-w-[290px] lg:max-w-[330px]" style={i(2)}>
        <Phone>
          <div className="flex flex-col items-center px-[1.4em] pt-[3.5em] text-center">
            <span className="grid size-[3.6em] place-items-center rounded-full bg-lamp text-[1em] text-ink">
              <svg viewBox="0 0 24 24" className="size-[1.6em]">
                <path d="M5 12.5l4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="mt-[0.9em] block font-display text-[1.9em] leading-none">You&rsquo;re booked.</span>
            <span className="mt-[0.3em] block text-[0.8em] text-ink-muted">A confirmation is on its way.</span>
          </div>
          <div className="mx-[1.4em] mt-[1.4em] rounded-[0.9em] bg-white p-[1.1em] text-[0.82em] leading-[1.5]">
            <span className="block font-semibold">Follow-up treatment</span>
            <span className="block">Thu 14 Nov · 17:30</span>
            <span className="block text-ink-muted">30 min with Amina</span>
            <span className="mt-[0.6em] block border-t border-ink/10 pt-[0.6em] text-ink-muted">Harbour Physio, Quay Lane</span>
          </div>
          <span className="mx-[1.4em] mt-[1em] flex items-center gap-[0.6em] rounded-[0.9em] bg-sea/10 p-[0.9em] text-[0.75em] leading-[1.45] text-sea">
            <FaWhatsapp className="size-[1.5em] shrink-0" />
            Reminder on WhatsApp the day before.
          </span>
          <span className="absolute inset-x-[1.4em] bottom-[1.6em] rounded-full border-[0.1em] border-ink/20 py-[0.85em] text-center text-[0.95em] font-semibold">Add to calendar</span>
        </Phone>
        <StepCaption n={3}>Booked. Reminder scheduled.</StepCaption>
      </li>
    </Seen>
  );
}

function StepCaption({ n, children }: { n: number; children: string }) {
  return (
    <p className="mt-6 flex items-baseline gap-3 text-[16px] leading-snug text-ink">
      <span className="label text-red">0{n}</span>
      {children}
    </p>
  );
}

/** 03.2: the reminder thread, as the patient sees it in WhatsApp. */
export function ReminderThread() {
  return (
    <Phone>
      <div className="mt-[0.5em] flex items-center gap-[0.7em] bg-sea px-[1.1em] py-[0.8em] text-fg">
        <span className="text-[1.1em]">‹</span>
        <span className="grid size-[2.3em] place-items-center rounded-full bg-lamp text-[0.8em] font-bold text-ink">HP</span>
        <span className="min-w-0 flex-1 leading-tight">
          <span className="block text-[0.9em] font-semibold">Harbour Physio</span>
          <span className="block text-[0.66em] opacity-80">Business account</span>
        </span>
        <FaWhatsapp className="size-[1.4em]" />
      </div>
      <div className="flex h-full flex-col gap-[0.55em] bg-paper-2 px-[1em] pt-[1em]">
        <span className="mx-auto rounded-full bg-white/80 px-[0.8em] py-[0.25em] text-[0.62em] font-semibold text-ink-muted">Wednesday</span>
        {THREAD.map((m, k) => (
          <span
            key={k}
            className={`max-w-[82%] rounded-[0.9em] px-[0.85em] py-[0.55em] text-[0.8em] leading-[1.4] whitespace-pre-line shadow-[0_1px_0_rgb(0_0_0/0.08)] ${m.from === "clinic" ? "self-start rounded-tl-[0.2em] bg-white" : "self-end rounded-tr-[0.2em] bg-[#cfe3df]"}`}
          >
            {m.text}
            <span className="ml-[0.6em] inline-block text-[0.72em] text-ink-muted">
              {m.time}
              {m.from === "patient" && <span className="ml-[0.3em] text-sail">✓✓</span>}
            </span>
          </span>
        ))}
      </div>
    </Phone>
  );
}

const PILL: Record<Status, [string, string]> = {
  confirmed: ["Confirmed", "bg-sea/12 text-sea"],
  waiting: ["Waiting reply", "bg-lamp-soft text-ink"],
  moved: ["Moved by patient", "bg-sail/10 text-sail"],
  new: ["Booked online", "bg-lamp text-ink"],
  open: ["Open slot", "border border-dashed border-red/60 text-red"],
};

/** 03.3: the clinic's day. Real, fluid markup: columns fold away on narrow screens instead of shrinking. */
export function AdminDay() {
  const count = (s: Status) => DAY.filter((d) => d.status === s).length;
  return (
    <div className="@container overflow-hidden rounded-[18px] bg-[#f7f5f1] font-ui text-ink shadow-[0_40px_90px_-40px_rgb(0_0_0/0.45)] ring-1 ring-black/10">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-ink/10 px-4 py-3 @2xl:px-6">
        <span className="flex items-center gap-2 text-[14px] font-semibold">
          <span className="size-3 rounded-full bg-sail" /> Harbour Physio · Diary 🗓️
        </span>
        <span className="flex items-center gap-2 text-[13px]">
          <span className="grid size-7 place-items-center rounded-full border border-ink/15">‹</span>
          <span className="font-display text-[17px]">Thursday 14 November</span>
          <span className="grid size-7 place-items-center rounded-full border border-ink/15">›</span>
        </span>
      </div>
      <div className="flex flex-wrap gap-2 px-4 pt-4 text-[12px] @2xl:px-6">
        <span className="rounded-full bg-ink px-3 py-1 text-fg">{DAY.length - count("open")} patients</span>
        <span className="rounded-full bg-sea/12 px-3 py-1 text-sea">{count("confirmed")} confirmed</span>
        <span className="rounded-full bg-lamp-soft px-3 py-1">{count("waiting")} waiting reply</span>
        <span className="rounded-full border border-dashed border-red/60 px-3 py-1 text-red">{count("open")} open slot</span>
      </div>
      <div className="mt-4 hidden grid-cols-[4rem_1fr_1.2fr_9rem_5.5rem] gap-4 border-b border-ink/10 px-6 pb-2 text-[11px] font-semibold tracking-[0.12em] text-ink-muted uppercase @2xl:grid">
        <span>Time</span>
        <span>Patient</span>
        <span>Treatment</span>
        <span>Status</span>
        <span />
      </div>
      <ul className="px-4 pb-3 @2xl:px-6">
        {DAY.map((d) => {
          const [label, cls] = PILL[d.status];
          return (
            <li key={d.time} className="grid grid-cols-[3.25rem_1fr_auto] items-center gap-3 border-b border-ink/8 py-3 text-[14px] last:border-0 @2xl:grid-cols-[4rem_1fr_1.2fr_9rem_5.5rem] @2xl:gap-4">
              <span className="font-mono text-[13px] tabular-nums text-ink-muted">{d.time}</span>
              <span className="min-w-0">
                <span className={`block truncate font-semibold ${d.status === "open" ? "font-normal text-ink-muted italic" : ""}`}>{d.who}</span>
                <span className="block truncate text-[12px] text-ink-muted @2xl:hidden">{d.what}</span>
              </span>
              <span className="hidden truncate text-ink-muted @2xl:block">{d.what}</span>
              <span className={`justify-self-start rounded-full px-2.5 py-1 text-[11.5px] font-semibold whitespace-nowrap ${cls}`}>{label}</span>
              <span className="hidden text-right text-[13px] font-semibold text-sail @2xl:block">{d.status === "open" ? "Fill" : "Message"}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
