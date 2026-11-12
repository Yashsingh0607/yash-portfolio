import Section from "../Section";
import { links, profile } from "../../data/portfolio";

const rows = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
  { label: "LinkedIn", value: "yash-vardhan-singh-49a6903b0", href: links.linkedin, external: true },
  { label: "GitHub", value: "Yashsingh0607", href: links.github, external: true },
];

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-[65ch] text-lg">
        For opportunities, collaborations, or a conversation about engineering, email is the
        quickest way to reach me.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block rounded-full bg-gold px-8 py-3 font-semibold text-ink transition-all hover:bg-gold-soft hover:shadow-[0_0_35px_rgba(212,160,23,.45)]"
      >
        Send an email
      </a>

      <dl className="mt-10 max-w-3xl">
        {rows.map((row) => (
          <div
            key={row.label}
            className="grid gap-1 border-t border-line py-4 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-8"
          >
            <dt className="text-mute">{row.label}</dt>
            <dd className="break-words">
              <a
                href={row.href}
                {...(row.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="underline decoration-gold underline-offset-4 transition-colors hover:text-gold"
              >
                {row.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
