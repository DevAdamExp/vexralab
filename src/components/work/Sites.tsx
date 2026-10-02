// Two homepages for the same fictional clinic, drawn in em on a 90em canvas (see Frames.Canvas).
// Blue Sail is the clinic's brand colour; Deep Sea and Decor Yellow carry its panels.

/** A numbered red pin pointing at a problem on the old site. Sized in px so it stays legible at any scale. */
function Pin({ n, className }: { n: number; className: string }) {
  return (
    <span className={`absolute z-10 grid size-6 place-items-center rounded-full bg-red font-ui text-[12px] font-bold text-fg shadow-[0_0_0_3px_#f1ece5,0_6px_16px_-4px_rgb(0_0_0/0.5)] md:size-8 md:text-[14px] ${className}`}>
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

/** After: one promise, one button, and the next free slot. Flat brand panels, no drawn scenery. */
export function NewSite() {
  return (
    <div className="flex h-full flex-col bg-[#f7f5f1] font-ui text-ink">
      <div className="flex items-center justify-between px-[4em] py-[1.75em]">
        <span className="flex items-center gap-[0.55em] text-[1.2em] font-semibold tracking-[-0.01em]">
          <span className="grid size-[1.5em] place-items-center rounded-full bg-sail text-[0.75em] text-white">H</span>
          Harbour Physio
        </span>
        <span className="flex gap-[2.25em] text-[0.95em] text-ink-muted">
          <span>Treatments</span>
          <span>Team</span>
          <span>Prices</span>
          <span>Find us</span>
        </span>
        <span className="rounded-full bg-sail px-[1.4em] py-[0.7em] text-[0.9em] font-semibold text-white">Book online</span>
      </div>
      <div className="grid flex-1 grid-cols-[1.1fr_1fr] gap-[3em] px-[4em] pt-[2em] pb-[3em]">
        <div className="flex flex-col justify-center pb-[2em]">
          <span className="font-mono text-[0.75em] tracking-[0.2em] text-sail uppercase">Sports physio · Harbourside</span>
          <span className="mt-[0.5em] block font-display text-[5em] leading-[0.95] tracking-[-0.02em]">Back to the sport you love, sooner.</span>
          <span className="mt-[1.2em] block max-w-[26em] text-[1.15em] leading-[1.55] text-ink-muted">Book online in a minute, any time of day.</span>
          <span className="mt-[2em] flex gap-[0.8em] text-[0.95em] font-semibold">
            <span className="rounded-full bg-sail px-[1.6em] py-[0.95em] text-white">Book an assessment →</span>
            <span className="rounded-full border-[0.1em] border-ink/25 px-[1.6em] py-[0.95em]">See prices</span>
          </span>
          <span className="mt-[2.4em] flex gap-[1.6em] text-[0.85em] text-ink-muted">
            <span>🏅 Registered physios</span>
            <span>🅿️ Free parking</span>
          </span>
        </div>
        <div className="grid grid-cols-2 grid-rows-[1fr_auto] gap-[1em]">
          <div className="relative col-span-2 overflow-hidden rounded-[1.4em] bg-sea">
            <span className="absolute -top-[30%] -right-[12%] aspect-square w-[55%] rounded-full bg-sea-2" />
            <span className="absolute top-[1.6em] right-[1.6em] rounded-full bg-white/95 px-[1em] py-[0.5em] text-[0.8em] font-semibold text-sea">💬 Reminder sent</span>
            <span className="absolute bottom-[1.8em] left-[1.8em] w-[17em] rounded-[1em] bg-white p-[1.3em] shadow-[0_1.2em_2.4em_-1em_rgb(0_0_0/0.45)]">
              <span className="block font-mono text-[0.7em] tracking-[0.16em] text-ink-muted uppercase">Next free</span>
              <span className="mt-[0.2em] block font-display text-[2em] leading-none">Today, 17:30</span>
              <span className="mt-[0.4em] block text-[0.85em] text-ink-muted">Follow-up · 30 min · Amina</span>
              <span className="mt-[1em] block rounded-full bg-lamp py-[0.65em] text-center text-[0.9em] font-semibold text-ink">Book this slot</span>
            </span>
          </div>
          <span className="rounded-[1.2em] bg-lamp p-[1.2em]">
            <span className="block text-[1.6em]">📅</span>
            <span className="mt-[0.4em] block font-display text-[1.35em] leading-tight">Same-week slots</span>
          </span>
          <span className="rounded-[1.2em] bg-sail p-[1.2em] text-white">
            <span className="block text-[1.6em]">⏱️</span>
            <span className="mt-[0.4em] block font-display text-[1.35em] leading-tight">From £48</span>
          </span>
        </div>
      </div>
    </div>
  );
}
