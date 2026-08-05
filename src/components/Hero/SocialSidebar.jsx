import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";
import { Code2 } from "lucide-react";

export default function SocialSidebar() {
  return (
    <div className="hidden xl:flex w-[90px] flex-col items-center justify-center">

      <div className="h-[120px] w-px bg-gradient-to-b from-transparent via-[#D4A017] to-transparent" />

      <div className="my-8 flex flex-col gap-7 text-[20px] text-[#A8A8A8]">

        {/* GitHub */}

        <a
          href="https://github.com/YashSingh0607"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-110 hover:text-[#D4A017]"
        >
          <FaGithub />
        </a>

        {/* LinkedIn */}

        <a
          href="https://linkedin.com/in/https://www.linkedin.com/in/yash-vardhan-singh-49a6903b0/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all duration-300 hover:scale-110 hover:text-[#D4A017]"
        >
          <FaLinkedinIn />
        </a>

        {/* Codolio */}

<a
  href="https://codolio.com/profile/yash_singh"
  target="_blank"
  rel="noopener noreferrer"
  className="transition-all duration-300 hover:scale-110"
>
  <img
    src="/logos/Codolio.png"
    alt="Codolio"
    className="h-5 w-5 object-contain"
  />
</a>

      </div>

      <div className="h-[120px] w-px bg-gradient-to-b from-[#D4A017] via-[#D4A017] to-transparent" />

    </div>
  );
}