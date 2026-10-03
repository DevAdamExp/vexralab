// Single source of content for the VexraLab site (data, CRM and ERP partner).
// Bracketed values are placeholders the owner must fill in.

export const EMAIL = "hello@vexralab.com";
export const STUDIO_TZ = "Asia/Karachi";

export const NAV = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Studio", href: "/about" },
  { label: "FAQ", href: "/#faq" },
];

export type Service = {
  id: string;
  name: string;
  tag: string;
  title: string;
  body: string;
  before: string[];
  after: string[];
  deliverables: string[];
  timeline: string;
  price: string;
};

export const SERVICES: Service[] = [
  {
    id: "crm",
    name: "CRM implementation",
    tag: "HubSpot · Zoho",
    title: "Every lead, one record.",
    body: "Pipelines, deal stages and follow-ups set up around how your team actually sells.",
    before: ["Leads in 4 inboxes and a spreadsheet", "Follow-ups depend on memory", "No idea which channel works"],
    after: ["One pipeline, every source", "Follow-ups that send themselves", "Revenue by channel, live"],
    deliverables: ["Pipeline and deal stages", "Lead capture from every channel", "Contact cleanup and dedupe", "Automated follow-ups", "Sales dashboard"],
    timeline: "[4-6 weeks]",
    price: "[From $X]",
  },
  {
    id: "erp",
    name: "ERP setup & integration",
    tag: "Odoo · SAP",
    title: "Run the whole business.",
    body: "Inventory, orders, purchasing and finance in one system that talks to your CRM.",
    before: ["Orders typed in twice", "Stock counts that never match", "Month-end takes a week"],
    after: ["Orders flow to stock and invoices", "Stock reconciled every night", "Month-end in a day"],
    deliverables: ["Process mapping", "Inventory, sales and purchasing", "Accounting setup", "CRM and store integrations", "Role-based access"],
    timeline: "[8-16 weeks]",
    price: "[From $X]",
  },
  {
    id: "warehouse",
    name: "Data warehouse & pipelines",
    tag: "Postgres · BigQuery",
    title: "One source of truth.",
    body: "Every tool syncs into one clean model, so every report starts from the same numbers.",
    before: ["Five tools, five versions of the truth", "Reports rebuilt by hand", "Nobody trusts the totals"],
    after: ["Every source in one model", "One ID per customer and product", "Refreshed every hour"],
    deliverables: ["Source connectors", "Data model and naming", "Scheduled syncs", "Quality checks and alerts", "Documentation"],
    timeline: "[3-6 weeks]",
    price: "[From $X]",
  },
  {
    id: "dashboards",
    name: "Dashboards & reporting",
    tag: "Looker · Metabase",
    title: "Answers, not exports.",
    body: "Live dashboards for sales, operations and finance. No more Monday spreadsheet ritual.",
    before: ["Monday spent building reports", "Numbers out of date by Tuesday", "Questions wait a week"],
    after: ["Live dashboards per team", "Weekly digest by email", "Answers in a click"],
    deliverables: ["KPI definitions", "Sales, ops and finance dashboards", "Per-team views", "Scheduled digests", "Training"],
    timeline: "[2-4 weeks]",
    price: "[From $X]",
  },
  {
    id: "automation",
    name: "Workflow automation",
    tag: "Zapier · Make · custom",
    title: "Stop copy-pasting.",
    body: "Handoffs between tools, approvals and alerts, handled by workflows that report back.",
    before: ["Hours of copy-paste each week", "Approvals stuck in email", "Errors found by customers"],
    after: ["Quote to invoice, automatic", "Approvals in one click", "Alerts on exceptions only"],
    deliverables: ["Process audit", "Integrations between tools", "Approval flows", "Error alerts", "Run logs"],
    timeline: "[2-6 weeks]",
    price: "[From $X]",
  },
  {
    id: "migration",
    name: "Data migration & cleanup",
    tag: "Excel → anywhere",
    title: "Move without losing a row.",
    body: "From spreadsheets or legacy systems to the new stack, validated and audited.",
    before: ["Years of data in old files", "Duplicates everywhere", "Fear of losing history"],
    after: ["Clean data in the new system", "Row counts that match", "Full audit trail"],
    deliverables: ["Data inventory", "Cleanup and dedupe", "Staged migration", "Validation reports", "Rollback plan"],
    timeline: "[2-5 weeks]",
    price: "[From $X]",
  },
  {
    id: "care",
    name: "Training & ongoing care",
    tag: "Monthly",
    title: "Your team, confident.",
    body: "Hands-on training, documentation and a monthly check-in so the system keeps up with you.",
    before: ["Only one person knows the system", "Small changes wait months", "Adoption slowly drops"],
    after: ["Everyone trained on their part", "Changes shipped monthly", "A health check every month"],
    deliverables: ["Team training", "Written playbooks", "Monthly improvements", "Health checks", "Priority support"],
    timeline: "Ongoing",
    price: "[From $X / month]",
  },
];

export const PROCESS = [
  { name: "Audit", when: "Week 1", text: "A 30-minute call, then we map your tools, data and pain points." },
  { name: "Plan", when: "Week 1-2", text: "A written plan with scope, timeline and a fixed price." },
  { name: "Build", when: "Weeks 2-12", text: "We build in stages, with a live demo every Friday." },
  { name: "Train", when: "Launch", text: "Your team learns the system on their own data." },
  { name: "Care", when: "Ongoing", text: "Monthly improvements and a health check." },
];

export const FAQ: [string, string][] = [
  ["What does VexraLab actually do?", "We design, build and run the data systems behind growing businesses: CRMs, ERPs, data pipelines, dashboards and automations, set up around how your team already works."],
  ["Which platforms do you work with?", "HubSpot, Zoho, Odoo, SAP, Shopify, Stripe, QuickBooks, Xero, Postgres, BigQuery and most tools with an API. If we recommend a platform, we explain why in writing."],
  ["How long does a typical project take?", "An audit takes a week. Most CRM or dashboard builds take [4-8 weeks]; ERP rollouts take [8-16 weeks]. You see progress in a demo every Friday."],
  ["Will we lose any data during migration?", "No. We migrate in stages, validate row counts and keep an audit trail, and the old system stays read-only until you sign off."],
  ["Who owns the system and the data?", "You do. Every account, credential and line of configuration is in your name from day one."],
  ["What happens after launch?", "We train your team, hand over documentation, and offer a monthly Care plan for improvements and support."],
];
