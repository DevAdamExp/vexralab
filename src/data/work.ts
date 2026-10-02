// The /work page: one sample case study. Harbour Physio is fictional.
// ponytail: every string here is sample copy. Replace the whole file when real client work can be published.

/** Shown at the top of the page and under every drawn screen. */
export const SAMPLE = "Sample case study · fictional clinic";

export const FOUNDER = { name: "Amina", role: "founder and lead physio" };

export const FACTS: [string, string, string][] = [
  ["🏥", "Client", "Harbour Physio (fictional)"],
  ["🧩", "Our part", "Words, site, booking, reminders"],
  ["🛠️", "Built with", "Next.js · WhatsApp"],
  ["⏱️", "Timeline", "Six weeks (sample)"],
];

/** 01: the founder's diary, the night before. */
export const WORRIES: { time: string; text: string }[] = [
  { time: "11:48 PM", text: "Three missed calls today. New patients?" },
  { time: "1:05 AM", text: "Answering booking messages in bed. Again." },
  { time: "2:10 AM", text: "I'd be embarrassed to send our link." },
];

/** 01: the numbered problems pinned on the old site. Order matches the pins in OldSite. */
export const OLD_PROBLEMS = ["“Welcome” says nothing.", "Five buttons. None says Book.", "The phone is the only way in."];

/** 02: what the Listen week turned up. */
export const FINDINGS: [string, string][] = [
  ["📞", "New patients call mid-session."],
  ["📱", "Regulars want to rebook on their phone."],
  ["🫣", "No-shows forget. They don't cancel."],
];

/** 03: the index of what we made. Each row anchors to its sub-chapter. */
export const BUILT: { id: string; num: string; emoji: string; name: string; line: string }[] = [
  { id: "booking", num: "03.1", emoji: "📅", name: "Online booking", line: "Booked in under a minute." },
  { id: "reminders", num: "03.2", emoji: "💬", name: "Automatic reminders", line: "One reply to confirm or move." },
  { id: "admin", num: "03.3", emoji: "🗂️", name: "A simple admin view", line: "The whole day on one screen." },
  { id: "before-after", num: "05", emoji: "✨", name: "A new website", line: "One clear button." },
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
  { from: "clinic", text: "Hi Sam 👋 Your follow-up with Amina is tomorrow, Thu 14 at 17:30. Reply 1 to confirm or 2 to move it.", time: "10:00" },
  { from: "patient", text: "2", time: "10:14" },
  { from: "clinic", text: "No problem. Friday is free at:\n1) 08:30\n2) 12:00\n3) 18:15", time: "10:14" },
  { from: "patient", text: "3", time: "10:15" },
  { from: "clinic", text: "Done ✅ Fri 15 at 18:15. Your Thursday slot went to the waiting list.", time: "10:15" },
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

/** 04: invented numbers that show the shape of a result. Not a real outcome. */
export const FIGURES = [
  { emoji: "📲", value: "7 in 10", label: "bookings made online" },
  { emoji: "🔕", value: "Half", label: "the after-hours calls" },
  { emoji: "✅", value: "1 in 3", label: "fewer no-shows" },
];

export const QUOTE = "Now I read the diary over coffee. It's already full.";
