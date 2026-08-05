import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#D4A017]/10 py-12">

      <div className="mx-auto flex w-[92%] max-w-[1400px] items-center justify-between">

        {/* Left */}

        <div>

          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-[34px]"
          >
            Yash
            <span className="text-[#D4A017]"> Vardhan Singh</span>
          </h2>

          <p className="mt-3 text-[#8C8C8C]">
            Software Engineer • Java Developer • AI Enthusiast
          </p>

          <p className="mt-6 text-sm text-[#666]">
            © {new Date().getFullYear()} Yash Vardhan Singh.
            All Rights Reserved.
          </p>

        </div>

        {/* Center */}

        <div className="flex gap-8 text-[#A9A9A9]">

          <a href="#hero" className="transition hover:text-[#D4A017]">
            Home
          </a>

          <a href="#about" className="transition hover:text-[#D4A017]">
            About
          </a>

          <a href="#skills" className="transition hover:text-[#D4A017]">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-[#D4A017]">
            Project
          </a>

          <a href="#contact" className="transition hover:text-[#D4A017]">
            Contact
          </a>

        </div>

        {/* Right */}

        <div className="flex items-center gap-5">

          <a
            href="https://github.com/Yashsingh0607"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-[#D4A017]/15 p-3 transition hover:border-[#D4A017] hover:bg-[#D4A017]/10"
          >
            <FaGithub
              size={22}
              className="text-[#D4A017]"
            />
          </a>

          <a
            href="https://linkedin.com/in/yash-vardhan-singh-49a6903b0"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-[#D4A017]/15 p-3 transition hover:border-[#D4A017] hover:bg-[#D4A017]/10"
          >
            <FaLinkedin
              size={22}
              className="text-[#D4A017]"
            />
          </a>

        </div>

      </div>

    </footer>
  );
}