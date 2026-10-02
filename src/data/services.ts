import type { ServiceId } from "./site";

/**
 * What the services page adds to SERVICES: the 2 AM thought each service answers,
 * the hour it was had, and the placeholders the studio fills in.
 */
export const SERVICE_PAGE: Record<ServiceId, { time: string; thought: string; timeline: string; price: string }> = {
  brand: { time: "1:48 AM", thought: "I still can’t explain what we do in one sentence.", timeline: "[3–5 weeks]", price: "[$X]" },
  websites: { time: "2:06 AM", thought: "I send people to our site, then apologise for it on the call.", timeline: "[4–8 weeks]", price: "[$X]" },
  apps: { time: "2:23 AM", thought: "Every client update is me, a spreadsheet and a very long email.", timeline: "[8–16 weeks]", price: "[$X]" },
  automation: { time: "2:41 AM", thought: "I copied the same enquiry into three tools again tonight.", timeline: "[2–6 weeks]", price: "[$X]" },
  care: { time: "2:57 AM", thought: "We launched last spring. Nobody has touched it since.", timeline: "Ongoing, monthly", price: "[$X / month]" },
};

export const ENGAGEMENTS = [
  {
    name: "Fixed-scope project",
    suits: "A brand, a website or the first version of an app. Anything with a clear finish line.",
    billing: "One fixed price, agreed after a short discovery. Paid in milestones as the work lands.",
    length: "[3–16 weeks]",
    price: "[From $X]",
  },
  {
    name: "Monthly partnership",
    suits: "Teams who have launched and want the site or product to keep getting better.",
    billing: "A flat monthly fee for a set amount of studio time. Pause or stop with [X days] notice.",
    length: "Rolling, month to month",
    price: "[From $X / month]",
  },
  {
    name: "Focused sprint",
    suits: "One sharp problem. A landing page, an audit, a prototype or a single automation.",
    billing: "One or two weeks, priced up front and paid before we start.",
    length: "[1–2 weeks]",
    price: "[From $X]",
  },
];

export const FAQ = [
  {
    q: "How long does a project take?",
    a: "Most brand projects take [3–5 weeks], websites [4–8 weeks] and web apps [8–16 weeks]. Before you pay anything, you get a dated plan with a demo every Friday. If a date moves, you hear it from us first.",
  },
  {
    q: "Who owns the code and the design files?",
    a: "You do. Once the final invoice is paid, the code, the design files, the copy and every account we set up are yours. We build in your repository and your tools from day one, so there is nothing to hand back.",
  },
  {
    q: "We already have a designer or a developer. Can you work with them?",
    a: "Yes, and we like it. We can take the part your team doesn’t have time for, share a design system with them, or review their work. We agree who owns what in the first week.",
  },
  {
    q: "I’m not technical. Is that a problem?",
    a: "No. Most founders we talk to aren’t. You decide what the business needs. We explain each choice in plain words, show you options, and tell you what we would do and why.",
  },
  {
    q: "What happens after launch?",
    a: "You get a recorded walkthrough, written notes for your team and [X days] of fixes included. After that you can run it yourself, or keep us on through Care & growth for monthly improvements.",
  },
  {
    q: "How do payments work?",
    a: "Fixed-scope projects start with a [X%] deposit, then milestone payments as each part is delivered. Monthly partnerships are invoiced at the start of each month. Sprints are paid up front. We invoice in [currency].",
  },
  {
    q: "Can we start with something small?",
    a: "Yes. A focused sprint is a good way to see how we work before you commit to more. If it’s the only thing you need, that’s fine too.",
  },
  {
    q: "What do you need from us to get started?",
    a: "A first call, access to what you already have, and one person who can make decisions. We send a short written plan after the call, usually within [X working days].",
  },
];
