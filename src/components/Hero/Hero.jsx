import { FaCode, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { links, profile } from "../../data/portfolio";
import Orbit from "./Orbit";
import Terminal from "./Terminal";

const textLink =
  "underline decoration-gold underline-offset-4 transition-colors hover:text-gold";

const rail = [
  { href: links.github, label: "GitHub", Icon: FaGithub },
  { href: links.linkedin, label: "LinkedIn", Icon: FaLinkedinIn },
  { href: links.codolio, label: "Codolio", Icon: FaCode },
];

export default function Hero() {
  return (
    <section id="home" className="relative pt-[72px]">
      {/* Social rail: only on wide screens, outside the content column. */}
      <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 flex-col items-center xl:flex">
        <span className="h-24 w-px bg-gradient-to-b from-transparent via-gold to-transparent" />
        <ul className="my-6 flex flex-col gap-6 text-xl text-mute">
          {rail.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="block transition-colors hover:text-gold"
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
        <span className="h-24 w-px bg-gradient-to-b from-gold to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-[84rem] items-center gap-12 px-6 py-12 md:px-10 lg:min-h-[calc(100svh-72px)] lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)] lg:gap-6 lg:py-8">
        <div className="rise">
          <p className="mb-3 flex items-center gap-4 text-lg font-medium text-gold">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold" aria-hidden="true" />
            <span>Hi, I'm</span>
          </p>

          <h1 className="font-display text-[length:clamp(2.9rem,min(8vw,13svh),5.75rem)] font-bold leading-[0.95] tracking-tight">
            <span className="block text-white">Yash</span>
            <span className="block text-name-red">Vardhan</span>
            <span className="block text-white">Singh</span>
          </h1>

          <p className="mt-4 h-8 text-base font-semibold uppercase tracking-[0.3em] text-gold sm:text-lg">
            <TypeAnimation
              sequence={[
                "Full-Stack Developer",
                2000,
                "Java Developer",
                2000,
                "Cybersecurity Enthusiast",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
            />
          </p>

          <p className="mt-4 max-w-xl text-lg leading-relaxed text-mute sm:text-xl">
            Third-year IT student. I build web apps with Next.js and TypeScript, and security tools
            in Java.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href="#projects"
              className="rounded-full bg-gold px-7 py-3 font-semibold text-ink transition-all hover:bg-gold-soft hover:shadow-[0_0_35px_rgba(212,160,23,.45)]"
            >
              View my work
            </a>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className={textLink}>
              Resume (PDF)
            </a>
            <a href="#contact" className={textLink}>
              Contact me
            </a>
          </div>

          <figure className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-l border-gold/50 pl-4">
            <blockquote className="font-display text-xl italic text-white/75">
              “The best is yet to be.”
            </blockquote>
            <figcaption className="text-[11px] uppercase tracking-[0.25em] text-mute">
              Robert Browning
            </figcaption>
          </figure>
        </div>

        {/* The orbit and terminal share one clipped, square box. Nothing positions outside it. */}
        <div className="rise hero-box relative mx-auto" style={{ animationDelay: "120ms" }}>
          <div className="relative lg:aspect-square">
            <div
              className="pointer-events-none absolute inset-0 hidden lg:block"
              style={{
                WebkitMaskImage: "radial-gradient(circle, #000 55%, transparent 71%)",
                maskImage: "radial-gradient(circle, #000 55%, transparent 71%)",
              }}
              aria-hidden="true"
            >
              <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B1E2D]/30 blur-[90px]" />
              <div className="absolute left-1/2 top-1/2 h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A017]/15 blur-[60px]" />
            </div>

            <div className="absolute inset-0 hidden lg:block">
              <Orbit />
            </div>

            <div className="relative lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[76%] lg:-translate-x-1/2 lg:-translate-y-1/2">
              <Terminal />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
