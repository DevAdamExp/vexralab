export const EMAIL = "hello@vexralab.com";

export const NAV = [
  { label: "Work", href: "/work" },
  { label: "Services", href: "/services" },
  { label: "Studio", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ponytail: placeholder profile URLs until the studio's real handles exist.
export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Dribbble", href: "https://dribbble.com/" },
  { label: "GitHub", href: "https://github.com/DevAdamExp" },
];

/** The studio's working timezone, shown as a live clock. */
export const STUDIO_TZ = "Asia/Karachi";
export const STUDIO_CITY = "Pakistan";

export type ServiceId = "brand" | "websites" | "apps" | "automation" | "care";

/** Every service starts with the feeling it creates for the founder. */
export const SERVICES: { id: ServiceId; name: string; feeling: string; line: string; includes: string[] }[] = [
  {
    id: "brand",
    name: "Brand & messaging",
    feeling: "They finally get it.",
    line: "Positioning, naming, identity and the words on your site, so people understand you in one read.",
    includes: ["Positioning workshop", "Naming", "Logo and identity system", "Website copy", "Brand guidelines"],
  },
  {
    id: "websites",
    name: "Websites",
    feeling: "They trust us before the call.",
    line: "Marketing sites designed and built in Next.js, fast on every phone, with a CMS your team can actually use.",
    includes: ["Site strategy and structure", "Design system", "Next.js build", "CMS setup", "SEO and analytics"],
  },
  {
    id: "apps",
    name: "Web apps & portals",
    feeling: "Our clients can do it themselves.",
    line: "Client portals, dashboards and internal tools, from the first clickable prototype to production.",
    includes: ["Product discovery", "UX and UI design", "Full-stack engineering", "Auth, payments, roles", "Testing and launch"],
  },
  {
    id: "automation",
    name: "Automation & AI",
    feeling: "We stopped doing it by hand.",
    line: "The repetitive work between your tools, handed to workflows and AI agents that report back.",
    includes: ["Process mapping", "Integrations", "AI assistants and agents", "Reporting", "Team handover"],
  },
  {
    id: "care",
    name: "Care & growth",
    feeling: "It keeps getting better.",
    line: "After launch we stay: monthly improvements, conversion tests, updates and a same-day reply.",
    includes: ["Monthly improvement sprint", "Conversion testing", "Uptime and updates", "Analytics review", "Priority support"],
  },
];
