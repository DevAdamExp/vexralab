"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { EMAIL, SERVICES, STUDIO_TZ } from "@/data/site";
import { CopyEmail } from "@/components/ui/CopyEmail";
import { Arrow, LiquidButton } from "@/components/ui/LiquidButton";
import { BUDGETS, EMPTY, LIMITS, STEP_OF, TIMELINES, WORRIES, listOf, replyDay, validateBrief, type Brief, type BriefErrors, type BriefField } from "./brief";
import styles from "./contact.module.css";

const STEPS = ["About you", "What's keeping you up?", "What you need"] as const;
const SERVICE_IDS = SERVICES.map((s) => s.id);
const FIELDS_OF = (step: number) => (Object.keys(STEP_OF) as BriefField[]).filter((f) => STEP_OF[f] === step);
const idOf = (f: BriefField) => `brief-${f}`;

type Status = "idle" | "sending" | "failed" | "sent";

const LABEL = "label text-[11px] text-ink-muted";
const INPUT =
  "block min-h-12 w-full min-w-0 rounded-none border-0 border-b-[1.5px] border-ink/35 bg-transparent px-0 py-2 text-[19px] text-ink transition-colors focus:border-ink aria-[invalid=true]:border-alarm";

/**
 * The letter under the lamp: a three-step brief on a sheet of paper, with the founder's
 * letter composing itself below as they answer. On send the sheet settles and is stamped.
 */
