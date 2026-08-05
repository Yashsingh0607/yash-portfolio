import { TypeAnimation } from "react-type-animation";

export default function Terminal() {
  return (
    <div
      className="
        w-[630px]
        overflow-hidden
        rounded-[24px]
        border
        border-[#D4A017]/18
        bg-[#090B10]/95
        backdrop-blur-xl
        shadow-[0_20px_80px_rgba(0,0,0,.55)]
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between border-b border-white/5 px-7 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>

        <p className="mr-10 font-mono text-[14px] tracking-wide text-[#7E8793]">
          yash@portfolio
        </p>
      </div>

      {/* BODY */}
      <div className="space-y-5 px-8 pt-5 pb-8 font-mono text-[18px] leading-8">
        <div>
          <span className="text-[#D4A017]">$ </span>
          <span className="font-semibold text-white">whoami</span>
        </div>

        <p className="pl-6 text-[#B9B9B9]">
          Software Engineer
        </p>

        <div>
          <span className="text-[#D4A017]">$ </span>
          <span className="font-semibold text-white">
            cat skills.txt
          </span>
        </div>

        <div className="space-y-2 pl-6 text-[#B9B9B9]">
          <p>• Java</p>
          <p>• Python</p>
          <p>• React</p>
          <p>• Spring Boot</p>
          <p>• MongoDB</p>
          <p>• AI / ML</p>
          <p>• Cybersecurity</p>
        </div>

        <div>
          <span className="text-[#D4A017]">$ </span>

          <TypeAnimation
            sequence={[
              "building amazing projects...",
              2000,
              "learning AI...",
              2000,
              "solving DSA...",
              2000,
            ]}
            wrapper="span"
            speed={45}
            repeat={Infinity}
            className="font-semibold text-white"
          />
        </div>
      </div>
    </div>
  );
}