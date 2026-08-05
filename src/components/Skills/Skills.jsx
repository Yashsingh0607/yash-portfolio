import {
  Code2,
  Database,
  Shield,
  Wrench,
} from "lucide-react";

import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section
  id="skills"
  className="relative mt-20 pt-44 pb-32"
>
      <div className="mx-auto w-[92%] max-w-[1400px]">

        {/* Heading */}

        <div className="mb-16">
          <p className="mb-3 text-[14px] font-semibold tracking-[8px] text-[#D4A017]">
            SKILLS
          </p>

          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-[54px] leading-none"
          >
            Technical
            <span className="text-[#D4A017]"> Expertise</span>
          </h2>
        </div>

        {/* Cards */}

        <div className="grid grid-cols-2 gap-8">

          <SkillCard
            icon={Code2}
            title="Programming"
            description="Building scalable software using Java and modern development practices."
            skills={[
              "Java",
              "Python",
              "OOP",
              "Problem Solving",
            ]}
          />

          <SkillCard
            icon={Database}
            title="Core Computer Science"
            description="Strong understanding of fundamental computer science concepts."
            skills={[
              "DSA",
              "Operating Systems",
              "DBMS",
              "Computer Networks",
            ]}
          />

          <SkillCard
            icon={Shield}
            title="Cybersecurity"
            description="Focused on secure software development and modern security practices."
            skills={[
              "Cryptography",
              "Networking",
              "Linux",
              "OWASP",
            ]}
          />

          <SkillCard
            icon={Wrench}
            title="Tools"
            description="Development tools used throughout coding and project development."
            skills={[
              "Git",
              "GitHub",
              "VS Code",
              "Spring Boot",
            ]}
          />

        </div>

      </div>
    </section>
  );
}