export function Letter() {
  const [v, setV] = useState<Brief>(EMPTY);
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState<BriefErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [day, setDay] = useState("");
  const [trap, setTrap] = useState("");
  const focusNext = useRef<string | null>(null);
  const steppedAt = useRef(0);

  // Focus moves after the DOM it points at has rendered (a step change, an error, success).
  useEffect(() => {
    const id = focusNext.current;
    if (!id) return;
    focusNext.current = null;
    document.getElementById(id)?.focus();
  });

  const set = <K extends BriefField>(field: K, value: Brief[K]) => {
    setV((prev) => ({ ...prev, [field]: value }));
    // A shown error clears as soon as the founder fixes it.
    if (errors[field] || (field === "worries" && errors.words)) {
      const fixed = validateBrief({ ...v, [field]: value }, SERVICE_IDS).errors;
      setErrors((e) => ({ ...e, [field]: fixed[field], ...(field === "worries" && { words: fixed.words }) }));
    }
  };
  const toggle = (field: "worries" | "services", id: string) => set(field, v[field].includes(id) ? v[field].filter((x) => x !== id) : [...v[field], id]);

  const show = (found: BriefErrors) => {
    setErrors(found);
    const first = (Object.keys(STEP_OF) as BriefField[]).find((f) => found[f]);
    if (!first) return false;
    setStep(STEP_OF[first]);
    focusNext.current = idOf(first);
    return true;
  };

  const go = (to: number) => {
    setStep(to);
    steppedAt.current = performance.now();
    focusNext.current = "brief-step-title";
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const { errors: found } = validateBrief(v, SERVICE_IDS);
    if (step < 2) {
      const here = Object.fromEntries(FIELDS_OF(step).filter((f) => found[f]).map((f) => [f, found[f]]));
      if (!show(here)) go(step + 1);
      return;
    }
    // A double click on Next must not land on Send and post the letter unread.
    if (performance.now() - steppedAt.current < 600 || show(found)) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/brief", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...v, nickname: trap }) });
      if (res.status === 400) {
        const body = (await res.json().catch(() => ({}))) as { errors?: BriefErrors };
        if (body.errors && show(body.errors)) return setStatus("idle");
      }
      if (!res.ok) throw new Error(String(res.status));
      setDay(replyDay(new Date(), STUDIO_TZ));
      setStatus("sent");
      focusNext.current = "brief-sent-title";
    } catch {
      setStatus("failed");
    }
  };

  const sent = status === "sent";
  const err = (f: BriefField) => (errors[f] ? { "aria-invalid": true as const, "aria-describedby": `${idOf(f)}-error` } : {});

  return (
    <div className="relative">
      <div className={styles.sheet} data-sent={sent || undefined}>
        <div className="p-5 sm:p-8 lg:p-10">
          {sent ? (
            <div className={styles.settle}>
              <p className={LABEL}>Sent</p>
              <h2 id="brief-sent-title" tabIndex={-1} className="mt-4 text-[clamp(2rem,3.4vw,2.75rem)] font-semibold leading-[1.02] tracking-[-0.025em] focus:outline-none">
                Thank you, {v.name.trim().split(/\s+/)[0]}.
              </h2>
              <p className="mt-4 max-w-[46ch] text-[17px] leading-relaxed text-ink-muted">
                Your letter is on our desk. We&rsquo;ll reply by <strong className="font-semibold text-ink">{day}</strong> to <span className="break-all text-ink">{v.email}</span>, with honest next steps.
              </p>
            </div>
          ) : (
            <form noValidate onSubmit={onSubmit} aria-labelledby="brief-step-title">
              <Progress step={step} />

              <h2 id="brief-step-title" tabIndex={-1} className="mt-7 text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.04] tracking-[-0.025em] focus:outline-none">
                {STEPS[step]}
              </h2>

              {/* Hidden from people; bots fill it in. */}
              <div aria-hidden="true" className="absolute -left-[9999px] size-px overflow-hidden">
                <label htmlFor="brief-nickname">Leave this empty</label>
                <input id="brief-nickname" name="nickname" tabIndex={-1} autoComplete="off" value={trap} onChange={(e) => setTrap(e.target.value)} />
              </div>

              <div className="mt-8 flex flex-col gap-7">
                {step === 0 && (
                  <>
                    <div className="grid gap-7 sm:grid-cols-2 sm:gap-x-8">
                      <Field f="name" label="Your name" error={errors.name}>
                        <input id={idOf("name")} name="name" autoComplete="name" maxLength={LIMITS.name} value={v.name} onChange={(e) => set("name", e.target.value)} className={INPUT} {...err("name")} />
                      </Field>
                      <Field f="email" label="Email" error={errors.email}>
                        <input id={idOf("email")} name="email" type="email" inputMode="email" autoComplete="email" spellCheck={false} maxLength={LIMITS.email} value={v.email} onChange={(e) => set("email", e.target.value)} className={INPUT} {...err("email")} />
                      </Field>
                    </div>
                    <div className="grid gap-7 sm:grid-cols-2 sm:gap-x-8">
                      <Field f="company" label="Company or project" error={errors.company}>
                        <input id={idOf("company")} name="company" autoComplete="organization" maxLength={LIMITS.company} value={v.company} onChange={(e) => set("company", e.target.value)} className={INPUT} {...err("company")} />
                      </Field>
                      <Field f="website" label="Website" optional error={errors.website}>
                        <input id={idOf("website")} name="website" inputMode="url" autoComplete="url" spellCheck={false} maxLength={LIMITS.website} value={v.website} onChange={(e) => set("website", e.target.value)} className={INPUT} {...err("website")} />
                      </Field>
                    </div>
                  </>
                )}

                {step === 1 && (
                  <>
                    <Group legend="Lately I keep thinking… (pick any)">
                        {WORRIES.map((w) => (
                          <Chip key={w.id} type="checkbox" name="worries" id={`brief-worry-${w.id}`} checked={v.worries.includes(w.id)} onChange={() => toggle("worries", w.id)} voice>
                            {w.label}
                          </Chip>
                        ))}
                    </Group>
                    <Field f="words" label="In your own words" optional={v.worries.some((w) => w !== "else")} error={errors.words}>
                      <textarea
                        id={idOf("words")}
                        name="words"
                        rows={4}
                        maxLength={LIMITS.words}
                        value={v.words}
                        onChange={(e) => set("words", e.target.value)}
                        placeholder="The thing you'd only say to a friend…"
                        className={`${INPUT} voice resize-y text-[22px] leading-[1.45] placeholder:text-ink-muted`}
                        {...err("words")}
                      />
                    </Field>
                  </>
                )}

                {step === 2 && (
                  <>
                    <Group legend="Where could we help? (pick any)">
                      {SERVICES.map((s) => (
                        <Chip key={s.id} type="checkbox" name="services" id={`brief-service-${s.id}`} checked={v.services.includes(s.id)} onChange={() => toggle("services", s.id)}>
                          {s.name}
                        </Chip>
                      ))}
                    </Group>
                    <Group legend="When would you like to start?">
                      {TIMELINES.map((t) => (
                        <Chip key={t.id} type="radio" name="timeline" id={`brief-timeline-${t.id}`} checked={v.timeline === t.id} onChange={() => set("timeline", t.id)}>
                          {t.label}
                        </Chip>
                      ))}
                    </Group>
                    <Group legend="Rough budget">
                      {BUDGETS.map((b) => (
                        <Chip key={b.id} type="radio" name="budget" id={`brief-budget-${b.id}`} checked={v.budget === b.id} onChange={() => set("budget", b.id)}>
                          {b.label}
                        </Chip>
                      ))}
                    </Group>
                  </>
                )}
              </div>

              {status === "failed" && (
                <div role="alert" className="mt-8 border-l-2 border-alarm pl-4 text-[15px] leading-relaxed">
                  <p>That didn&rsquo;t reach us. Your letter is still here, so you can send it again, or write to us directly.</p>
                  <div className="mt-2">
                    <CopyEmail email={EMAIL} tone="paper" />
                  </div>
                </div>
              )}

              <div className="mt-9 flex flex-wrap items-center justify-between gap-4 border-t border-ink/12 pt-6">
                {step > 0 ? (
                  <button type="button" onClick={() => go(step - 1)} className="inline-flex min-h-11 items-center gap-2 rounded-full px-1 text-[15px] font-medium text-ink-muted transition-colors hover:text-ink">
                    <span aria-hidden="true">&larr;</span> Back
                  </button>
                ) : (
                  <span className="text-[14px] text-ink-muted">Takes about two minutes.</span>
                )}
                <LiquidButton as="button" type="submit" variant="ink" disabled={status === "sending"} className="ml-auto">
                  {step < 2 ? (
                    <>
                      Next <Arrow />
                    </>
                  ) : status === "sending" ? (
                    "Sending…"
                  ) : (
                    <>
                      Send the letter <Arrow />
                    </>
                  )}
                </LiquidButton>
              </div>
              <p role="status" className="sr-only">
                {status === "sending" ? "Sending your letter." : ""}
              </p>
            </form>
          )}
        </div>

        <Preview v={v} sent={sent} day={day} />
      </div>
    </div>
  );
}

