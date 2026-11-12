import {
  BrainCircuit,
  FileLock2,
  KeyRound,
  Lock,
  MessageSquare,
  Shield,
  TicketCheck,
  Workflow,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Section from "../Section";
import { cardClass, chipClass } from "../ui";
import { projects } from "../../data/portfolio";
import { EncrypterLogo, ResolveAILogo } from "./Logos";

const featureIcons = {
  chat: MessageSquare,
  ticket: TicketCheck,
  brain: BrainCircuit,
  workflow: Workflow,
  lock: Lock,
  key: KeyRound,
  file: FileLock2,
  shield: Shield,
};

const logos = { ResolveAI: ResolveAILogo, "Secure File Encrypter": EncrypterLogo };

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="space-y-8">
        {projects.map((project) => {
          const Logo = logos[project.name];
          return (
            <article
              key={project.name}
              className={`group grid overflow-hidden lg:grid-cols-[minmax(0,34%)_minmax(0,1fr)] ${cardClass}`}
            >
              <div className="flex items-center justify-center bg-[#11151D] p-8">
                <div className="flex aspect-[3/4] w-full max-w-[13rem] items-center justify-center rounded-t-[999px] rounded-b-xl border border-gold/35 bg-gradient-to-b from-gold/[0.07] to-transparent shadow-[inset_0_0_0_6px_#11151D,inset_0_0_0_7px_rgba(212,160,23,.25)] transition-colors group-hover:border-gold/60">
                  {Logo ? (
                    <Logo className="h-28 w-28 drop-shadow-[0_0_26px_rgba(212,160,23,.35)] transition-transform duration-500 motion-safe:group-hover:scale-105" />
                  ) : (
                    <Shield size={72} strokeWidth={1.2} className="text-gold" />
                  )}
                </div>
              </div>

              <div className="p-7 lg:p-9">
                <p className="mb-3 font-mono text-xs text-mute">
                  ~/projects/{project.name.toLowerCase().replace(/\s+/g, "-")}
                </p>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="font-display text-3xl font-semibold md:text-4xl">{project.name}</h3>
                  <p className="text-sm text-mute">{project.date}</p>
                </div>
                <p className="mt-2 text-fg/80">{project.summary}</p>

                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <li key={tech} className={chipClass}>
                      {tech}
                    </li>
                  ))}
                </ul>

                <p className="mt-5 max-w-[65ch] text-[15px] leading-7 text-mute">{project.description}</p>

                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {project.features.map((f) => {
                    const Icon = featureIcons[f.icon];
                    return (
                      <li key={f.text} className="flex items-start gap-3 text-sm text-[#C4C4C4]">
                        <Icon size={18} className="mt-0.5 shrink-0 text-gold" />
                        <span>{f.text}</span>
                      </li>
                    );
                  })}
                </ul>

                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl border border-gold/30 px-5 py-3 text-sm transition-colors hover:border-gold hover:bg-gold/5"
                >
                  <FaGithub size={18} />
                  View source on GitHub
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
