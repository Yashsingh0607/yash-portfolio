// Rotating rings and arcs. Everything is sized in percentages of its parent box,
// and the parent clips it, so the orbit can never spill over the navbar or other sections.
const rings = [
  { inset: "4%", style: "border-[#D4A017]/30" },
  { inset: "8.5%", style: "border-white/10" },
  { inset: "13%", style: "border-[#D4A017]/22" },
  { inset: "17.5%", style: "border-white/10" },
  { inset: "22%", style: "border-[#D4A017]/22" },
  { inset: "6.2%", style: "border-dashed border-[#D4A017]/45" },
  { inset: "15.2%", style: "border-dashed border-[#D4A017]/32" },
];

const nodes = [
  "left-[14.5%] top-[21%]",
  "right-[15.6%] top-[19%]",
  "left-[19.5%] bottom-[16%]",
  "right-[18.2%] bottom-[14.8%]",
];

// Small glowing satellites riding their own rings.
const satellites = [
  { inset: "4%", size: "h-3.5 w-3.5", spin: "orbit-fast", delay: "0s", color: "#F4C95D" },
  { inset: "13%", size: "h-3 w-3", spin: "orbit-slow-rev", delay: "-43s", color: "#B6243A" },
  { inset: "22%", size: "h-2.5 w-2.5", spin: "orbit-fast", delay: "-42s", color: "#D4A017" },
];

export default function Orbit() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div className="orbit-spin absolute inset-0">
        {rings.map((ring) => (
          <div
            key={ring.inset + ring.style}
            className={`absolute rounded-full border ${ring.style}`}
            style={{ inset: ring.inset }}
          />
        ))}

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 860 860" fill="none">
          <defs>
            <linearGradient id="arcGold" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#F4C95D" />
              <stop offset="1" stopColor="#D4A017" />
            </linearGradient>
          </defs>
          <path d="M110 290 A360 360 0 0 1 760 240" stroke="url(#arcGold)" strokeWidth="3.5" opacity=".9" strokeLinecap="round" />
          <path d="M190 730 A310 310 0 0 0 690 760" stroke="url(#arcGold)" strokeWidth="2.6" opacity=".6" strokeLinecap="round" />
          <path d="M175 180 A430 430 0 0 1 720 160" stroke="#D4A017" strokeWidth="1.6" opacity=".4" strokeLinecap="round" />
          <path d="M120 560 A360 360 0 0 1 210 180" stroke="#D4A017" strokeWidth="1.6" opacity=".32" strokeLinecap="round" />
          <path d="M650 170 A300 300 0 0 1 770 420" stroke="#D4A017" strokeWidth="1.6" opacity=".32" strokeLinecap="round" />
          <path d="M250 700 A220 220 0 0 0 610 690" stroke="#D4A017" strokeWidth="1.6" opacity=".35" strokeLinecap="round" />
        </svg>

        {nodes.map((pos) => (
          <div
            key={pos}
            className={`absolute h-3 w-3 rounded-full border border-[#D4A017] bg-[#05060A] shadow-[0_0_12px_rgba(212,160,23,.6)] ${pos}`}
          />
        ))}
      </div>

      {satellites.map((s) => (
        <div
          key={s.inset + s.delay}
          className={`absolute rounded-full ${s.spin}`}
          style={{ inset: s.inset, animationDelay: s.delay }}
        >
          <span
            className={`absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full ${s.size}`}
            style={{ background: s.color, boxShadow: `0 0 18px 4px ${s.color}99` }}
          />
        </div>
      ))}

      <div className="core-pulse absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#F4C95D] to-[#D4A017]" />
    </div>
  );
}
