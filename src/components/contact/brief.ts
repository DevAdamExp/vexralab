// The brief: options, validation and the reply day. Shared by the letter (client) and
// /api/brief (server), so both sides check the same rules. No imports, so it runs in plain node.

export const WORRIES = [
  { id: "understood", label: "People don't get what we do" },
  { id: "template", label: "Our site looks like a template" },
  { id: "enquiries", label: "Enquiries don't come in" },
  { id: "manual", label: "We do everything by hand" },
  { id: "agency", label: "Our agency went quiet" },
  { id: "else", label: "Something else" },
] as const;

export const TIMELINES = [
  { id: "asap", label: "ASAP", line: "We'd like to start as soon as we can." },
  { id: "soon", label: "1–3 months", line: "We'd like to start in the next one to three months." },
  { id: "exploring", label: "Just exploring", line: "For now, we're just exploring." },
] as const;

// ponytail: placeholder ranges until the studio sets its real price bands.
export const BUDGETS = [
  { id: "small", label: "[Under $X]" },
  { id: "mid", label: "[$X to $Y]" },
  { id: "large", label: "[$Y and up]" },
  { id: "unsure", label: "Not sure yet" },
] as const;

export const LIMITS = { name: 80, email: 254, company: 120, website: 200, words: 3000 } as const;

export type Brief = {
  name: string;
  email: string;
  company: string;
  website: string;
  worries: string[];
  words: string;
  services: string[];
  timeline: string;
  budget: string;
};

export type BriefField = keyof Brief;
export type BriefErrors = Partial<Record<BriefField, string>>;

export const EMPTY: Brief = { name: "", email: "", company: "", website: "", worries: [], words: "", services: [], timeline: "", budget: "" };

/** Which step of the letter each field lives on (0-based). */
export const STEP_OF: Record<BriefField, number> = { name: 0, email: 0, company: 0, website: 0, worries: 1, words: 1, services: 2, timeline: 2, budget: 2 };

const EMAIL_SHAPE = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)+$/;

function emailProblem(email: string): string | undefined {
  if (!email) return "Add your email so we can write back.";
  if (email.length > LIMITS.email) return "That email is too long. Check it and try again.";
  if (!email.includes("@")) return "The @ is missing, as in sam@harbour.com.";
  if (!EMAIL_SHAPE.test(email)) return "That email looks incomplete, as in sam@harbour.com.";
  return undefined;
}

const tooLong = (max: number) => `Keep this under ${max} characters.`;
const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max + 1) : "");
const ids = (v: unknown, allowed: readonly string[]) =>
  Array.isArray(v) ? [...new Set(v.filter((x): x is string => typeof x === "string" && allowed.includes(x)))] : [];
const one = (v: unknown, allowed: readonly string[]) => (typeof v === "string" && allowed.includes(v) ? v : "");

/**
 * Cleans untrusted input into a Brief and says what needs fixing. Each message tells the
 * founder how to fix it. `serviceIds` comes from SERVICES (passed in to keep this file import-free).
 */
export function validateBrief(raw: unknown, serviceIds: readonly string[]): { brief: Brief; errors: BriefErrors } {
  const r = (raw && typeof raw === "object" ? raw : {}) as Record<string, unknown>;
  const brief: Brief = {
    name: str(r.name, LIMITS.name),
    email: str(r.email, LIMITS.email),
    company: str(r.company, LIMITS.company),
    website: str(r.website, LIMITS.website),
    worries: ids(r.worries, WORRIES.map((w) => w.id)),
    words: str(r.words, LIMITS.words),
    services: ids(r.services, serviceIds),
    timeline: one(r.timeline, TIMELINES.map((t) => t.id)),
    budget: one(r.budget, BUDGETS.map((b) => b.id)),
  };
  const errors: BriefErrors = {};
  if (!brief.name) errors.name = "Add your name so we know who we're writing to.";
  else if (brief.name.length > LIMITS.name) errors.name = tooLong(LIMITS.name);
  const email = emailProblem(brief.email);
  if (email) errors.email = email;
  if (!brief.company) errors.company = "Add your company or project. A working title is fine.";
  else if (brief.company.length > LIMITS.company) errors.company = tooLong(LIMITS.company);
  if (brief.website.length > LIMITS.website) errors.website = tooLong(LIMITS.website);
  else if (brief.website && (/\s/.test(brief.website) || !brief.website.includes("."))) errors.website = "Check the address, as in harbour.com. Or leave it empty.";
  if (brief.words.length > LIMITS.words) errors.words = tooLong(LIMITS.words);
  else if (!brief.words && brief.worries.filter((w) => w !== "else").length === 0) errors.words = "Pick a thought above, or write a line here in your own words.";
  return { brief, errors };
}

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/**
 * The day we reply by: the next working day (Monday to Friday) after today in the studio's
 * timezone. Sent on Friday, Saturday or Sunday means Monday.
 * ponytail: ignores public holidays; add a holiday list here if the studio closes for them.
 */
export function replyDay(now: Date, timeZone: string): string {
  const today = DAYS.indexOf(new Intl.DateTimeFormat("en-US", { weekday: "long", timeZone }).format(now));
  return DAYS[today >= 5 || today === 0 ? 1 : today + 1];
}

/** "a", "a and b", "a, b and c". */
export const listOf = (items: string[]) => (items.length < 2 ? items.join("") : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`);
