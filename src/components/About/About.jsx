import {
  GraduationCap,
  Brain,
  ShieldCheck,
  Code2,
} from "lucide-react";

export default function About() {
  return (
    <section
  id="about"
 className="relative pt-32 pb-64"
>
      <div className="mx-auto w-[92%] max-w-[1400px]">

        {/* Heading */}

        <div className="mb-16">
          <p className="text-[14px] font-semibold uppercase tracking-[7px] text-[#D4A017]">
            ABOUT ME
          </p>
        </div>

        {/* Content */}

        <div className="grid grid-cols-[31%_69%] gap-20 items-start">

          {/* LEFT */}

          <div className="mt-16">

            <div
              className="
                rounded-[22px]
                border
                border-[#D4A017]/12
                bg-[#090B10]
                p-8
                shadow-[0_15px_45px_rgba(0,0,0,.35)]
              "
            >
              <h3
                style={{ fontFamily: "var(--font-heading)" }}
                className="mb-8 text-[2rem]"
              >
                Who Am I?
              </h3>

              <p className="mb-7 text-[17px] leading-9 text-[#B2B2B2]">
                I'm <span className="text-white font-semibold">Yash Vardhan Singh</span>,
                a Software Engineering student passionate about building
                scalable software and solving challenging problems through
                Data Structures & Algorithms.
              </p>

              <p className="text-[17px] leading-9 text-[#B2B2B2]">
                Alongside full-stack development, I actively explore
                Artificial Intelligence and Cybersecurity while constantly
                improving my technical skills through projects and
                continuous learning.
              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="pl-10">

            <div className="grid grid-cols-2 gap-6">

              {/* Education */}

              <div className="rounded-[22px] border border-[#D4A017]/12 bg-[#090B10] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A017]/35">

                <GraduationCap
                  size={42}
                  className="mb-6 text-[#D4A017]"
                />

                <h4 className="mb-3 text-[30px] font-semibold">
                  Education
                </h4>

                <p className="text-[16px] leading-8 text-[#A8A8A8]">
                  B.Tech Information Technology
                  <br />
                  GL Bajaj Institute
                  <br />
                  2024 – 2028
                </p>

              </div>

              {/* Development */}

              <div className="rounded-[22px] border border-[#D4A017]/12 bg-[#090B10] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A017]/35">

                <Code2
                  size={42}
                  className="mb-6 text-[#D4A017]"
                />

                <h4 className="mb-3 text-[30px] font-semibold">
                  Development
                </h4>

                <p className="text-[16px] leading-8 text-[#A8A8A8]">
                  Java
                  <br />
                  React
                  <br />
                  Spring Boot
                  <br />
                  MongoDB
                </p>

              </div>

              {/* AI */}

              <div className="rounded-[22px] border border-[#D4A017]/12 bg-[#090B10] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A017]/35">

                <Brain
                  size={42}
                  className="mb-6 text-[#D4A017]"
                />

                <h4 className="mb-3 text-[30px] font-semibold">
                  AI & ML
                </h4>

                <p className="text-[16px] leading-8 text-[#A8A8A8]">
                  Machine Learning
                  <br />
                  Deep Learning
                  <br />
                  NLP
                </p>

              </div>

              {/* Security */}

              <div className="rounded-[22px] border border-[#D4A017]/12 bg-[#090B10] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A017]/35">

                <ShieldCheck
                  size={42}
                  className="mb-6 text-[#D4A017]"
                />

                <h4 className="mb-3 text-[30px] font-semibold">
                  Security
                </h4>

                <p className="text-[16px] leading-8 text-[#A8A8A8]">
                  Cybersecurity
                  <br />
                  Networking
                  <br />
                  Secure Development
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}