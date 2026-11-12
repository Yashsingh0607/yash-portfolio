import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { nav, profile } from "../../data/portfolio";

const shortcut =
  typeof navigator !== "undefined" && /Mac|iPhone|iPad/i.test(navigator.userAgent) ? "⌘ K" : "Ctrl K";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((el) => observer.observe(el));

    const onScroll = () => {
      if (window.scrollY < 200) setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const linkClass = (id) =>
    `transition-colors hover:text-gold ${active === id ? "text-gold" : "text-fg"}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-[72px] border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-full w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#home" className="group flex items-center gap-3" aria-label="Back to top">
          <span className="flex h-10 w-10 rotate-45 items-center justify-center rounded-[6px] border border-gold/70 bg-gold/5 shadow-[0_0_18px_rgba(212,160,23,.2)] transition-shadow group-hover:shadow-[0_0_26px_rgba(212,160,23,.45)]">
            <span className="-rotate-45 font-display text-lg font-bold leading-none text-gold">YS</span>
          </span>
          <span className="hidden font-display text-xl font-semibold tracking-wide text-fg sm:block">
            Yash Vardhan Singh
          </span>
        </a>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-8 font-mono text-sm tracking-wide">
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={linkClass(item.id)}
                  aria-current={active === item.id ? "true" : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("open-palette"))}
            className="flex items-center gap-2.5 rounded-full border border-line px-3.5 py-1.5 text-sm text-mute transition-colors hover:border-gold/50 hover:text-gold"
            title={`Jump to any section or link (${shortcut})`}
            aria-label="Quick jump to any section"
          >
            <Search size={14} />
            Quick jump
            <kbd className="rounded border border-white/15 px-1.5 py-px font-mono text-[11px]">{shortcut}</kbd>
          </button>
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-gold/50 px-5 py-2 text-[15px] tracking-wide transition-colors hover:border-gold hover:text-gold"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 p-2 text-fg lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full border-b border-line bg-ink px-6 py-3 lg:hidden"
        >
          <ul>
            {nav.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`block py-3 ${linkClass(item.id)}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-3 text-fg hover:text-gold"
              >
                Resume (PDF)
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
