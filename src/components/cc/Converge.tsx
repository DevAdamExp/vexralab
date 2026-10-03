import { Band, tone } from "./parts";
import s from "./cc.module.css";

const COLS = 6;
const ROWS = 4;
const TOOLS = ["Excel", "HubSpot", "Shopify", "Stripe", "Gmail", "Sheets", "QuickBooks", "WhatsApp", "Odoo", "CSV"];

// Deterministic scatter: same layout on server and client, no Math.random.
const rand = (n: number) => {
  const x = Math.sin(n * 12.9898) * 43758.5453;
  return x - Math.floor(x);
};

const CAPTIONS = [
  { k: "01", title: "Your data is everywhere.", body: "Leads in one tool, orders in another, numbers in a spreadsheet nobody trusts." },
  { k: "02", title: "We connect it.", body: "Every source synced, cleaned and matched to one customer, one product, one record." },
  { k: "03", title: "Now it’s one view.", body: "The whole business on one screen, live, for every team." },
];

/**
 * Home signature: a pinned scene. As you scroll, scattered tiles (each one a tool
 * your data lives in) drift together and lock into one ordered grid, while the
 * caption steps through the story. Static final state without scroll timelines.
 */
export function Converge() {
  return (
    <>
    <section className={s.converge} aria-labelledby="converge-title">
      <h2 id="converge-title" className="sr-only">
        From scattered data to one view
      </h2>
      <div className={s.convergeStage}>
        <div className="mx-auto grid h-full w-full max-w-[1152px] items-center gap-12 px-6 py-16 lg:grid-cols-[5fr_7fr] lg:px-12">
          <ol className={s.captions}>
            {CAPTIONS.map((c, i) => (
              <li key={c.k} className={s[`cap${i}`]}>
                <span className={`${s.mono} text-[12px] text-(--hi)`}>{c.k} / 03</span>
                <p className="mt-4 text-[clamp(32px,3.6vw,48px)] leading-[1.05] font-semibold tracking-[-0.035em]">{c.title}</p>
                <p className="mt-4 max-w-[38ch] text-[18px] leading-7 text-(--muted)">{c.body}</p>
              </li>
            ))}
          </ol>

          <div className={s.grid} aria-hidden="true">
            <span className={s.gridFrame} />
            {Array.from({ length: COLS * ROWS }, (_, i) => {
              const c = i % COLS;
              const r = Math.floor(i / COLS);
              const tool = i % 3 === 0 ? TOOLS[(i / 3) % TOOLS.length] : null;
              return (
                <span
                  key={i}
                  className={s.gtile}
                  style={
                    {
                      gridColumn: c + 1,
                      gridRow: r + 1,
                      "--c": tone(c + 1, 1, COLS, false),
                      "--dx": `${(rand(i + 1) - 0.5) * 70}vmin`,
                      "--dy": `${(rand(i + 31) - 0.5) * 60}vmin`,
                      "--rot": `${(rand(i + 61) - 0.5) * 80}deg`,
                    } as React.CSSProperties
                  }
                >
                  {tool && <em className={s.gtool}>{tool}</em>}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
    <Band />
    </>
  );
}
