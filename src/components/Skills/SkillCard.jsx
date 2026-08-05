export default function SkillCard({
  icon: Icon,
  title,
  description,
  skills,
}) {
  return (
    <div
      className="
      h-[270px]
      rounded-[22px]
      border
      border-[#D4A017]/15
      bg-[#090B10]
      p-8
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-[#D4A017]/35
      hover:shadow-[0_18px_45px_rgba(212,160,23,.08)]
      "
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4A017]/10">

        <Icon
          size={34}
          className="text-[#D4A017]"
        />

      </div>

      <h3
        style={{ fontFamily: "var(--font-heading)" }}
        className="mb-4 text-[34px]"
      >
        {title}
      </h3>

      <p className="mb-6 text-[17px] leading-8 text-[#A7A7A7]">
        {description}
      </p>

      <div className="flex flex-wrap gap-3">

        {skills.map((skill) => (
          <span
            key={skill}
            className="
            rounded-full
            border
            border-[#D4A017]/20
            bg-[#D4A017]/5
            px-4
            py-1.5
            text-[15px]
            text-[#D4A017]
            "
          >
            {skill}
          </span>
        ))}

      </div>
    </div>
  );
}