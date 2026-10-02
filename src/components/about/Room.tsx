"use client";

import { useState, type CSSProperties } from "react";
import { LiquidButton } from "@/components/ui/LiquidButton";
import styles from "./about.module.css";

const INK = "var(--color-ink)";
const PAPER = "var(--color-paper)";
const SEA = "var(--color-sea)";
const SEA2 = "var(--color-sea-2)";
const SOFT = "var(--color-sea-soft)";
const LAMP = "var(--color-lamp)";
const FADE = "transition-opacity duration-[1400ms] ease-water";

const CLOUD = "M0 34C-2 22 10 14 22 18 26 4 48 0 58 12 66 4 84 8 86 22 98 22 104 34 98 40H4C0 40 0 36 0 34Z";
const LEAF = "M0 0C11-20 11-50 0-72-11-50-11-20 0 0Z";
const LEAVES = [
  { r: -62, s: 0.7, f: SEA2 },
  { r: -36, s: 0.95, f: SEA },
  { r: -12, s: 1.15, f: SEA2 },
  { r: 12, s: 1.05, f: SEA },
  { r: 38, s: 0.9, f: SEA2 },
  { r: 64, s: 0.65, f: SEA },
];

/**
 * The theme image: a desk facing a big window at dusk. The lamp is a real switch;
 * turning it on crossfades the room from cool dusk to warm evening light.
 */
