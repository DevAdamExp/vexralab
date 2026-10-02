import Link from "next/link";
import { SERVICES } from "@/data/site";
import { Mark } from "@/components/ui/Mark";
import { Seen, i } from "@/components/ui/Seen";
import { CONTAINER, DISPLAY, LEDE } from "@/components/ui/tokens";
import styles from "./services.module.css";

/** Paper opening: the promise, then an index of the five mornings. */
export function ServicesOpening() {
  return (
    <section aria-labelledby="services-title" className={`bg-paper text-ink ${styles.inkFocus}`}>
      <div className={`${CONTAINER} pt-36 pb-24 md:pt-48 md:pb-32`}>
        <p className="label load text-ink-muted">Services</p>
        <h1 id="services-title" className={`load isolate mt-6 max-w-[15ch] ${DISPLAY}`} style={i(1)}>
          Five things we make. Each one starts with a{" "}
          <Mark gesture="highlight" onLoad delay={1100}>
            feeling.
          </Mark>
        </h1>
        <p className={`load mt-8 text-ink-muted ${LEDE}`} style={i(2)}>
          Every service here begins with a thought you&rsquo;ve had at 2 AM. Then the feeling we build toward. Then the work itself, drawn so you can see exactly what you get.
        </p>

        <nav aria-label="Services on this page" className="mt-20 md:mt-28">
          <p className="label text-ink-muted">Jump to</p>
          <Seen as="ol" className="mt-5 border-t border-ink/15">
            {SERVICES.map((s, k) => (
              <li key={s.id} className="rise border-b border-ink/15" style={i(k)}>
                <Link
                  href={`#${s.id}`}
                  className="group relative isolate grid min-h-11 grid-cols-[1fr_auto] items-center gap-x-6 gap-y-1 overflow-hidden px-1 py-6 transition-colors duration-500 ease-water hover:text-fg focus-visible:text-fg md:grid-cols-[minmax(0,7fr)_minmax(0,4fr)_auto] md:px-4 md:py-7"
                >
                  <span aria-hidden="true" className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-sea transition-transform duration-700 ease-water group-hover:scale-y-100 group-focus-visible:scale-y-100" />
                  <span className="voice text-[clamp(1.6rem,3.4vw,2.75rem)] leading-[1.1]">{s.feeling}</span>
                  <span className="col-start-1 row-start-2 text-[15px] font-medium text-ink-muted transition-colors duration-500 group-hover:text-fg/80 group-focus-visible:text-fg/80 md:col-start-2 md:row-start-1 md:text-[17px]">
                    {s.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="col-start-2 row-span-2 row-start-1 grid size-11 place-items-center rounded-full border border-ink/20 transition-[background-color,border-color,color] duration-500 ease-water group-hover:border-lamp group-hover:bg-lamp group-hover:text-ink group-focus-visible:border-lamp group-focus-visible:bg-lamp group-focus-visible:text-ink md:col-start-3 md:row-span-1"
                  >
                    <span className="transition-transform duration-500 ease-water group-hover:translate-y-0.5 group-focus-visible:translate-y-0.5">↓</span>
                  </span>
                </Link>
              </li>
            ))}
          </Seen>
        </nav>
      </div>
    </section>
  );
}
