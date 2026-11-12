// Rajput-inspired ornaments: a lozenge chain (as seen on havelis and palace borders)
// drawn in the existing gold. Purely decorative.
export function Lozenge({ className = "", centered = false }) {
  return (
    <svg
      className={className}
      width="170"
      height="14"
      viewBox="0 0 170 14"
      fill="none"
      aria-hidden="true"
      style={centered ? { marginInline: "auto" } : undefined}
    >
      <defs>
        <linearGradient id="lzL" x1="0" x2="1">
          <stop offset="0" stopColor="#D4A017" stopOpacity="0" />
          <stop offset="1" stopColor="#D4A017" />
        </linearGradient>
        <linearGradient id="lzR" x1="0" x2="1">
          <stop offset="0" stopColor="#D4A017" />
          <stop offset="1" stopColor="#D4A017" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 7H66" stroke="url(#lzL)" strokeWidth="1" />
      <path d="M104 7H170" stroke="url(#lzR)" strokeWidth="1" />
      <path d="M85 0.5 92 7 85 13.5 78 7Z" fill="#D4A017" />
      <path d="M85 3.5 89 7 85 10.5 81 7Z" fill="#05060A" />
      <path d="M70 7 74 3 78 7 74 11Z" stroke="#D4A017" strokeWidth="1" />
      <path d="M92 7 96 3 100 7 96 11Z" stroke="#D4A017" strokeWidth="1" />
    </svg>
  );
}
