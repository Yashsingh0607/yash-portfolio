import Section from "../Section";
import { cardClass } from "../ui";
import { coding, links } from "../../data/portfolio";

export default function CodingProfiles() {
  return (
    <Section id="coding" title="Coding">
      <p className="max-w-[65ch] text-lg">{coding.intro}</p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-3">
        {coding.platforms.map((p) => (
          <li key={p.name}>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block h-full p-6 ${cardClass}`}
            >
              <p className="font-display text-2xl font-semibold group-hover:text-gold">{p.name}</p>
              <p className="mt-4 font-display text-5xl font-semibold text-gold">{p.figure}</p>
              <p className="mt-1 text-mute">{p.detail}</p>
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-mute">{coding.solved}</p>
      <a
        href={links.codolio}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
      >
        Still solving, still learning. Follow along on Codolio →
      </a>
    </Section>
  );
}
