import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { links, nav, profile } from "../../data/portfolio";

const items = [
  { label: "Home", id: "home", kind: "Go to" },
  ...nav.map((n) => ({ label: n.label, id: n.id, kind: "Go to" })),
  { label: "Resume (PDF)", href: profile.resume, kind: "Open" },
  { label: "GitHub", href: links.github, kind: "Open" },
  { label: "LinkedIn", href: links.linkedin, kind: "Open" },
  { label: "Codolio", href: links.codolio, kind: "Open" },
  { label: "Send an email", href: `mailto:${profile.email}`, kind: "Open" },
];

// Quick jump: press Ctrl (or ⌘) + K, or "/", to jump to any section or link.
export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((item) => item.label.toLowerCase().includes(q));
  }, [query]);

  const show = useCallback(() => {
    setQuery("");
    setActive(0);
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      const tag = e.target?.tagName;
      const typing = tag === "INPUT" || tag === "TEXTAREA" || e.target?.isContentEditable;
      const combo = e.key.toLowerCase() === "k" && (e.ctrlKey || e.metaKey);
      if (!open && (combo || (e.key === "/" && !typing))) {
        e.preventDefault();
        show();
      }
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", show);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", show);
    };
  }, [open, show, close]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const run = (item) => {
    close();
    if (item.id) {
      setTimeout(() => document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" }), 0);
    } else if (item.href.startsWith("mailto:")) {
      window.location.href = item.href;
    } else {
      window.open(item.href, "_blank", "noopener,noreferrer");
    }
  };

  const onInputKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && filtered[active]) {
      e.preventDefault();
      run(filtered[active]);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-start justify-center bg-black/65 px-4 pt-[15vh] backdrop-blur-sm"
      onMouseDown={close}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Quick navigation"
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-gold/30 bg-[#090B10] shadow-[0_30px_100px_rgba(0,0,0,.7),0_0_60px_rgba(212,160,23,.12)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/5 px-5 py-4">
          <span className="font-mono text-gold">›</span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setActive(0);
            }}
            onKeyDown={onInputKey}
            placeholder="Where would you like to go?"
            aria-label="Search sections and links"
            className="w-full bg-transparent font-mono text-sm text-white outline-none placeholder:text-[#7E8793]"
          />
          <kbd className="rounded border border-white/10 px-1.5 py-0.5 font-mono text-[10px] text-[#7E8793]">
            esc
          </kbd>
        </div>

        <ul className="max-h-72 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <li className="px-4 py-6 text-center font-mono text-sm text-[#7E8793]">No match</li>
          )}
          {filtered.map((item, i) => (
            <li key={item.label}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => run(item)}
                className={`flex w-full items-center justify-between rounded-lg px-4 py-2.5 text-left transition-colors ${
                  i === active ? "bg-gold/10 text-gold" : "text-fg"
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#7E8793]">
                  {item.kind}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <p className="border-t border-white/5 px-5 py-3 font-mono text-[11px] text-[#7E8793]">
          Use ↑ ↓ to move · Enter to open · Esc to close
        </p>
      </div>
    </div>
  );
}
