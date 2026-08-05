import { Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

import ContactCard from "./ContactCard";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-36"
    >
      <div className="mx-auto w-[92%] max-w-[1400px]">

        <div className="grid grid-cols-[45%_55%] gap-16 items-center">

          {/* LEFT */}

          <div>

            <p className="mb-3 text-[14px] font-semibold tracking-[8px] text-[#D4A017]">
              CONTACT
            </p>

            <h2
              style={{ fontFamily: "var(--font-heading)" }}
              className="text-[60px] leading-tight"
            >
              Let's Build
              <br />
              Something
              <span className="text-[#D4A017]"> Amazing.</span>
            </h2>

            <p className="mt-8 max-w-[520px] text-[18px] leading-9 text-[#A8A8A8]">
              I'm always interested in internships,
              collaborations, exciting projects and
              opportunities to learn new technologies.
            </p>

          </div>

          {/* RIGHT */}

          <div className="space-y-6">

            <ContactCard
              icon={Mail}
              title="Email"
              value="yashvardhansingh234679@gmail.com"
              href="mailto:yashvardhansingh234679@gmail.com"
            />

            <ContactCard
              icon={FaLinkedin}
              title="LinkedIn"
              value="linkedin.com/in/yash-vardhan-singh-49a6903b0"
              href="https://linkedin.com/in/yash-vardhan-singh-49a6903b0"
            />

            <ContactCard
              icon={Phone}
              title="Phone"
              value="+91 9305125469"
              href="tel:+9305125469"
            />

          </div>

        </div>

      </div>
    </section>
  );
}