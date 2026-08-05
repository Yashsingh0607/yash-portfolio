export default function ProfileCard({
  icon: Icon,
  title,
  value,
  label,
  href,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
        group
        rounded-[24px]
        border
        border-[#D4A017]/15
        bg-[#090B10]
        p-8
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-[#D4A017]/40
        hover:shadow-[0_20px_50px_rgba(212,160,23,.08)]
      "
    >
      {/* Icon */}

      <div
        className="
          mb-8
          flex
          h-20
          w-20
          items-center
          justify-center
          rounded-2xl
          border
          border-[#D4A017]/10
          bg-[#101216]
          transition-all
          duration-300
          group-hover:border-[#D4A017]/40
          group-hover:bg-[#15181F]
        "
      >
        <Icon
          size={42}
          className="
            text-[#D4A017]
            transition-transform
            duration-300
            group-hover:scale-110
          "
        />
      </div>

      {/* Title */}

      <h3
        style={{ fontFamily: "var(--font-heading)" }}
        className="text-[30px]"
      >
        {title}
      </h3>

      {/* Value */}

      <h2 className="mt-6 text-[46px] font-bold text-[#D4A017]">
        {value}
      </h2>

      {/* Label */}

      <p className="mt-2 text-[16px] text-[#A8A8A8]">
        {label}
      </p>

      {/* Footer */}

      <div className="mt-8 flex items-center justify-between">
        <span className="text-sm tracking-wider text-[#D4A017]">
          View Profile
        </span>

        <span
          className="
            text-xl
            text-[#D4A017]
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </div>
    </a>
  );
}