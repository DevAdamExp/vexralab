/**
 * The founder's desk at 2:14 AM, as a line illustration in the brand palette:
 * night window over the ridge, the lamp on, a template site glowing on the
 * monitor, a phone buzzing with unread messages, and the note that says it all.
 */
const INK = "#0e0d11";
const LINE = "rgb(238 233 225 / 0.38)";
const FG = "#eee9e1";

export function DeskAtNight() {
  return (
    <figure className="relative">
      <div className="relative overflow-hidden rounded-[28px] border border-fg/10 bg-night-2 shadow-[0_60px_120px_-60px_rgb(0_0_0/0.9)]">
        <svg viewBox="0 0 640 520" role="img" aria-labelledby="desk-title" className="block h-auto w-full">
          <title id="desk-title">
            A founder&rsquo;s desk at 2:14 AM: the desk lamp is on, the monitor shows a generic template website, the phone shows three unread messages, and a sticky note on the wall says &ldquo;fix the website??&rdquo;.
          </title>
          <defs>
            <linearGradient id="dn-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0d1a20" />
              <stop offset="1" stopColor="#173238" />
            </linearGradient>
            <radialGradient id="dn-warm" cx="500" cy="250" r="330" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#f6bb02" stopOpacity=".30" />
              <stop offset=".5" stopColor="#f6bb02" stopOpacity=".08" />
              <stop offset="1" stopColor="#f6bb02" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="dn-cone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#f6bb02" stopOpacity=".5" />
              <stop offset="1" stopColor="#f6bb02" stopOpacity="0" />
            </linearGradient>
            <radialGradient id="dn-screen" cx="270" cy="300" r="190" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#c9d6ff" stopOpacity=".16" />
              <stop offset="1" stopColor="#c9d6ff" stopOpacity="0" />
            </radialGradient>
            <clipPath id="dn-glass">
              <rect x="62" y="44" width="330" height="210" />
            </clipPath>
          </defs>

          {/* Room light */}
          <rect width="640" height="520" fill="url(#dn-warm)" />
          <rect width="640" height="520" fill="url(#dn-screen)" />

          {/* Window: night sky, moon, the ridge */}
          <g clipPath="url(#dn-glass)">
            <rect x="62" y="44" width="330" height="210" fill="url(#dn-sky)" />
            <circle cx="318" cy="96" r="20" fill={FG} opacity=".85" />
            <circle cx="326" cy="90" r="20" fill="#11232a" />
            {[[100, 70], [150, 110], [210, 62], [260, 128], [360, 70], [120, 140]].map(([x, y]) => (
              <circle key={`${x}-${y}`} cx={x} cy={y} r="1.4" fill={FG} opacity=".7" />
            ))}
            <path d="M62 254V188l52-34 40 26 58-58 50 44 36-22 52 40 42-28V254Z" fill="#075056" opacity=".75" />
            <path d="M62 254V214l64-28 52 22 70-40 60 34 46-14 38 18V254Z" fill="#0b6870" opacity=".55" />
          </g>
          <rect x="62" y="44" width="330" height="210" fill="none" stroke={LINE} strokeWidth="1.5" />
          <line x1="227" y1="44" x2="227" y2="254" stroke={LINE} strokeWidth="1.5" />
          <line x1="62" y1="132" x2="392" y2="132" stroke={LINE} strokeWidth="1.5" />
          <rect x="50" y="254" width="354" height="10" rx="2" fill="#26252c" stroke={LINE} strokeWidth="1.2" />

          {/* Sticky note */}
          <g transform="rotate(-6 512 96)">
            <rect x="466" y="58" width="92" height="80" rx="3" fill="#fbe7a6" />
            <circle cx="512" cy="66" r="3.5" fill="#bd1b1f" />
            <text x="476" y="98" fontFamily="var(--font-newsreader), Georgia, serif" fontStyle="italic" fontSize="17" fill="#151419">fix the</text>
            <text x="476" y="120" fontFamily="var(--font-newsreader), Georgia, serif" fontStyle="italic" fontSize="17" fill="#151419">website??</text>
          </g>

          {/* Lamp cone onto the desk */}
          <path d="M478 236 L420 404 L600 404 L530 236 Z" fill="url(#dn-cone)" opacity=".55" />

          {/* Desk */}
          <rect x="20" y="404" width="600" height="14" rx="3" fill="#2a2930" stroke={LINE} strokeWidth="1.2" />
          <line x1="52" y1="418" x2="52" y2="520" stroke={LINE} strokeWidth="1.5" />
          <line x1="588" y1="418" x2="588" y2="520" stroke={LINE} strokeWidth="1.5" />

          {/* Monitor with a template site */}
          <rect x="150" y="262" width="240" height="138" rx="10" fill={INK} stroke={LINE} strokeWidth="1.5" />
          <rect x="160" y="272" width="220" height="112" rx="3" fill="#e7ebf3" />
          <rect x="160" y="272" width="220" height="14" fill="#1d4ed8" />
          <rect x="166" y="277" width="40" height="4" rx="1" fill="#fff" opacity=".9" />
          <rect x="300" y="277" width="72" height="4" rx="1" fill="#fff" opacity=".6" />
          <rect x="168" y="292" width="204" height="56" fill="#9ca3af" />
          <text x="270" y="322" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="11.5" fill="#fff">Welcome To Our Website!</text>
          <rect x="198" y="330" width="144" height="3" rx="1" fill="#fff" opacity=".7" />
          {["#f59e0b", "#10b981", "#f59e0b", "#10b981", "#f59e0b"].map((c, k) => (
            <rect key={k} x={168 + k * 42} y="356" width="36" height="12" rx="2" fill={c} />
          ))}
          <rect x="330" y="372" width="36" height="6" rx="1" fill="#bd1b1f" opacity=".8" />
          <path d="M256 400h28l6 4h-40z" fill="#26252c" stroke={LINE} strokeWidth="1.2" />

          {/* Keyboard */}
          <rect x="196" y="396" width="148" height="8" rx="2" fill="#33323a" stroke={LINE} strokeWidth="1" />

          {/* Mug with steam */}
          <rect x="88" y="364" width="36" height="40" rx="5" fill="#33323a" stroke={LINE} strokeWidth="1.2" />
          <path d="M124 374c12 0 12 20 0 20" fill="none" stroke={LINE} strokeWidth="1.5" />
          <path className="vx-steam" d="M100 356c-6-8 6-14 0-24" fill="none" stroke={FG} strokeOpacity=".5" strokeWidth="1.5" strokeLinecap="round" />
          <path className="vx-steam vx-steam-2" d="M112 356c-6-8 6-14 0-24" fill="none" stroke={FG} strokeOpacity=".5" strokeWidth="1.5" strokeLinecap="round" />

          {/* Phone with unread badge */}
          <g transform="rotate(-8 412 396)">
            <rect x="392" y="386" width="48" height="16" rx="4" fill={INK} stroke={LINE} strokeWidth="1.2" />
            <rect x="396" y="389" width="40" height="10" rx="2" fill="#2a4c9e" opacity=".8" />
          </g>
          <g className="vx-buzz">
            <circle cx="442" cy="382" r="9" fill="#bd1b1f" />
            <text x="442" y="386" textAnchor="middle" fontFamily="var(--font-plex-mono), monospace" fontSize="10" fontWeight="600" fill="#fff">3</text>
          </g>

          {/* Desk lamp */}
          <ellipse cx="560" cy="402" rx="34" ry="6" fill="#26252c" stroke={LINE} strokeWidth="1.2" />
          <line x1="560" y1="398" x2="586" y2="310" stroke={FG} strokeOpacity=".55" strokeWidth="4" strokeLinecap="round" />
          <line x1="586" y1="310" x2="526" y2="236" stroke={FG} strokeOpacity=".55" strokeWidth="4" strokeLinecap="round" />
          <circle cx="586" cy="310" r="5" fill="#33323a" stroke={LINE} strokeWidth="1.2" />
          <path d="M470 236 L540 212 L548 238 Z" fill="#33323a" stroke={LINE} strokeWidth="1.2" />
          <ellipse cx="506" cy="237" rx="12" ry="5" fill="#f6bb02" />
          <circle cx="506" cy="236" r="22" fill="#f6bb02" opacity=".18" />

          {/* Plant */}
          <path d="M28 404h44l-6-30H34z" fill="#33323a" stroke={LINE} strokeWidth="1.2" />
          <g fill="#075056" stroke="#0b6870" strokeWidth="1">
            <path d="M50 374C30 344 26 318 34 296c12 22 18 50 16 78z" />
            <path d="M50 374C58 340 72 320 90 310c-6 26-20 48-40 64z" />
            <path d="M50 374C44 352 46 330 56 312c6 22 2 44-6 62z" />
          </g>
        </svg>
      </div>
      <figcaption className="label mt-4 flex items-center justify-between gap-4 text-[11px] text-subtle">
        <span>Fig. 1 · The desk, 02:14</span>
        <span>3 unread · 1 template</span>
      </figcaption>
    </figure>
  );
}
