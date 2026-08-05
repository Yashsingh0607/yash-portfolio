import { motion } from "framer-motion";

export default function Orbit() {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        duration: 220,
        repeat: Infinity,
        ease: "linear",
      }}
      className="relative h-[860px] w-[860px]"
    >
      {/* ================= RED GLOW ================= */}

      <div className="absolute left-1/2 top-1/2 h-[760px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8B1E2D]/20 blur-[170px]" />

      {/* ================= GOLD GLOW ================= */}

      <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A017]/12 blur-[90px]" />

      {/* ================= RINGS ================= */}

      <div className="absolute inset-[55px] rounded-full border border-[#D4A017]/12" />

      <div className="absolute inset-[90px] rounded-full border border-white/5" />

      <div className="absolute inset-[125px] rounded-full border border-[#D4A017]/10" />

      <div className="absolute inset-[160px] rounded-full border border-white/5" />

      <div className="absolute inset-[195px] rounded-full border border-[#D4A017]/8" />

      {/* ================= DASHED ================= */}

      <div className="absolute inset-[72px] rounded-full border border-dashed border-[#D4A017]/30" />

      <div className="absolute inset-[142px] rounded-full border border-dashed border-[#D4A017]/18" />

      {/* ================= SVG ARCS ================= */}

      <svg
        className="absolute inset-0"
        viewBox="0 0 860 860"
        fill="none"
      >
        <path
          d="M110 290 A360 360 0 0 1 760 240"
          stroke="#D4A017"
          strokeWidth="2"
          opacity=".55"
          strokeLinecap="round"
        />

        <path
          d="M190 730 A310 310 0 0 0 690 760"
          stroke="#D4A017"
          strokeWidth="1.6"
          opacity=".35"
          strokeLinecap="round"
        />

        <path
          d="M175 180 A430 430 0 0 1 720 160"
          stroke="#D4A017"
          strokeWidth="1"
          opacity=".25"
          strokeLinecap="round"
        />

        <path
          d="M120 560 A360 360 0 0 1 210 180"
          stroke="#D4A017"
          strokeWidth="1"
          opacity=".18"
          strokeLinecap="round"
        />

        <path
          d="M650 170 A300 300 0 0 1 770 420"
          stroke="#D4A017"
          strokeWidth="1"
          opacity=".18"
          strokeLinecap="round"
        />

        <path
          d="M250 700 A220 220 0 0 0 610 690"
          stroke="#D4A017"
          strokeWidth="1"
          opacity=".20"
          strokeLinecap="round"
        />
      </svg>

      {/* ================= DECORATIVE NODES ================= */}

      <div className="absolute left-[140px] top-[190px] h-3 w-3 rounded-full border border-[#D4A017] bg-[#05060A]" />

      <div className="absolute right-[150px] top-[175px] h-3 w-3 rounded-full border border-[#D4A017] bg-[#05060A]" />

      <div className="absolute left-[180px] bottom-[150px] h-3 w-3 rounded-full border border-[#D4A017] bg-[#05060A]" />

      <div className="absolute right-[170px] bottom-[140px] h-3 w-3 rounded-full border border-[#D4A017] bg-[#05060A]" />

      {/* ================= STARS ================= */}

      <div className="absolute left-[90px] top-[150px] h-[2px] w-[2px] rounded-full bg-white/70" />

      <div className="absolute right-[120px] top-[250px] h-[2px] w-[2px] rounded-full bg-white/60" />

      <div className="absolute left-[140px] bottom-[240px] h-[2px] w-[2px] rounded-full bg-white/60" />

      <div className="absolute right-[170px] bottom-[140px] h-[2px] w-[2px] rounded-full bg-white/70" />

      <div className="absolute left-[270px] top-[90px] h-[2px] w-[2px] rounded-full bg-white/50" />

      <div className="absolute right-[240px] bottom-[80px] h-[2px] w-[2px] rounded-full bg-white/50" />

      {/* ================= CENTER ================= */}

      <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A017] shadow-[0_0_80px_rgba(212,160,23,.95)]" />
    </motion.div>
  );
}