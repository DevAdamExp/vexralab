// Copy for /about ("Studio"). Anything in [brackets] is a fact only the owner can supply.

/** Why we exist: the founder's worry (voice) and the studio's answer (one line). */
export const PAIRS: { thought: string; answer: string }[] = [
  { thought: "Agencies vanish after the deposit.", answer: "We demo every Friday." },
  { thought: "I don't understand what they send me.", answer: "Plain words, always." },
  { thought: "It'll look great and load slowly.", answer: "Tested on an ordinary phone first." },
  { thought: "I'll be stuck with them forever.", answer: "Code and accounts are yours from day one." },
];

export const BELIEFS: { name: string; emoji: string }[] = [
  { name: "Clarity beats clever.", emoji: "🔍" },
  { name: "Small on purpose.", emoji: "🌱" },
  { name: "Show, don't report.", emoji: "🎬" },
  { name: "Fast is a feature.", emoji: "⚡" },
  { name: "Leave it better.", emoji: "🧹" },
];

/** The studio week, as one strip. */
export const WEEK: { when: string; name: string; emoji: string }[] = [
  { when: "Monday", name: "Monday plan", emoji: "📋" },
  { when: "Friday", name: "Friday demo", emoji: "🎬" },
  { when: "Friday", name: "Weekly update", emoji: "✉️" },
  { when: "Every day", name: "Shared channel", emoji: "💬" },
  { when: "Every day", name: "Same-day replies", emoji: "⚡" },
];

/**
 * PLACEHOLDER PEOPLE. Replace every name, initials, role and social link with the real
 * team. `tone` picks the monogram colour.
 */
export const PEOPLE: { name: string; initials: string; role: string; tone: "sea" | "sail" | "red" | "lamp"; links: { linkedin: string; github: string; dribbble: string } }[] = [
  { name: "[Founder name]", initials: "F", role: "Founder", tone: "sea", links: { linkedin: "#", github: "#", dribbble: "#" } },
  { name: "[Team member]", initials: "D", role: "Design", tone: "sail", links: { linkedin: "#", github: "#", dribbble: "#" } },
  { name: "[Team member]", initials: "E", role: "Engineering", tone: "red", links: { linkedin: "#", github: "#", dribbble: "#" } },
  { name: "[Team member]", initials: "A", role: "Automation", tone: "lamp", links: { linkedin: "#", github: "#", dribbble: "#" } },
];

export const QUESTIONS: { q: string; a: string }[] = [
  { q: "Where are you based?", a: "[City], Pakistan. We plan calls around your working day." },
  { q: "How big is the team?", a: "[Number] people, all on this page. You talk to the people doing the work." },
  // Owner: confirm this policy matches how the studio works.
  { q: "Do you outsource?", a: "No. If a job needs a specialist, we name them up front and you meet them first." },
  { q: "Can we meet?", a: "Yes. Usually on video, and in person if you're in [City]." },
];
