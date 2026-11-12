import { nav } from "../data/portfolio";
import Reveal from "./Extras/Reveal";

const romans = ["I", "II", "III", "IV", "V", "VI"];
const taglines = {
  about: "Who I am",
  projects: "What I've built",
  skills: "What I work with",
  coding: "How I train",
  certificates: "What I've earned",
  contact: "Let's talk",
};

// One shared wrapper keeps every section's spacing and heading column identical,
// so sections can't drift into each other.
export default function Section({ id, title, children }) {
  const index = nav.findIndex((item) => item.id === id) + 1;
  const numeral = romans[index - 1] ?? "";
  const tagline = taglines[id] ?? "";

  return (
    <section id={id} className="scroll-mt-[72px] border-t border-line py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 md:grid-cols-[16rem_minmax(0,1fr)] md:gap-12 md:px-10">
        <header className="md:sticky md:top-28 md:self-start">
          <p className="flex items-center gap-3">
            <span className="font-display text-xl font-semibold tracking-[0.2em] text-gold">{numeral}</span>
            <span className="h-px w-8 bg-gradient-to-r from-gold to-transparent" aria-hidden="true" />
            <span className="font-display text-xl italic text-mute">{tagline}</span>
          </p>
          <h2 className="mt-4 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-6xl">
            {title}
          </h2>
        </header>
        <Reveal className="min-w-0">{children}</Reveal>
      </div>
    </section>
  );
}
