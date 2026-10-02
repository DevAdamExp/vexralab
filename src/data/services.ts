import type { ServiceId } from "./site";

/**
 * What the services page adds to SERVICES: the 2 AM thought each service answers,
 * the hour it was had, what you get (names only, one emoji each), and the
 * placeholders the studio fills in.
 */
export const SERVICE_PAGE: Record<ServiceId, { time: string; thought: string; get: [string, string][]; terms: string }> = {
  brand: {
    time: "1:48 AM",
    thought: "I still can’t explain what we do.",
    get: [["🧭", "Positioning"], ["✍️", "Naming"], ["🎨", "Identity"], ["💬", "Website copy"], ["📘", "Guidelines"]],
    terms: "[3–5 weeks] · from [$X]",
  },
  websites: {
    time: "2:06 AM",
    thought: "I apologise for our site on every call.",
    get: [["🗺️", "Strategy"], ["🧩", "Design system"], ["⚡", "Next.js build"], ["🗂️", "CMS"], ["🔎", "SEO & analytics"]],
    terms: "[4–8 weeks] · from [$X]",
  },
  apps: {
    time: "2:23 AM",
    thought: "Every update is me and a spreadsheet.",
    get: [["🔍", "Discovery"], ["✏️", "UX & UI"], ["🛠️", "Engineering"], ["🔐", "Auth & payments"], ["🚀", "Launch"]],
    terms: "[8–16 weeks] · from [$X]",
  },
  automation: {
    time: "2:41 AM",
    thought: "I copied that enquiry into three tools. Again.",
    get: [["🗺️", "Process map"], ["🔌", "Integrations"], ["🤖", "AI agents"], ["📊", "Reporting"], ["🤝", "Handover"]],
    terms: "[2–6 weeks] · from [$X]",
  },
  care: {
    time: "2:57 AM",
    thought: "Nobody has touched the site since launch.",
    get: [["🔁", "Monthly sprint"], ["🧪", "A/B tests"], ["🛡️", "Uptime & updates"], ["📈", "Analytics"], ["⚡", "Same-day replies"]],
    terms: "Monthly · from [$X / month]",
  },
};

export const ENGAGEMENTS = [
  { emoji: "📦", tone: "sea", name: "Fixed project", suits: "A clear finish line.", terms: "[3–16 weeks] · from [$X]" },
  { emoji: "🌿", tone: "sail", name: "Monthly partner", suits: "Keep it getting better.", terms: "Rolling · from [$X / month]" },
  { emoji: "🎯", tone: "red", name: "Focused sprint", suits: "One sharp problem.", terms: "[1–2 weeks] · from [$X]" },
] as const;

export const FAQ = [
  { emoji: "⏱️", q: "How long does it take?", a: "Brands [3–5 weeks], websites [4–8 weeks], apps [8–16 weeks]. You get a dated plan and a demo every Friday." },
  { emoji: "🔑", q: "Who owns the work?", a: "You do. Code, design files, copy and accounts are yours once the final invoice is paid." },
  { emoji: "🧑‍💻", q: "Can you work with our team?", a: "Yes. We agree who owns what in week one, then share the design system and reviews." },
  { emoji: "🙋", q: "I’m not technical. Is that a problem?", a: "No. You decide what the business needs; we explain every choice in plain words." },
  { emoji: "🌱", q: "What happens after launch?", a: "A recorded walkthrough and [X days] of fixes. Then run it yourself, or keep us on Care & growth." },
  { emoji: "💳", q: "How do payments work?", a: "Projects start with a [X%] deposit, then milestones. Monthly work is invoiced monthly, in [currency]." },
];
