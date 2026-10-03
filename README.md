# VexraLab

Website for VexraLab, a design and engineering studio for founders.

The site tells one founder's story, from a 2 AM worry about their website to a calm morning after. Art direction, palette, type and motion rules are in [`DESIGN.md`](./DESIGN.md).

## Stack
Next.js 16 (App Router) · React 19 · Tailwind CSS v4 · GSAP ScrollTrigger · Lenis

## Develop
```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Pages
| Route | Content |
|---|---|
| `/` | Hero, platforms, services, dashboard, process, pricing, FAQ |
| `/services` | Seven services with before/after, deliverables, timeline and price |
| `/work` | Sample engagements and the 5-step process |
| `/about` | Beliefs, a week with us, the team |
| `/contact` | Free audit brief form → `POST /api/brief` |

All content lives in `src/data/vx.ts`; the design system is `src/components/cc/`.

## Contact form
Set `RESEND_API_KEY` and `BRIEF_TO_EMAIL` to receive briefs by email; without them they're only logged on the server.

## Placeholders to replace
Search for `[` brackets (prices, timelines, team, WhatsApp number) and "Sample" (illustrative engagements).
