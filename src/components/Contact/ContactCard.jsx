export default function ContactCard({
  icon: Icon,
  title,
  value,
  href,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="
      flex
      items-center
      gap-5
      rounded-[20px]
      border
      border-[#D4A017]/15
      bg-[#090B10]
      p-6
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-[#D4A017]/35
      hover:shadow-[0_15px_45px_rgba(212,160,23,.08)]
      "
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#D4A017]/10">
        <Icon size={28} className="text-[#D4A017]" />
      </div>

      <div>
        <p className="text-sm text-[#D4A017]">{title}</p>

        <p className="mt-1 text-[17px] text-white">
          {value}
        </p>
      </div>
    </a>
  );
}