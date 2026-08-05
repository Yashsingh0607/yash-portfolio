import HeroLeft from "./HeroLeft";
import HeroRight from "./HeroRight";
import SocialSidebar from "./SocialSidebar";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-[76px]"
    >
      <div className="mx-auto flex w-[92%] max-w-[1400px] min-h-[calc(100vh-76px)]">

        <SocialSidebar />

        <div className="grid flex-1 grid-cols-[45%_55%] items-center gap-2">

          <HeroLeft />

          <HeroRight />

        </div>

      </div>
    </section>
  );
}