
import CertificateCard from "./CertificateCard";

export default function Certificates() {
  return (
    <section id="certificates" className="relative py-36">
      <div className="mx-auto w-[92%] max-w-[1400px]">

        <div className="mb-20">
          <p className="mb-3 text-[14px] font-semibold tracking-[8px] text-[#D4A017]">
            CERTIFICATES
          </p>

          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-[42px] leading-tight md:text-[58px]"
          >
            Learning &
            <span className="text-[#D4A017]">
              {" "}Achievements
            </span>
          </h2>

          <p className="mt-8 max-w-[700px] text-[18px] leading-9 text-[#A8A8A8]">
            Building a strong foundation through structured learning,
            technical coursework and continuous skill development.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          <CertificateCard
            image="/certificates/java.png"
            pdf="/certificates/java.pdf"
            title="Programming in Java"
            issuer="NPTEL • IIT Kharagpur"
            badge="Elite"
          />

          <CertificateCard
            image="/certificates/dsa.png"
            pdf="/certificates/dsa.pdf"
            title="Data Structures & Algorithms"
            issuer="NPTEL • IIT Kharagpur"
            badge="Certified"
          />

          <CertificateCard
            image="/certificates/crypto.png"
            pdf="/certificates/crypto.pdf"
            title="Cryptography & Network Security"
            issuer="NPTEL • IIT Kharagpur"
            badge="Elite"
          />

          <CertificateCard
            image="/certificates/introtoml.png"
            pdf="/certificates/introtoml.pdf"
            title="Introduction to Machine Learning"
            issuer="NPTEL"
            badge="Certified"
          />

        </div>
      </div>
    </section>
  );
}
