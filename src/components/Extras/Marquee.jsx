const words = [
  "Java",
  "TypeScript",
  "Next.js",
  "React",
  "Python",
  "SQL",
  "Tailwind CSS",
  "Cryptography",
  "AES",
  "PBKDF2",
  "Git",
  "Linux",
];

function Row({ hidden = false }) {
  return (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {words.map((w) => (
        <li key={w} className="flex items-center">
          <span className="px-8 font-display text-2xl font-semibold uppercase tracking-[0.25em] text-white/55 md:text-3xl">
            {w}
          </span>
          <span className="h-2 w-2 rotate-45 bg-gold/70" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

// Slow, endless stack ticker between the hero and the rest of the page.
export default function Marquee() {
  return (
    <div
      className="marquee relative overflow-hidden border-y border-line bg-black/20 py-6"
      style={{
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
      }}
    >
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
