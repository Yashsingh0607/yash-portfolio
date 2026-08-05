import {
  ExternalLink,
  Shield,
  Lock,
  KeyRound,
  FileLock2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

export default function FeaturedProject() {
  return (
    <div
      className="
      overflow-hidden
      rounded-[28px]
      border
      border-[#D4A017]/15
      bg-[#090B10]
      transition-all
      duration-300
      hover:border-[#D4A017]/35
      hover:shadow-[0_20px_60px_rgba(212,160,23,.08)]
      "
    >
      <div className="grid grid-cols-[48%_52%]">

        {/* LEFT */}

        <div className="flex items-center justify-center bg-[#11151D] p-12">

          <div className="flex h-[360px] w-full items-center justify-center rounded-[24px] border border-dashed border-[#D4A017]/25">

            <Shield
              size={120}
              className="text-[#D4A017]/70"
            />

          </div>

        </div>

        {/* RIGHT */}

        <div className="p-12">

          <p className="mb-3 text-sm tracking-[5px] text-[#D4A017]">
            FEATURED PROJECT
          </p>

          <h3
            style={{ fontFamily: "var(--font-heading)" }}
            className="mb-5 text-[42px] leading-tight"
          >
            Secure File
            <br />
            Encryption System
          </h3>

          <div className="mb-8 flex flex-wrap gap-3">

            {[
              "Java",
              "AES",
              "PBKDF2",
              "Swing",
              "Cryptography",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-[#D4A017]/20 bg-[#D4A017]/5 px-4 py-2 text-[14px] text-[#D4A017]"
              >
                {item}
              </span>
            ))}

          </div>

          <p className="mb-8 text-[17px] leading-8 text-[#A6A6A6]">
            A secure desktop application built using Java that
            encrypts and decrypts files using the AES encryption
            algorithm with PBKDF2 password-based key derivation,
            ensuring strong protection for sensitive files.
          </p>

          <div className="mb-10 grid grid-cols-2 gap-5">

            <div className="flex items-center gap-3">
              <Lock className="text-[#D4A017]" />
              <span>AES Encryption</span>
            </div>

            <div className="flex items-center gap-3">
              <KeyRound className="text-[#D4A017]" />
              <span>PBKDF2 Security</span>
            </div>

            <div className="flex items-center gap-3">
              <FileLock2 className="text-[#D4A017]" />
              <span>File Protection</span>
            </div>

            <div className="flex items-center gap-3">
              <Shield className="text-[#D4A017]" />
              <span>Java Swing GUI</span>
            </div>

          </div>

          <div className="flex gap-5">

            <a
              href="https://github.com/Yashsingh0607"
              target="_blank"
              className="flex items-center gap-2 rounded-xl border border-[#D4A017]/20 px-6 py-3 transition hover:border-[#D4A017]"
            >
             <FaGithub size={20} />
              GitHub
            </a>

            <a
              href="#"
              className="flex items-center gap-2 rounded-xl bg-[#D4A017] px-6 py-3 font-medium text-black transition hover:scale-105"
            >
              <ExternalLink size={20} />
              View Details
            </a>

          </div>

        </div>

      </div>
    </div>
  );
}