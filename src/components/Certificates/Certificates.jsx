import CertificateCard from "./CertificateCard";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative py-36"
    >
      <div className="mx-auto w-[92%] max-w-[1400px]">

        {/* Heading */}

        <div className="mb-20">

          <p className="mb-3 text-[14px] font-semibold tracking-[8px] text-[#D4A017]">
            CERTIFICATES
          </p>

          <h2
            style={{ fontFamily: "var(--font-heading)" }}
            className="text-[58px] leading-none"
          >
            Learning &
            <span className="text-[#D4A017]">
              {" "}Achievements
            </span>
          </h2>

    

        </div>

        {/* Certificate Grid */}

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

        </div>

      </div>
    </section>
  );
}