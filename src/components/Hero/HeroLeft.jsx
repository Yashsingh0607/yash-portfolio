import { TypeAnimation } from "react-type-animation";

export default function HeroLeft() {
  return (
   <div className="relative -mt-80 max-w-[560px] pl-8 xl:pl-14">

      <p className="mb-4 text-lg font-medium tracking-wide text-[#D4A017]">
        Hi, I'm
      </p>

    <h1
  style={{ fontFamily: "var(--font-heading)" }}
  className="-mt-4 text-[6.6rem] font-black leading-[0.92]"
>
        <span className="block text-[108px] tracking-[-3px] text-white">
          Yash
        </span>

        <span className="block text-[108px] tracking-[-3px] text-[#962239]">
          Vardhan
        </span>

        <span
          className="block text-[108px] tracking-[-3px]"
          style={{ transform: "translateY(-12px)" }}
        >
          Singh
        </span>
      </h1>

      <div className="mt-5 h-10 text-[18px] font-semibold uppercase tracking-[8px] text-[#D4A017]">
        <TypeAnimation
          sequence={[
            "Software Engineer",
            2000,
            "AI Developer",
            2000,
            "Cybersecurity Enthusiast",
            2000,
          ]}
          wrapper="span"
          repeat={Infinity}
        />
      </div>

      <p className="mt-8 max-w-[520px] text-[20px] leading-9 text-[#A8A8A8]">
        Passionate about building modern software, solving complex
        problems and exploring Artificial Intelligence, Cybersecurity
        and Full Stack Development.
      </p>

      <div className="mt-12 flex gap-5">

        <button
          className="
          rounded-full
          border
          border-[#D4A017]
          bg-[#D4A017]
          px-8
          py-4
          text-[16px]
          font-semibold
          text-black
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-[0_0_35px_rgba(212,160,23,.45)]
        "
        >
          View My Work →
        </button>

        <button
          className="
          rounded-full
          border
          border-[#D4A017]
          px-8
          py-4
          text-[16px]
          font-semibold
          text-[#D4A017]
          transition-all
          duration-300
          hover:bg-[#D4A017]
          hover:text-black
        "
        >
          Contact Me
        </button>

      </div>

    </div>
  );
}