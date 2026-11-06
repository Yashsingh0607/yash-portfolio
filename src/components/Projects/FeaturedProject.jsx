
import {
  ExternalLink,
  Shield,
  Lock,
  KeyRound,
  FileLock2,
  BrainCircuit,
  TicketCheck,
  Workflow,
  MessageSquare,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "ResolveAI",
    subtitle: "AI Support & Ticket Resolution Engine",
    category: "AI / SOFTWARE ENGINEERING",
    description:
      "An AI-powered customer support platform designed to streamline ticket management through a RAG-oriented copilot interface, intelligent diagnosis workflows, and automated resolution experiences.",
    technologies: [
      "Next.js 16",
      "TypeScript",
      "React",
      "Tailwind CSS v4",
    ],
    features: [
      { icon: BrainCircuit, text: "RAG-oriented AI Copilot" },
      { icon: TicketCheck, text: "Ticket Management Dashboard" },
      { icon: Workflow, text: "Resolution Workflows" },
      { icon: MessageSquare, text: "Interactive AI Assistant" },
    ],
    icon: BrainCircuit,
    github:
      "https://github.com/Yashsingh0607/resolveai",
  },
  {
    name: "SecureFileEncrypter",
    subtitle: "Java-Based File Encryption CLI",
    category: "JAVA / CYBERSECURITY",
    description:
      "A command-line application for encrypting and decrypting files using AES-CBC encryption and PBKDF2-based password key derivation. Implements salt and IV handling to protect sensitive file contents.",
    technologies: [
      "Java",
      "AES-CBC",
      "PBKDF2",
      "Cryptography",
    ],
    features: [
      { icon: Lock, text: "AES File Encryption" },
      { icon: KeyRound, text: "PBKDF2 Key Derivation" },
      { icon: FileLock2, text: "Salt & IV Handling" },
      { icon: Shield, text: "Secure CLI Operations" },
    ],
    icon: Shield,
    github:
      "https://github.com/Yashsingh0607/SecureFileEncrypter",
  },
];

function ProjectCard({ project, index }) {
  const ProjectIcon = project.icon;

  return (
    <div className="group overflow-hidden rounded-[28px] border border-[#D4A017]/15 bg-[#090B10] transition-all duration-300 hover:border-[#D4A017]/40 hover:shadow-[0_20px_60px_rgba(212,160,23,.08)]">

      <div className="grid grid-cols-1 lg:grid-cols-[38%_62%]">

        {/* Visual Section */}
        <div className="flex items-center justify-center bg-[#11151D] p-8 lg:p-10">
          <div className="flex h-[230px] w-full flex-col items-center justify-center rounded-[24px] border border-dashed border-[#D4A017]/25 transition duration-300 group-hover:border-[#D4A017]/50">

            <ProjectIcon
              size={85}
              strokeWidth={1.2}
              className="text-[#D4A017]/70 transition duration-300 group-hover:scale-110 group-hover:text-[#D4A017]"
            />

            <p className="mt-6 text-xs tracking-[5px] text-[#D4A017]/70">
              PROJECT 0{index + 1}
            </p>

          </div>
        </div>

        {/* Content Section */}
        <div className="p-7 lg:p-10">

          <p className="mb-3 text-xs font-semibold tracking-[4px] text-[#D4A017]">
            {project.category}
          </p>

          <h3
            style={{ fontFamily: "var(--font-heading)" }}
            className="mb-2 text-3xl leading-tight md:text-[38px]"
          >
            {project.name}
          </h3>

          <p className="mb-6 text-sm text-[#D4A017]/80">
            {project.subtitle}
          </p>

          {/* Technologies */}
          <div className="mb-7 flex flex-wrap gap-2">
            {project.technologies.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#D4A017]/20 bg-[#D4A017]/5 px-3 py-2 text-xs text-[#D4A017]"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="mb-8 text-[15px] leading-7 text-[#A6A6A6]">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-9 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {project.features.map((feature) => {
              const FeatureIcon = feature.icon;

              return (
                <div
                  key={feature.text}
                  className="flex items-center gap-3"
                >
                  <FeatureIcon
                    size={19}
                    className="shrink-0 text-[#D4A017]"
                  />
                  <span className="text-sm text-[#C4C4C4]">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} on GitHub`}
              className="flex items-center gap-2 rounded-xl border border-[#D4A017]/30 px-5 py-3 text-sm transition hover:border-[#D4A017] hover:bg-[#D4A017]/5"
            >
              <FaGithub size={19} />
              View Source
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl bg-[#D4A017] px-5 py-3 text-sm font-semibold text-black transition hover:scale-105"
            >
              <ExternalLink size={18} />
              Explore Project
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function FeaturedProject() {
  return (
    <div className="flex flex-col gap-8">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.name}
          project={project}
          index={index}
        />
      ))}
    </div>
  );
}
