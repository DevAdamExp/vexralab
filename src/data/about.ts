// Copy for /about ("Studio"). Anything in [brackets] is a fact only the owner can supply.

/** Why we exist: the founder's worry (voice) and the studio's answer (plain). */
export const PAIRS: { thought: string; answer: string }[] = [
  { thought: "Agencies disappear after the deposit.", answer: "We demo every Friday. You'll never wonder where things are." },
  { thought: "I don't understand half of what they send me.", answer: "We write in plain words. If a term needs a glossary, we drop the term." },
  { thought: "It'll look great and load slowly.", answer: "Speed is part of the design. We test on an ordinary phone before you see it." },
  { thought: "I'll be stuck with them forever.", answer: "The code, the accounts and the files are yours from day one." },
  { thought: "They'll sell me more than I need.", answer: "If you don't need us yet, we'll say so and tell you what to do instead." },
];

export const BELIEFS: { name: string; note: string }[] = [
  { name: "Clarity beats clever.", note: "If a visitor needs a second read, we rewrite it." },
  { name: "Small on purpose.", note: "You talk to the people doing the work. Nobody stands in between." },
  { name: "Show, don't report.", note: "Working software every week beats a status deck." },
  { name: "Fast is a feature.", note: "A page that loads late loses the trust it worked to earn." },
  { name: "Scope in writing.", note: "We agree what's in before we start. Changes are discussed, never assumed." },
  { name: "Leave it better.", note: "Clean code, a handover guide and every account in your name." },
];

export type Ritual = { name: string; kind: string; text: string };

/** The studio week. Days without a ritual are quiet build days. */
export const WEEK: { day: string; rituals: Ritual[] }[] = [
  { day: "Monday", rituals: [{ name: "Monday plan", kind: "Call", text: "A short call to agree what ships this week and what we need from you." }] },
  { day: "Tuesday", rituals: [] },
  { day: "Wednesday", rituals: [] },
  { day: "Thursday", rituals: [] },
  {
    day: "Friday",
    rituals: [
      { name: "Friday demo", kind: "Live", text: "Working software on screen, not slides. Recorded if you can't join." },
      { name: "Weekly update", kind: "Written", text: "One page: what's done, what's next, what's blocked." },
    ],
  },
];

/** Rituals that run every working day, drawn as bars across the week. */
export const ALWAYS: Ritual[] = [
  { name: "One shared channel", kind: "Every day", text: "You, us and the whole project in one thread on [Slack or WhatsApp]." },
  { name: "Same-day replies", kind: "Every day", text: "Message before [17:00] studio time and you hear back that day." },
];

/**
 * PLACEHOLDER PEOPLE. Replace every name, initials, role and desk line with the real
 * team, and add or remove entries to match. No photos on purpose: the monograms are
 * drawn in CSS. `tone` picks the avatar's colour; keep only one "lamp".
 */
export const PEOPLE: { name: string; initials: string; role: string; desk: string; tone: "sea" | "ink" | "lamp" | "belle" }[] = [
  { name: "[Founder name]", initials: "F", role: "Founder · [Role]", desk: "Sketches the first version on paper before anyone opens Figma.", tone: "ink" },
  { name: "[Team member]", initials: "D", role: "[Role] · Design", desk: "Turns the sketch into a system that still works on a small phone.", tone: "sea" },
  { name: "[Team member]", initials: "E", role: "[Role] · Engineering", desk: "Builds it in Next.js and checks the speed before every demo.", tone: "lamp" },
  { name: "[Team member]", initials: "A", role: "[Role] · Automation", desk: "Connects your tools so the busywork runs without you.", tone: "belle" },
];

export const QUESTIONS: { q: string; a: string; link?: { label: string; href: string } }[] = [
  {
    q: "Where are you based?",
    a: "We work from [City], Pakistan. We plan calls around your working day, so the time difference stays our problem, not yours.",
  },
  {
    q: "How big is the team?",
    a: "[Number] people, all on this page. Small enough that you talk to the people doing the work.",
  },
  {
    q: "Do you outsource?",
    // Owner: confirm this policy matches how the studio works.
    a: "The people on this page design and build your project. If a job needs a specialist we don't have, we name them in the proposal and you meet them before they start.",
  },
  {
    q: "What tools do you use?",
    a: "Figma for design. Next.js and TypeScript for the build. [CMS] for content your team edits, and [automation tools] for workflows. You get access to all of it.",
  },
  {
    q: "Can we meet?",
    a: "Yes. Most meetings happen on video. If you're in or visiting [City], we'd be glad to meet in person.",
    link: { label: "Book a first call", href: "/contact" },
  },
];
