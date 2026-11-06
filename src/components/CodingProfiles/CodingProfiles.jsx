
import ProfileCard from "./ProfileCard";

import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGithub,
} from "react-icons/si";
import { FaCode } from "react-icons/fa";

export default function CodingProfiles() {
  return (
    <section id="coding" className="relative py-36">
      <div className="mx-auto w-[92%] max-w-[1400px]">

        <div className="mb-20">
          <p className="mb-3 text-[14px] font-semibold tracking-[8px] text-[#D4A017]">
            CODING PROFILES
          </p>

          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-[42px] leading-tight md:text-[58px]"
          >
            Competitive
            <span className="text-[#D4A017]">
              {" "}Programming
            </span>
          </h2>

          <p className="mt-8 max-w-[700px] text-[18px] leading-9 text-[#A8A8A8]">
            Consistent problem-solving across coding platforms, with a focus
            on data structures, algorithms, competitive programming and
            writing efficient Java solutions.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">

          <ProfileCard
            icon={FaCode}
            title="DSA Practice"
            value="600+"
            label="Problems Across Platforms"
            href="https://codolio.com/profile/yash_singh"
          />

          <ProfileCard
            icon={SiCodeforces}
            title="Codeforces"
            value="1430"
            label="Rating"
            href="https://codeforces.com/profile/yashvardhansingh"
          />

          <ProfileCard
            icon={SiCodechef}
            title="CodeChef"
            value="1100"
            label="Rating"
            href="https://www.codechef.com/users/Yashsingh0607"
          />

          <ProfileCard
            icon={SiLeetcode}
            title="LeetCode"
            value="Profile"
            label="View Solved Problems"
            href="https://leetcode.com/u/Yashvardhansingh234679/"
          />

          <ProfileCard
            icon={SiGithub}
            title="GitHub"
            value="5+"
            label="Repositories"
            href="https://github.com/Yashsingh0607"
          />

        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="https://codolio.com/profile/yash_singh"
            target="_blank"
            rel="noreferrer"
            className="
              rounded-xl
              border border-[#D4A017]
              px-8 py-4
              text-[17px] font-medium
              text-[#D4A017]
              transition-all duration-300
              hover:bg-[#D4A017]
              hover:text-black
            "
          >
            View Complete Coding Profile →
          </a>
        </div>

      </div>
    </section>
  );
}
