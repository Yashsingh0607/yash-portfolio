import Orbit from "./Orbit";
import Terminal from "./Terminal";

export default function HeroRight() {
  return (
    <div className="relative flex h-[880px] items-center justify-center overflow-visible">

      {/* Orbit */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-[52%]
          scale-[1.16]
        "
      >
        <Orbit />
      </div>

      {/* Terminal */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-20
          -translate-x-1/2
          -translate-y-[49%]
        "
      >
        <Terminal />
      </div>

    </div>
  );
}