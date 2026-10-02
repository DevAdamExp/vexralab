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
| Route | Story |
|---|---|
| `/` | 2:14 AM → the noise → "It's not you" → sunrise → what we make → how we work → the work |
| `/services` | A catalogue of mornings: each service shown as the deliverable, drawn in code |
| `/work` | A case study in chapters (sample, fictional client until real work is published) |
| `/about` | The desk by the window: beliefs, rituals, people |
| `/contact` | A letter under the lamp: a guided brief with a live preview |

## Contact form
`POST /api/brief` validates the brief. To deliver it by email, set `RESEND_API_KEY` and `BRIEF_TO_EMAIL`. Without them, submissions are only logged on the server.

## Placeholders to replace
Search the code for `[` brackets and for `Sample`: prices, team, client names, studio facts and the sample case study.
