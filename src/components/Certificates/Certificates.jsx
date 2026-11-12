import { ExternalLink } from "lucide-react";
import Section from "../Section";
import { cardClass } from "../ui";
import { certificates } from "../../data/portfolio";

export default function Certificates() {
  return (
    <Section id="certificates" title="Certificates">
      <ul className="grid gap-8 sm:grid-cols-2">
        {certificates.map((c) => (
          <li key={c.title}>
            <a
              href={c.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block h-full overflow-hidden ${cardClass}`}
            >
              <img
                src={c.image}
                alt={`${c.title} certificate`}
                loading="lazy"
                className="aspect-[7/5] w-full object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-105"
              />
              <div className="p-6">
                <div className="flex items-center justify-between gap-3 text-sm">
                  <span className="text-mute">{c.issuer}</span>
                  {c.note ? (
                    <span className="rounded-full border border-gold/20 bg-gold/10 px-3 py-0.5 text-xs font-semibold text-gold">
                      {c.note}
                    </span>
                  ) : null}
                </div>
                <h3 className="mt-3 font-display text-2xl font-semibold leading-tight">{c.title}</h3>
                <div className="mt-5 flex items-center justify-between text-sm text-mute">
                  <span>{c.term}</span>
                  <span className="inline-flex items-center gap-2">
                    View certificate
                    <ExternalLink size={16} className="text-gold" />
                  </span>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
