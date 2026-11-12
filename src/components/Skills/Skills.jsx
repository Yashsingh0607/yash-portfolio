import { Code2, Database, Globe, Shield, Wrench } from "lucide-react";
import Section from "../Section";
import { cardClass, chipClass } from "../ui";
import { skills } from "../../data/portfolio";

const icons = {
  Languages: Code2,
  Web: Globe,
  "Core CS": Database,
  Security: Shield,
  Tools: Wrench,
};

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((row) => {
          const Icon = icons[row.group] ?? Code2;
          return (
            <div key={row.group} className={`p-7 last:sm:col-span-2 ${cardClass}`}>
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold/10">
                  <Icon size={26} className="text-gold" />
                </span>
                <h3 className="font-display text-3xl font-semibold">{row.group}</h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2">
                {row.items.map((item) => (
                  <li key={item} className={chipClass}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
