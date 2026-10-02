// Two homepages for the same fictional clinic, drawn in em on a 90em canvas (see Frames.Canvas).
// Blue Sail is the clinic's brand colour and appears only in here.

/** A numbered lamp pin pointing at a problem on the old site. Sized in px so it stays legible at any scale. */
function Pin({ n, className }: { n: number; className: string }) {
  return (
    <span className={`absolute z-10 grid size-6 place-items-center rounded-full bg-lamp font-ui text-[12px] font-bold text-ink shadow-[0_0_0_3px_rgb(21_20_25/0.85)] md:size-8 md:text-[14px] ${className}`}>
      {n}
    </span>
  );
}

/** Before: the template site. Deliberately generic, so every choice on it is a problem. */
export function OldSite({ pins = false }: { pins?: boolean }) {
  return (
    <div className="flex h-full flex-col bg-white text-[#333]" style={{ fontFamily: "Arial, Helvetica, sans-serif" }}>
      <div className="relative flex justify-between bg-[#0d4f8b] px-[2em] py-[0.5em] text-[0.8em] text-white">
        <span>Mon to Fri 9 to 5 | info@harbourphysio.example</span>
        <span className="relative font-bold">
          Call: 01234 567890
          {pins && <Pin n={3} className="top-1/2 -left-9 -translate-y-1/2 md:-left-11" />}
        </span>
      </div>
      <div className="flex items-end gap-[1em] px-[2em] py-[1.2em]">
        <span className="text-[2em] font-bold tracking-[0.06em] text-[#1e73be]">HARBOUR PHYSIO</span>
        <span className="pb-[0.3em] italic text-[#888]">Physiotherapy Services</span>
      </div>
      <div className="flex bg-[#1e73be] px-[1em] text-[0.9em] text-white">
        {["Home", "About Us", "Services", "Gallery", "News", "Testimonials", "FAQ", "Contact Us"].map((l) => (
          <span key={l} className="border-r border-white/30 px-[1.2em] py-[0.8em]">
            {l}
          </span>
        ))}
      </div>
      <div className="flex h-[27em] flex-col items-center justify-center bg-[linear-gradient(#dcdcdc,#a9a9a9)] px-[4em] text-center">
        <span className="relative text-[3.6em] font-bold [text-shadow:2px_2px_0_#fff]">
          Welcome To Our Website!
          {pins && <Pin n={1} className="top-0 -right-3 -translate-y-1/2 translate-x-full" />}
        </span>
        <span className="mt-[0.8em] text-[1.15em] text-[#555]">We are a leading provider of quality physiotherapy solutions for all your needs.</span>
        <span className="relative mt-[2em] flex gap-[0.8em] text-[0.95em] text-white">
          {pins && <Pin n={2} className="top-1/2 -left-3 -translate-x-full -translate-y-1/2" />}
          {[
            ["Learn More", "#1e73be"],
            ["Read More", "#5cb85c"],
            ["Our Services", "#f0ad4e"],
            ["Contact Us", "#8e44ad"],
            ["Click Here", "#5bc0de"],
          ].map(([l, c]) => (
            <span key={l} className="rounded-[0.25em] px-[1.1em] py-[0.6em] font-bold" style={{ background: c }}>
              {l}
            </span>
          ))}
        </span>
      </div>
      <div className="grid flex-1 grid-cols-3 gap-[2em] px-[4em] py-[2em]">
        {["Our Mission", "Our Vision", "Our Values"].map((t) => (
          <div key={t}>
            <span className="block text-[1.3em] font-bold text-[#1e73be]">{t}</span>
            <span className="mt-[0.8em] block h-[0.55em] w-full bg-[#ddd]" />
            <span className="mt-[0.5em] block h-[0.55em] w-[92%] bg-[#ddd]" />
            <span className="mt-[0.5em] block h-[0.55em] w-[70%] bg-[#ddd]" />
          </div>
        ))}
      </div>
      <div className="bg-[#444] px-[2em] py-[0.7em] text-[0.75em] text-[#bbb]">© 2016 Harbour Physio. All Rights Reserved. | Website by Template Co.</div>
    </div>
  );
}

