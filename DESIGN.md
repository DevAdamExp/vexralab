# VexraLab — Art Direction (v2)

The craft bar is Remark Studio (`~/Developer/Office Projects/remark`): poster type over real imagery, liquid forms, lots of space, very little text. VexraLab gets its own identity through **the desk by the window** (the theme image, `public/img/desk-window.jpg`), its six colours, and the founder's story told in short lines.

## Type (Remark Studio's family)
| Role | Font | Use |
|---|---|---|
| Poster | **Betha** (`.hero-type`) | Huge words over imagery, the wordmark. Uppercase by design. |
| Headings | **Cranio** (`h1–h4`, `.display`) | Every heading. One weight, so never bold. Oblique (`.voice`) for quotes and feelings. |
| Body | **Mifetro** | Paragraphs. |
| UI | **Manrope** | Buttons, nav, form controls: small uppercase, tracking .15–.2em. |
| Labels / numbers | **JetBrains Mono** (`.label`, `font-mono`) | Eyebrows, 01/05 counters, times. |

## Colour: all six, each with a job
| Colour | Hex | Job |
|---|---|---|
| Dark Void | `#151419` | Night register; hero, footer, image sections |
| Ballroom Belle | `#DAD2C8` | Paper register, the main reading ground (`bg-paper`); `bg-paper-2` is a lighter tint |
| Deep Sea Green | `#075056` | Primary brand: liquid fills, outline buttons, blobs, one register |
| Blue Sail | `#2A4C9E` | Full register for process/how-we-work, blobs, plates |
| Red Inferno | `#BD1B1F` | Marks on paper (underline/strike), chapter tags, counters (`01 / 05`), one blob per page |
| Decor Yellow | `#F6BB02` | Primary CTA, marks on dark, the cursor-lamp highlight, emoji badges |

Each page uses **every** colour at least once. Registers alternate; no two neighbours match.

## Space and text
- Section padding `py-28 md:py-40` minimum. One idea per section.
- A heading is followed by **at most one or two short lines**. No paragraphs longer than ~25 words.
- Lists hold names, not sentences.

## Art
- **Real imagery** first: the desk photo, graded night (hero) or day (morning).
- **Liquid forms** (`<Blob tone side emoji>`): gradient blobs poured from the page edge, with an emoji in the head.
- **Product UI drawn in code** is allowed when refined (real type, real spacing, sample-labelled).
- No hand-drawn scenery: no SVG mountains, suns, rooms or ridges.

## Emoji and logos
- Emoji add warmth in labels, list markers, chips, badges and blob heads. Use one per item, never inside long sentences.
- Social platforms always show their own logo (`<SocialIcons />`, `react-icons/fa6`).

## Motion
- Liquid buttons enter from the pointer's edge. Droplet nav. The cursor lamp lights the hero words.
- `Seen` entrances (`.rise .fade .wipe .draw`) play once. Blobs slide in from their edge.
- Only transform, opacity, clip-path and mask move. Reduced motion shows final states.

## Copy
- Short, warm, from the founder's side. No invented clients, numbers or testimonials. Samples say **Sample**; facts the owner must supply are in `[brackets]`.
