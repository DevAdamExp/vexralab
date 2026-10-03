"use client";

import { useRef, useState, type FormEvent } from "react";
import { PiCheck, PiCheckCircle } from "react-icons/pi";
import { BUDGETS, EMPTY, TIMELINES, WORRIES, replyDay, validateBrief, type Brief, type BriefErrors, type BriefField } from "@/components/contact/brief";
import { EMAIL, SERVICES, STUDIO_TZ } from "@/data/vx";
import s from "./cc.module.css";

const IDS = SERVICES.map((x) => x.id);
const FIELD = "h-12 w-full rounded-lg border border-(--line) bg-white/[0.025] px-4 text-[15px] text-white placeholder:text-white/30 outline-none transition-[border-color,background-color,box-shadow] hover:border-white/25 focus:border-(--hi) focus:bg-white/[0.04] focus:shadow-[0_0_0_4px_rgb(111_211_199/0.12)]";

function Chip({ on, label, onClick }: { on: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={on}
      onClick={onClick}
      className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-[14px] transition-colors ${on ? "border-(--accent) bg-(--accent) text-white" : "border-(--line) text-white/75 hover:border-white/35 hover:text-white"}`}
    >
      {on && <PiCheck aria-hidden="true" className="size-3.5" />}
      {label}
    </button>
  );
}

/** Single-page brief: who you are, the challenge, what you need. Same validation as /api/brief. */
export function ContactForm() {
  const [b, setB] = useState<Brief>(EMPTY);
  const [errors, setErrors] = useState<BriefErrors>({});
  const [state, setState] = useState<"idle" | "sending" | "sent" | "failed">("idle");
  const form = useRef<HTMLFormElement>(null);

  const set = <K extends BriefField>(k: K, v: Brief[K]) => setB((x) => ({ ...x, [k]: v }));
  const toggle = (k: "worries" | "services", id: string) => set(k, b[k].includes(id) ? b[k].filter((x) => x !== id) : [...b[k], id]);

  const focusFirst = (e: BriefErrors) => {
    const first = (["name", "email", "company", "website", "words"] as BriefField[]).find((f) => e[f]);
    if (first) form.current?.querySelector<HTMLElement>(`#f-${first}`)?.focus();
  };

  const submit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (state === "sending") return;
    const { errors: e } = validateBrief(b, IDS);
    setErrors(e);
    if (Object.keys(e).length) return focusFirst(e);
    setState("sending");
    try {
      const nickname = (form.current?.elements.namedItem("nickname") as HTMLInputElement | null)?.value ?? "";
      const res = await fetch("/api/brief", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...b, nickname }) });
      if (res.status === 400) {
        const data = await res.json();
        setErrors(data.errors ?? {});
        setState("idle");
        return focusFirst(data.errors ?? {});
      }
      setState(res.ok ? "sent" : "failed");
    } catch {
      setState("failed");
    }
  };

  if (state === "sent") {
    return (
      <div className="flex min-h-[520px] flex-col items-start justify-center gap-5 px-6 py-16 lg:px-10" role="status">
        <PiCheckCircle aria-hidden="true" className="size-10 text-(--hi)" />
        <p className={s.h2mid}>Thanks, {b.name.split(" ")[0]}.</p>
        <p className="max-w-[44ch] text-[18px] leading-7 text-(--muted)">
          We&rsquo;ll reply by <b className="font-semibold text-white">{replyDay(new Date(), STUDIO_TZ)}</b> with a few questions and times for your free audit call.
        </p>
      </div>
    );
  }

  const err = (f: BriefField) =>
    errors[f] ? (
      <p id={`e-${f}`} className="mt-2 text-[13px] text-(--err)">
        {errors[f]}
      </p>
    ) : null;
  const aria = (f: BriefField) => ({ "aria-invalid": !!errors[f] || undefined, "aria-describedby": errors[f] ? `e-${f}` : undefined });

  return (
    <form ref={form} onSubmit={submit} noValidate className="flex flex-col">
      <fieldset className="grid gap-5 border-b border-(--line) px-6 py-10 sm:grid-cols-2 lg:px-10">
        <legend className="sr-only">About you</legend>
        <p aria-hidden="true" className={`${s.kicker} mb-6 sm:col-span-2`}>01 · About you</p>
        {(
          [
            ["name", "Full name", "text", "name"],
            ["email", "Work email", "email", "email"],
            ["company", "Company", "text", "organization"],
            ["website", "Website (optional)", "text", "url"],
          ] as const
        ).map(([f, label, type, ac]) => (
          <div key={f}>
            <label htmlFor={`f-${f}`} className="mb-2 block text-[14px] text-white/80">
              {label}
            </label>
            <input id={`f-${f}`} type={type} autoComplete={ac} value={b[f]} onChange={(e) => set(f, e.target.value)} className={FIELD} {...aria(f)} />
            {err(f)}
          </div>
        ))}
        {/* Honeypot: hidden from people, filled by bots. */}
        <input type="text" name="nickname" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0" />
      </fieldset>

      <fieldset className="border-b border-(--line) px-6 py-10 lg:px-10">
        <legend className="sr-only">The challenge</legend>
        <p aria-hidden="true" className={`${s.kicker} mb-6 sm:col-span-2`}>02 · The challenge</p>
        <div className="flex flex-wrap gap-2.5">
          {WORRIES.map((w) => (
            <Chip key={w.id} on={b.worries.includes(w.id)} label={w.label} onClick={() => toggle("worries", w.id)} />
          ))}
        </div>
        <label htmlFor="f-words" className="mt-7 mb-2 block text-[14px] text-white/80">
          In a line or two, what&rsquo;s slowing you down?
        </label>
        <textarea id="f-words" rows={4} value={b.words} onChange={(e) => set("words", e.target.value)} className={`${FIELD} h-auto py-3`} {...aria("words")} />
        {err("words")}
      </fieldset>

      <fieldset className="border-b border-(--line) px-6 py-10 lg:px-10">
        <legend className="sr-only">What you need</legend>
        <p aria-hidden="true" className={`${s.kicker} mb-6 sm:col-span-2`}>03 · What you need</p>
        <div className="flex flex-wrap gap-2.5">
          {SERVICES.map((x) => (
            <Chip key={x.id} on={b.services.includes(x.id)} label={x.name} onClick={() => toggle("services", x.id)} />
          ))}
        </div>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          <div role="radiogroup" aria-label="Timeline">
            <p className="mb-3 text-[14px] text-white/80">Timeline</p>
            <div className="flex flex-wrap gap-2.5">
              {TIMELINES.map((t) => (
                <Chip key={t.id} on={b.timeline === t.id} label={t.label} onClick={() => set("timeline", b.timeline === t.id ? "" : t.id)} />
              ))}
            </div>
          </div>
          <div role="radiogroup" aria-label="Budget">
            <p className="mb-3 text-[14px] text-white/80">Budget</p>
            <div className="flex flex-wrap gap-2.5">
              {BUDGETS.map((x) => (
                <Chip key={x.id} on={b.budget === x.id} label={x.label} onClick={() => set("budget", b.budget === x.id ? "" : x.id)} />
              ))}
            </div>
          </div>
        </div>
      </fieldset>

      <div className="flex flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p className="text-[13px] text-white/50">No mailing list. NDA on request.</p>
        <button type="submit" disabled={state === "sending"} data-magnet className={`${s.btnAccent} disabled:opacity-60`}>
          {state === "sending" ? "Sending…" : "Send and book my audit"}
        </button>
      </div>
      {state === "failed" && (
        <p role="alert" className="px-6 pb-8 text-[14px] text-(--err) lg:px-10">
          That didn&rsquo;t go through. Your answers are still here; try again, or email {EMAIL}.
        </p>
      )}
    </form>
  );
}
