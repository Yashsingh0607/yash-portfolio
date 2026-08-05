import FeaturedProject from "./FeaturedProject";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-36"
    >
      <div className="mx-auto w-[92%] max-w-[1400px]">

        <div className="mb-16">

          <p className="mb-3 text-[14px] font-semibold tracking-[8px] text-[#D4A017]">
            PROJECT
          </p>

          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-[54px] leading-none"
          >
            Featured
            <span className="text-[#D4A017]"> Work</span>
          </h2>

        </div>

        <FeaturedProject />

      </div>
    </section>
  );
}