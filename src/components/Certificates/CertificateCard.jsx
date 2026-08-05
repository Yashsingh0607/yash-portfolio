import { Award, ExternalLink } from "lucide-react";

export default function CertificateCard({
  image,
  title,
  issuer,
  badge,
  score,
  pdf,
}) {
  return (
    <a
      href={pdf}
      target="_blank"
      rel="noreferrer"
      className="
        group
        overflow-hidden
        rounded-[26px]
        border
        border-[#D4A017]/15
        bg-[#090B10]
        transition-all
        duration-500
        hover:-translate-y-2
        hover:border-[#D4A017]/40
        hover:shadow-[0_25px_60px_rgba(212,160,23,.12)]
      "
    >
      {/* Certificate Preview */}

      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
            h-[230px]
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />
      </div>

      {/* Content */}

      <div className="p-7">

        <div className="mb-4 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <Award
              size={20}
              className="text-[#D4A017]"
            />

            <span className="text-sm tracking-wide text-[#D4A017]">
              {issuer}
            </span>

          </div>

          <span
            className="
              rounded-full
              border
              border-[#D4A017]/20
              bg-[#D4A017]/10
              px-3
              py-1
              text-xs
              font-semibold
              text-[#D4A017]
            "
          >
            {badge}
          </span>

        </div>

        <h3
          style={{ fontFamily: "var(--font-heading)" }}
          className="text-[28px] leading-tight"
        >
          {title}
        </h3>

        <p className="mt-5 text-[18px] font-semibold text-[#D4A017]">
          Score : {score}
        </p>

        <div className="mt-8 flex items-center justify-between">

          <span className="text-[15px] text-[#B0B0B0]">
            View Certificate
          </span>

          <ExternalLink
            size={20}
            className="
              text-[#D4A017]
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />

        </div>

      </div>
    </a>
  );
}