function Progress({ step }: { step: number }) {
  return (
    <div>
      <p className={LABEL}>
        Step {step + 1} of {STEPS.length}
      </p>
      <ol className="mt-3 grid grid-cols-3 gap-2" aria-label="Progress">
        {STEPS.map((s, k) => (
          <li key={s} aria-current={k === step ? "step" : undefined} className="min-w-0">
            <span aria-hidden="true" className="block h-1 overflow-hidden rounded-full bg-ink/12">
              <span className={`block h-full origin-left rounded-full bg-ink transition-transform duration-700 ease-water ${k <= step ? "scale-x-100" : "scale-x-0"}`} />
            </span>
            <span className={`mt-2 hidden truncate text-[13px] sm:block ${k === step ? "text-ink" : "text-ink-muted"}`}>
              {s}
              {k < step && <span className="sr-only"> (done)</span>}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function Field({ f, label, optional, error, children }: { f: BriefField; label: string; optional?: boolean; error?: string; children: ReactNode }) {
  return (
    <div className="min-w-0">
      <label htmlFor={idOf(f)} className={`${LABEL} flex justify-between gap-3`}>
        {label}
        {optional && <span className="tracking-[0.12em]">Optional</span>}
      </label>
      <div className="mt-1">{children}</div>
      {error && (
        <p id={`${idOf(f)}-error`} className="mt-2 flex gap-2 text-[14px] leading-snug text-alarm">
          <span aria-hidden="true">&times;</span>
          {error}
        </p>
      )}
    </div>
  );
}

function Group({ legend, children }: { legend: string; children: ReactNode }) {
  return (
    <fieldset className="min-w-0">
      <legend className={LABEL}>{legend}</legend>
      <div className="mt-4 flex flex-wrap gap-2.5">{children}</div>
    </fieldset>
  );
}

/** A choice written on a slip: the native input stays (keyboard, screen readers), the slip shows it. */
function Chip({ type, name, id, checked, onChange, voice, children }: { type: "checkbox" | "radio"; name: string; id: string; checked: boolean; onChange: () => void; voice?: boolean; children: ReactNode }) {
  return (
    <label htmlFor={id} className="relative">
      <input id={id} type={type} name={name} checked={checked} onChange={onChange} className="peer sr-only" />
      <span
        className={`flex min-h-11 cursor-pointer items-center gap-2 rounded-full border-[1.5px] px-4 py-1.5 transition-colors peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-sea ${
          voice ? "voice text-[19px]" : "text-[15px] font-medium"
        } ${checked ? "border-ink bg-ink text-fg" : "border-ink/25 text-ink hover:border-ink"}`}
      >
        <span aria-hidden="true" className={`grid size-4 shrink-0 place-items-center text-[11px] not-italic ${type === "radio" ? "rounded-full" : "rounded-[3px]"} border ${checked ? "border-lamp bg-lamp text-ink" : "border-current/40"}`}>
          {checked ? "✓" : ""}
        </span>
        {children}
      </span>
    </label>
  );
}

const Blank = ({ children }: { children: string }) => <span className="text-ink-muted not-italic">[{children}]</span>;
const lower = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

/** The founder's letter, composed from their answers as they write. */
function Preview({ v, sent, day }: { v: Brief; sent: boolean; day: string }) {
  const name = v.name.trim();
  const worries = WORRIES.filter((w) => w.id !== "else" && v.worries.includes(w.id)).map((w) => lower(w.label));
  const services = SERVICES.filter((s) => v.services.includes(s.id)).map((s) => lower(s.name));
  const timeline = TIMELINES.find((t) => t.id === v.timeline);
  const budget = BUDGETS.find((b) => b.id === v.budget);
  const words = v.words.trim();

  return (
    <section aria-labelledby="letter-title" className="relative border-t border-dashed border-ink/20 px-5 pt-6 pb-8 sm:px-8 lg:px-10 lg:pb-10">
      <h3 id="letter-title" className={LABEL}>
        Your letter
      </h3>
      <div className={`${styles.ruled} voice mt-3 pl-4 text-[20px] text-ink sm:pl-6 sm:text-[22px]`}>
        <p>Hi VexraLab,</p>
        <p>
          I&rsquo;m {name || <Blank>your name</Blank>} from {v.company.trim() || <Blank>your company</Blank>}.{" "}
          {worries.length ? <>Lately I keep thinking: {listOf(worries)}.</> : !words && <>Lately I keep thinking about <Blank>what keeps you up</Blank>.</>}
        </p>
        {words && <p className="whitespace-pre-line break-words">{words}</p>}
        {(services.length > 0 || timeline || budget) && (
          <p>
            {services.length > 0 && <>I think we need help with {listOf(services)}. </>}
            {timeline && <>{timeline.line} </>}
            {budget && (budget.id === "unsure" ? "We're not sure on budget yet." : <>Our budget is around {budget.label}.</>)}
          </p>
        )}
        {v.website.trim() && <p className="break-all">You can see us at {v.website.trim()}.</p>}
        <p>
          Thanks,
          <br />
          {name || <Blank>your name</Blank>}
        </p>
      </div>

      {sent && (
        <div className="pointer-events-none absolute right-5 bottom-8 sm:right-10" aria-hidden="true">
          <div className={`${styles.stamp} flex flex-col items-center rounded-[4px] border-[3px] border-double border-ink bg-lamp px-4 py-2.5 text-ink shadow-[0_2px_0_rgb(21_20_25/0.15)]`}>
            <span className="text-[26px] leading-none font-extrabold tracking-[0.08em] uppercase">Received</span>
            <span className="label mt-1.5 text-[10px] tracking-[0.16em]">Reply by {day}</span>
          </div>
        </div>
      )}
    </section>
  );
}
