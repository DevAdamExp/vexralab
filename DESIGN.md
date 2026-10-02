# VexraLab — Art Direction

## The idea

**One founder, one night, one website.** Every page follows the same person: a founder who built something real, but whose website makes them want to apologise. The site moves them from **night** (worry, noise, 2 AM) to **morning** (clarity, calm, a site they're proud to send).

### Two voices
- **The studio speaks** in Schibsted Grotesk: confident and plain, set large and tight.
- **The client thinks** in Newsreader *italic*. It is used only for inner thoughts, quotes and feelings, never for labels or UI. Seeing this face tells you that you're hearing the founder.

### Three registers (the background is the story)
| Register | Background | Text | Meaning |
|---|---|---|---|
| `night` | `#151419` Dark Void | `#EEE9E1` | the problem, 2 AM, the noise |
| `paper` | `#EEE9E1` (Ballroom Belle, lifted) | `#151419` | the morning, clarity, the work |
| `sea` | `#075056` Deep Sea Green | `#EEE9E1` | the studio's hand: process, our part |

Belle `#DAD2C8` is a second paper for plates and panels. Pages alternate registers, and two neighbouring sections never share one.

### The lamp
Decor Yellow `#F6BB02` is the desk lamp, the only warm light in the room. It is the **mark colour** (hand-drawn underline, highlighter, circle), the primary CTA, and the liquid that fills buttons on night. Use it sparingly: about one lamp gesture per screen.

Red Inferno `#BD1B1F` is used only as an alarm inside the founder's world (an overdue invoice, an unread badge). Blue Sail `#2A4C9E` appears only inside drawn product shots.

## Type scale
- Display: `clamp(3rem, 7.4vw, 7.25rem)`, weight 600, leading .94, tracking −0.035em
- H2 chapter: `clamp(2.5rem, 5.6vw, 5.25rem)`, leading .98
- H3: `clamp(1.75rem, 3vw, 2.75rem)`
- Lede: 18px / 1.65, max 54ch
- Label: IBM Plex Mono 12px, uppercase, tracking .2em

## Devices
- **ChapterHead**: a numbered tag that wipes open, a mono label, then the h2. Numbers only mark a real sequence.
- **Mark**: a hand-drawn lamp gesture on one word per headline (underline, highlight, circle or strike).
- **Seen**: entrances play once and only for elements below the fold. With no JS or with reduced motion, everything is shown at rest.
- **Liquid buttons**: a blob enters from the edge the pointer crossed and leaves through the exit edge (1000ms in, 850ms out, `cubic-bezier(.16,1,.3,1)`).
- **Droplet nav**: four lamp drops merge through a goo filter.
- **Drawn in code**: product shots, documents and screens are built as real markup (labelled sample data), never stock photos.

## Motion rules
- Only transform, opacity, clip-path and mask move.
- Each viewport gets one orchestrated moment; everything else is quiet.
- Nothing loops except ambient details (lamp pulse, marquee).
- `prefers-reduced-motion` shows every final state instantly.

## Copy rules
- Write from the founder's side of the table. Short sentences, active voice.
- No invented clients, numbers or testimonials. Sample work is labelled **Sample**, and placeholders look like `[Client name]`.
