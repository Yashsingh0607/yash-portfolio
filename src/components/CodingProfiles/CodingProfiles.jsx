import ProfileCard from "./ProfileCard";

import {
  SiLeetcode,
  SiCodeforces,
  SiCodechef,
  SiGithub,
} from "react-icons/si";

export default function CodingProfiles() {
  return (
    <section
      id="coding"
      className="relative py-36"
    >
      <div className="mx-auto w-[92%] max-w-[1400px]">

        {/* Heading */}

        <div className="mb-20">

          <p className="mb-3 text-[14px] font-semibold tracking-[8px] text-[#D4A017]">
            CODING PROFILES
          </p>

          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-[58px] leading-none"
          >
            Competitive
            <span className="text-[#D4A017]">
              {" "}Programming
            </span>
          </h2>

          <p className="mt-8 max-w-[700px] text-[18px] leading-9 text-[#A8A8A8]">
            I actively solve algorithmic problems, participate in coding
            contests and build open-source projects. These profiles reflect
            my continuous learning and problem-solving journey.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          <ProfileCard
            icon={SiLeetcode}
            title="LeetCode"
            value="300+"
            label="Problems Solved"
            href="https://leetcode.com/u/Yashvardhansingh234679/"
          />

          <ProfileCard
            icon={SiCodeforces}
            title="Codeforces"
            value="800"
            label="Current Rating"
            href="https://codeforces.com/profile/YOUR_USERNAME"
          />

          <ProfileCard
            icon={SiCodechef}
            title="CodeChef"
            value="1100"
            label="Current Rating"
            href="https://www.codechef.com/users/Yashsingh0607"
          />

          <ProfileCard
            icon={SiGithub}
            title="GitHub"
            value="30+"
            label="Repositories"
            href="https://github.com/Yashsingh0607"
          />

        </div>

        {/* Codolio Button */}

        <div className="mt-16 flex justify-center">

          <a
            href="https://codolio.com/profile/yash_singh"
            target="_blank"
            rel="noreferrer"
            className="
              rounded-xl
              border
              border-[#D4A017]
              px-8
              py-4
              text-[17px]
              font-medium
              text-[#D4A017]
              transition-all
              duration-300
              hover:bg-[#D4A017]
              hover:text-black
            "
          >
            View Complete Codolio Profile →
          </a>

        </div>

      </div>
    </section>
  );
}