export function Room({ className = "", style }: { className?: string; style?: CSSProperties }) {
  const [lit, setLit] = useState(true);
  const when = (on: number, off: number) => ({ opacity: lit ? on : off });

  return (
    <figure className={className} style={style}>
      <div className={`relative aspect-[4/3] overflow-hidden rounded-[20px] border border-ink/15 sm:aspect-[5/3] md:rounded-[28px] ${styles.room}`}>
        <svg viewBox="0 0 1200 720" preserveAspectRatio="xMidYMid slice" role="img" aria-labelledby="room-title" className="absolute inset-0 size-full">
          <title id="room-title">
            {`The studio, drawn: a desk faces a big window with green mountains and a low sun outside. On the desk sit a plant, books, a monitor showing a website sketch, a mug and a desk lamp. The lamp is ${lit ? "on" : "off"}.`}
          </title>
          <defs>
            <linearGradient id="room-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={SOFT} />
              <stop offset=".55" stopColor={PAPER} />
              <stop offset="1" stopColor="var(--color-lamp-soft)" />
            </linearGradient>
            <radialGradient id="room-glow" cx="941" cy="400" r="480" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor={LAMP} stopOpacity=".42" />
              <stop offset=".45" stopColor={LAMP} stopOpacity=".14" />
              <stop offset="1" stopColor={LAMP} stopOpacity="0" />
            </radialGradient>
            <linearGradient id="room-cone" x1="941" y1="392" x2="820" y2="540" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor={LAMP} stopOpacity=".55" />
              <stop offset="1" stopColor={LAMP} stopOpacity="0" />
            </linearGradient>
            <clipPath id="room-glass">
              <rect x="168" y="84" width="624" height="372" />
            </clipPath>
          </defs>

          {/* Wall and floor */}
          <rect width="1200" height="720" fill="var(--color-belle)" />
          <g stroke={INK} strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round">
            <rect x="-2" y="684" width="1204" height="40" fill={PAPER} />

            {/* A note pinned to the wall */}
            <g transform="rotate(-4 80 190)">
              <rect x="46" y="150" width="70" height="76" fill="var(--color-lamp-soft)" />
              <path d="M58 178H104M58 192H98M58 206H90" fill="none" />
              <circle cx="81" cy="158" r="4" fill={SEA} />
            </g>

            {/* Shelf with books and a trailing plant */}
            <rect x="860" y="200" width="210" height="8" rx="1" fill={PAPER} />
            <path d="M880 208L880 226 896 208M1050 208L1050 226 1034 208" fill={PAPER} />
            <rect x="878" y="136" width="18" height="64" fill={SEA} />
            <rect x="898" y="144" width="14" height="56" fill={PAPER} />
            <rect x="914" y="130" width="20" height="70" fill={SOFT} />
            <path d="M938 200L956 142 970 146 952 200Z" fill="var(--color-lamp-soft)" />
            <path d="M1004 172H1046L1040 200H1010Z" fill={PAPER} />
            <path d="M1012 176C1000 210 1004 250 990 300M1038 176C1046 206 1040 232 1048 262" fill="none" />
            {[
              [1001, 214, -30],
              [998, 246, 30],
              [993, 280, -20],
              [1044, 204, 30],
              [1045, 236, -30],
            ].map(([x, y, r]) => (
              <ellipse key={`${x}-${y}`} cx={x} cy={y} rx="9" ry="5" transform={`rotate(${r} ${x} ${y})`} fill={SEA2} />
            ))}

            {/* Curtain rod */}
            <path d="M118 50H852" fill="none" />
            <circle cx="114" cy="50" r="5" fill={PAPER} />
            <circle cx="856" cy="50" r="5" fill={PAPER} />

            {/* Window: frame, then the view through the glass */}
            <rect x="150" y="66" width="660" height="408" rx="3" fill={PAPER} />
            <g clipPath="url(#room-glass)">
              <rect x="168" y="84" width="624" height="372" fill="url(#room-sky)" stroke="none" />
              <circle cx="400" cy="268" r="42" fill={LAMP} />
              <path d="M600 160q6-6 12 0q6-6 12 0M640 182q5-5 10 0q5-5 10 0" fill="none" />
              <g className={styles.cloudA}>
                <path d={CLOUD} transform="translate(236 132)" fill={PAPER} />
              </g>
              <g className={styles.cloudB}>
                <path d={CLOUD} transform="translate(560 196) scale(.8)" fill={PAPER} />
              </g>
              <path d="M168 300L230 262 282 284 352 228 420 286 486 252 560 296 640 240 720 282 792 256V456H168Z" fill={SOFT} />
              <path d="M168 352C220 322 270 330 320 344 380 318 440 312 500 338 560 320 620 316 680 336 730 322 770 320 792 326V456H168Z" fill={SEA2} />
              <path d="M168 404C260 380 340 386 420 400 520 378 640 382 792 392V456H168Z" fill={SEA} />
              <path d="M232 398l8-24 8 24ZM252 396l7-20 7 20ZM440 400l8-24 8 24Z" fill={SEA2} />
            </g>
            <rect x="476" y="84" width="8" height="372" fill={PAPER} />
            <rect x="168" y="262" width="624" height="8" fill={PAPER} />
            <rect x="168" y="84" width="624" height="372" fill="none" />
            <rect x="132" y="468" width="696" height="16" rx="2" fill={PAPER} />

            {/* Curtain */}
            <path d="M128 50C140 140 118 240 136 330 146 380 128 430 140 500H206C196 420 214 330 200 240 192 160 210 100 204 50Z" fill={PAPER} />
            <path d="M160 60C168 180 150 300 166 490M184 60C178 200 194 320 186 490" fill="none" />

            {/* Desk */}
            <rect x="96" y="556" width="14" height="128" fill={PAPER} />
            <rect x="950" y="556" width="150" height="128" fill={PAPER} />
            <path d="M950 598H1100M950 640H1100" fill="none" />
            {[577, 619, 661].map((y) => (
              <circle key={y} cx="1025" cy={y} r="3" fill={INK} />
            ))}
            <rect x="70" y="538" width="1060" height="18" rx="3" fill={PAPER} />

            {/* Plant */}
            <g transform="translate(238 472)">
              {LEAVES.map((l) => (
                <g key={l.r} transform={`rotate(${l.r}) scale(${l.s})`}>
                  <path d={LEAF} fill={l.f} />
                  <path d="M0-4V-62" fill="none" stroke={PAPER} strokeOpacity=".5" />
                </g>
              ))}
            </g>
            <path d="M206 478H270L262 538H214Z" fill={PAPER} />
            <rect x="200" y="470" width="76" height="10" rx="2" fill={PAPER} />

            {/* Books */}
            <rect x="300" y="524" width="130" height="14" rx="2" fill={SEA} />
            <rect x="310" y="512" width="112" height="12" rx="2" fill="var(--color-lamp-soft)" />
            <path d="M330 506L420 498" fill="none" strokeWidth="3" />

            {/* Monitor, showing a site in progress (the same mountains, small) */}
            <rect x="626" y="470" width="22" height="66" fill={PAPER} />
            <path d="M590 538C600 528 674 528 684 538Z" fill={PAPER} />
            <rect x="494" y="292" width="286" height="182" rx="10" fill={INK} />
            <rect x="506" y="304" width="262" height="152" rx="3" fill={PAPER} />
            <circle cx="522" cy="318" r="4" fill={SEA} />
            <path d="M640 318H656M664 318H680M688 318H704" fill="none" />
            <rect x="726" y="312" width="30" height="12" rx="6" fill={SEA} />
            <rect x="522" y="342" width="140" height="11" rx="2" fill={INK} />
            <rect x="522" y="359" width="100" height="11" rx="2" fill={INK} />
            <path d="M522 384H640M522 394H620" fill="none" stroke="var(--color-ink-subtle)" />
            <rect x="522" y="410" width="52" height="16" rx="8" fill={SEA} />
            <rect x="680" y="340" width="74" height="96" rx="4" fill={SOFT} />
            <path d="M680 426L700 402 714 416 732 394 754 426V432C754 434 752 436 750 436H684C682 436 680 434 680 432Z" fill={SEA} />

            {/* Keyboard and mug */}
            <rect x="560" y="528" width="170" height="10" rx="3" fill={PAPER} />
            <path d="M800 500H836V530C836 536 832 538 826 538H810C804 538 800 536 800 530Z" fill={SEA} />
            <path d="M836 508C848 508 848 526 836 526" fill="none" />
            <path d="M812 488C806 478 818 472 812 462M824 488C818 478 830 472 824 462" fill="none" stroke="var(--color-ink-subtle)" />

            {/* Desk lamp */}
            <ellipse cx="930" cy="534" rx="44" ry="8" fill={SEA} />
            <path d="M930 530L872 420 996 334" fill="none" strokeWidth="3" />
            <circle cx="930" cy="528" r="6" fill={PAPER} />
            <circle cx="872" cy="420" r="6" fill={PAPER} />
            <path d="M988 322L1008 344 974 414C950 404 926 390 908 370Z" fill={SEA} />
            <ellipse cx="941" cy="392" rx="26" ry="7" transform="rotate(34 941 392)" fill={PAPER} />

            {/* Chair, pushed in */}
            <rect x="380" y="582" width="230" height="170" rx="40" fill={SEA} />
            <path d="M404 612H586" fill="none" stroke={PAPER} strokeOpacity=".35" />
          </g>

          {/* Light: dusk cools the room; the lamp warms it. Opacity only. */}
          <rect width="1200" height="720" fill={SEA} className={FADE} style={{ mixBlendMode: "multiply", ...when(0.1, 0.32) }} />
          <rect width="1200" height="720" fill="url(#room-glow)" className={FADE} style={when(1, 0)} />
          <polygon points="908,370 974,414 1000,538 660,538" fill="url(#room-cone)" className={FADE} style={when(1, 0)} />
          <ellipse cx="941" cy="392" rx="26" ry="7" transform="rotate(34 941 392)" fill={LAMP} stroke={INK} strokeWidth="1.5" className={FADE} style={when(1, 0)} />
        </svg>
      </div>

      <figcaption className="mt-5 flex flex-wrap items-center justify-between gap-4">
        <span className="label text-ink-muted">The desk by the window. Drawn in code.</span>
        <LiquidButton as="button" variant="ghost-paper" size="sm" onClick={() => setLit((l) => !l)}>
          <span aria-hidden="true" className={`size-2.5 rounded-full border border-current transition-colors duration-500 ${lit ? "border-lamp bg-lamp" : ""}`} />
          {lit ? "Turn the lamp off" : "Turn the lamp on"}
        </LiquidButton>
      </figcaption>
    </figure>
  );
}
