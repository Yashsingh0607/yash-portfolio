import { useSyncExternalStore } from "react";
import { TypeAnimation } from "react-type-animation";

const motionQuery = "(prefers-reduced-motion: reduce)";

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (notify) => {
      const query = window.matchMedia(motionQuery);
      query.addEventListener("change", notify);
      return () => query.removeEventListener("change", notify);
    },
    () => window.matchMedia(motionQuery).matches,
    () => false
  );
}

const stack = ["Java", "Python", "TypeScript", "Next.js", "React", "SQL"];

// Kept deliberately simple: gold prompt, white commands, grey output.
export default function Terminal() {
  const reduced = usePrefersReducedMotion();

  return (
    <div className="w-full overflow-hidden rounded-[20px] border border-[#D4A017]/20 bg-[#090B10]/95 shadow-[0_20px_70px_rgba(0,0,0,.5)] backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/5 px-5 py-3.5">
        <div className="flex items-center gap-2" aria-hidden="true">
          <span className="h-3 w-3 rounded-full bg-[#B6243A]" />
          <span className="h-3 w-3 rounded-full bg-[#D4A017]" />
          <span className="h-3 w-3 rounded-full bg-[#A6A6A6]" />
        </div>
        <p className="font-mono text-xs text-[#7E8793]">yash@portfolio</p>
      </div>

      <div className="space-y-6 px-7 pb-8 pt-6 font-mono text-[15px] leading-8 sm:text-base">
        <div>
          <p>
            <span className="text-gold">$ </span>
            <span className="font-semibold text-white">whoami</span>
          </p>
          <p className="pl-5 text-[#9AA0A8]">Yash Vardhan Singh, B.Tech IT</p>
        </div>

        <div>
          <p>
            <span className="text-gold">$ </span>
            <span className="font-semibold text-white">cat skills.txt</span>
          </p>
          <p className="pl-5 text-[#9AA0A8]">{stack.join(" · ")}</p>
        </div>

        <p>
          <span className="text-gold">$ </span>
          {reduced ? (
            <span className="font-semibold text-white">building web apps...</span>
          ) : (
            <TypeAnimation
              sequence={[
                "building web apps...",
                2000,
                "solving DSA...",
                2000,
                "learning cryptography...",
                2000,
              ]}
              wrapper="span"
              speed={45}
              repeat={Infinity}
              className="font-semibold text-white"
            />
          )}
        </p>
      </div>
    </div>
  );
}
