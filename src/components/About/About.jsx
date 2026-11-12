import Section from "../Section";
import { highlights, journey, profile } from "../../data/portfolio";

const facts = [
  ["Studying", "B.Tech in Information Technology, GL Bajaj Institute of Technology and Management, 2024 to 2028"],
  ["Focus", "Full-stack web development and cybersecurity"],
  ["Based in", profile.location],
];

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-[65ch] space-y-5 text-lg">
        <p>
          I'm a third-year B.Tech student in Information Technology at GL Bajaj, Greater Noida. Most
          of my code is in Java and TypeScript.
        </p>
        <p className="text-mute">
          This year I built ResolveAI, a support-ticket dashboard in Next.js, and a command-line file
          encrypter in Java. I practise data structures and algorithms regularly, and I led a team at
          Smart India Hackathon 2026.
        </p>
      </div>

      <ul className="mt-10 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
        {highlights.map((h) => (
          <li
            key={h.label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center"
          >
            <p className="font-display text-4xl font-bold leading-none text-gold">{h.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-mute">{h.label}</p>
          </li>
        ))}
      </ul>

      <dl className="mt-12 max-w-3xl">
        {facts.map(([label, value]) => (
          <div
            key={label}
            className="grid gap-1 border-t border-line py-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8"
          >
            <dt className="text-mute">{label}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>

      <h3 className="mt-16 font-display text-3xl font-semibold">Journey</h3>
      <ol className="mt-8 max-w-3xl space-y-8 border-l border-white/10 pl-8">
        {journey.map((step) => (
          <li key={step.title} className="relative">
            <span
              className="absolute -left-[38px] top-2 h-3 w-3 rotate-45 border border-gold bg-[#05060A] "
              aria-hidden="true"
            />
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-mute">{step.when}</p>
            <p className="mt-1 font-display text-2xl font-semibold leading-tight">{step.title}</p>
            <p className="mt-1 text-mute">{step.detail}</p>
          </li>
        ))}
      </ol>

    </Section>
  );
}