/** After: one promise, one button, and the next free slot. */
export function NewSite() {
  return (
    <div className="flex h-full flex-col bg-[#f7f5f1] text-ink">
      <div className="flex items-center justify-between px-[4em] py-[1.75em]">
        <span className="flex items-center gap-[0.5em] text-[1.25em] font-bold tracking-[-0.03em]">
          <svg viewBox="0 0 24 24" className="size-[1.3em]">
            <circle cx="12" cy="12" r="12" fill="#2A4C9E" />
            <path d="M5 14c2.3-2.4 4.7-2.4 7 0s4.7 2.4 7 0" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
          </svg>
          Harbour Physio
        </span>
        <span className="flex gap-[2.25em] text-[0.95em] text-ink-muted">
          <span>Treatments</span>
          <span>Team</span>
          <span>Prices</span>
          <span>Find us</span>
        </span>
        <span className="rounded-full bg-sail px-[1.4em] py-[0.7em] text-[0.95em] font-semibold text-white">Book online</span>
      </div>
      <div className="grid grid-cols-[1.15fr_1fr] gap-[3.5em] px-[4em] pt-[2.5em]">
        <div className="pt-[1.5em]">
          <span className="text-[0.8em] font-semibold tracking-[0.18em] text-sail uppercase">Sports physiotherapy · Harbourside</span>
          <span className="mt-[0.4em] block text-[4.4em] leading-[0.98] font-semibold tracking-[-0.035em]">Back to the sport you love, sooner.</span>
          <span className="mt-[1.4em] block max-w-[28em] text-[1.15em] leading-[1.55] text-ink-muted">
            Assessment, treatment and a plan you can follow. Book online in a minute, any time of day.
          </span>
          <span className="mt-[2em] flex gap-[0.8em] text-[1em] font-semibold">
            <span className="rounded-full bg-sail px-[1.6em] py-[0.9em] text-white">Book an assessment →</span>
            <span className="rounded-full border-[0.1em] border-ink/25 px-[1.6em] py-[0.9em]">See prices</span>
          </span>
          <span className="mt-[2.2em] flex gap-[2em] text-[0.85em] text-ink-muted">
            <span>✓ Registered physios</span>
            <span>✓ Same-week slots</span>
            <span>✓ Free parking</span>
          </span>
        </div>
        <div className="relative h-[31em] overflow-hidden rounded-[1.5em] bg-sail">
          <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full">
            {[60, 110, 160, 210, 260].map((r) => (
              <circle key={r} cx="330" cy="330" r={r} fill="none" stroke="#fff" strokeOpacity={0.14} strokeWidth="1.5" />
            ))}
            <path d="M0 290c50-26 100-26 150 0s100 26 150 0 100-26 150 0" stroke="#fff" strokeOpacity=".35" strokeWidth="3" fill="none" />
            <path d="M0 330c50-26 100-26 150 0s100 26 150 0 100-26 150 0" stroke="#fff" strokeOpacity=".2" strokeWidth="3" fill="none" />
          </svg>
          <span className="absolute top-[2em] right-[2em] rounded-full bg-white/90 px-[1em] py-[0.5em] text-[0.8em] font-semibold text-sail">Reminder sent ✓</span>
          <span className="absolute bottom-[2.5em] left-[2.5em] w-[17em] rounded-[1em] bg-white p-[1.4em] shadow-[0_1em_2em_-1em_rgb(0_0_0/0.4)]">
            <span className="block text-[0.75em] font-semibold tracking-[0.14em] text-ink-muted uppercase">Next free</span>
            <span className="mt-[0.2em] block text-[1.7em] font-semibold tracking-[-0.02em]">Today, 17:30</span>
            <span className="block text-[0.9em] text-ink-muted">Follow-up · 30 min · Amina</span>
            <span className="mt-[1em] block rounded-full bg-sail py-[0.6em] text-center text-[0.9em] font-semibold text-white">Book this slot</span>
          </span>
        </div>
      </div>
      <div className="mt-auto grid grid-cols-4 gap-[1.2em] px-[4em] pb-[2.5em]">
        {[
          ["Injury assessment", "45 min · £65"],
          ["Follow-up", "30 min · £48"],
          ["Sports massage", "45 min · £55"],
          ["Return-to-run", "60 min · £75"],
        ].map(([t, d]) => (
          <span key={t} className="border-t-[0.1em] border-ink/15 pt-[0.8em]">
            <span className="block text-[1em] font-semibold">{t}</span>
            <span className="block text-[0.85em] text-ink-muted">{d}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
