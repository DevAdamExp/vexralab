// The /work page: one sample case study. Harbour Physio is fictional.
// ponytail: every string here is sample copy. Replace the whole file when real client work can be published.

/** Shown at the top of the page and under every drawn screen. */
export const SAMPLE = "Sample case study · fictional clinic, shown to illustrate how we work";

export const FOUNDER = { name: "Amina", role: "founder and lead physio" };

export const FACTS: [string, string][] = [
  ["Client", "Harbour Physio (fictional)"],
  ["Our part", "Words, website, booking and reminders"],
  ["Built", "Next.js site, online booking, WhatsApp reminders, admin view"],
  ["Timeline", "Six weeks (sample)"],
];

/** 01: the founder's diary, the night before. */
export const WORRIES: { time: string; text: string }[] = [
  { time: "11:48 PM", text: "Three missed calls during one session. Were they new patients?" },
  { time: "12:20 AM", text: "Our website still says Welcome. Welcome to what?" },
  { time: "1:05 AM", text: "I'm answering booking messages in bed again." },
  { time: "1:40 AM", text: "Two no-shows tomorrow, and I won't know until nine." },
  { time: "2:10 AM", text: "I'd be embarrassed to send anyone our link." },
];

/** 01: the numbered problems pinned on the old site. Order matches the pins in OldSite. */
export const OLD_PROBLEMS = [
  "The headline says nothing about what the clinic does.",
  "Five buttons, and none of them says Book.",
  "The phone number is the only way in.",
];

/** 02: what the Listen week turned up. */
export const FINDINGS = [
  "Most new patients called during sessions, when nobody could answer.",
  "Returning patients wanted to rebook on their phone, in under a minute.",
  "No-shows came from forgetting, not from changing their minds.",
  "Amina spent her evenings on admin she never trained for.",
];

/** 02: the interview card. `mark` is the one line the lamp lands on. */
export const NOTES: { text: string; mark?: boolean }[] = [
  { text: "phone rings in almost every session" },
  { text: "patients text at night, she replies at 11" },
  { text: "reminders = her memory + a paper diary" },
  { text: "returning patients: same slot, every week" },
  { text: "wants: fewer calls, a full diary," },
  { text: "and her evenings back", mark: true },
];

/** 03: the index of what we made. Each row anchors to its sub-chapter. */
export const BUILT: { id: string; num: string; name: string; line: string }[] = [
  { id: "booking", num: "03.1", name: "Online booking", line: "Pick a service, pick a time, done. On any phone, in under a minute." },
  { id: "reminders", num: "03.2", name: "Automatic reminders", line: "A WhatsApp or SMS the day before, with one reply to confirm or move." },
  { id: "admin", num: "03.3", name: "A simple admin view", line: "Today's patients, who confirmed, and the gaps, on one screen." },
  { id: "before-after", num: "05", name: "A new website", line: "Plain words, one clear button, and the diary one tap away." },
];

/** 03.1: the services on the first booking screen. */
export const SERVICES = [
  { name: "Sports injury assessment", mins: 45, price: "£65" },
  { name: "Follow-up treatment", mins: 30, price: "£48" },
  { name: "Sports massage", mins: 45, price: "£55" },
  { name: "Return-to-run check", mins: 60, price: "£75" },
];

export const DAYS = [
  { d: "Tue", n: 12 },
  { d: "Wed", n: 13 },
  { d: "Thu", n: 14 },
  { d: "Fri", n: 15 },
  { d: "Sat", n: 16 },
];

export const TIMES = ["08:30", "09:15", "12:00", "13:30", "17:30", "18:15"];

/** 03.2: the reminder thread. `from: "clinic"` is the automated sender. */
export const THREAD: { from: "clinic" | "patient"; text: string; time: string }[] = [
  { from: "clinic", text: "Hi Sam, a reminder of your follow-up with Amina tomorrow, Thu 14 at 17:30. Reply 1 to confirm or 2 to move it.", time: "10:00" },
  { from: "patient", text: "2", time: "10:14" },
  { from: "clinic", text: "No problem. Free times on Friday:\n1) 08:30\n2) 12:00\n3) 18:15", time: "10:14" },
  { from: "patient", text: "3", time: "10:15" },
  { from: "clinic", text: "Done. You're now booked for Fri 15 at 18:15. Your Thursday slot has gone to the waiting list.", time: "10:15" },
];

export type Status = "confirmed" | "waiting" | "moved" | "open" | "new";

/** 03.3: one day in the admin view. Names are invented. */
export const DAY: { time: string; who: string; what: string; status: Status }[] = [
  { time: "08:30", who: "Jordan K.", what: "Sports injury assessment", status: "confirmed" },
  { time: "09:15", who: "Priya S.", what: "Follow-up treatment", status: "confirmed" },
  { time: "10:00", who: "Open slot", what: "Offered to the waiting list", status: "open" },
  { time: "12:00", who: "Tom W.", what: "Return-to-run check", status: "waiting" },
  { time: "13:30", who: "Lena M.", what: "Sports massage", status: "new" },
  { time: "17:30", who: "Ade O.", what: "Follow-up treatment", status: "confirmed" },
  { time: "18:15", who: "Sam R.", what: "Follow-up treatment", status: "moved" },
];

/** 04: how the morning feels now. */
export const OUTCOMES = [
  "The phone rings for questions now, not for bookings.",
  "Patients rebook before they leave the car park.",
  "Gaps in the diary fill themselves from the waiting list.",
  "Amina closes the laptop at seven.",
];

/** 04: invented numbers that show the shape of a result. Not a real outcome. */
export const FIGURES = [
  { value: "7 in 10", label: "bookings made online, not by phone" },
  { value: "Half", label: "as many calls after clinic hours" },
  { value: "1 in 3", label: "fewer no-shows, after reminders went live" },
];

export const QUOTE = "I used to dread the phone. Now I read the diary over coffee, and it's already full.";
