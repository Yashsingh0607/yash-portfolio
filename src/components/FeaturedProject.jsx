export default function FeaturedProject() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <h2 className="text-4xl font-bold text-white mb-12">
        Featured Project
      </h2>

      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10">
        <p className="text-sky-400 mb-3">
          Cybersecurity Project
        </p>

        <h3 className="text-3xl font-bold text-white">
          Secure File Encrypter
        </h3>

        <p className="text-slate-400 mt-6 leading-8">
          A cryptography-focused Java application
          that securely encrypts and decrypts files
          using AES-256-GCM authenticated encryption,
          PBKDF2-HMAC-SHA256 key derivation,
          random salts, and secure IV generation.
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          <span className="bg-slate-800 px-4 py-2 rounded-lg">
            Java
          </span>

          <span className="bg-slate-800 px-4 py-2 rounded-lg">
            AES-GCM
          </span>

          <span className="bg-slate-800 px-4 py-2 rounded-lg">
            PBKDF2
          </span>

          <span className="bg-slate-800 px-4 py-2 rounded-lg">
            Cryptography
          </span>

          <span className="bg-slate-800 px-4 py-2 rounded-lg">
            CLI
          </span>
        </div>

        <a
          href="https://github.com/Yashsingh0607/SecureFileEncrypter"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 bg-sky-500 px-6 py-3 rounded-lg"
        >
          View Source Code
        </a>
      </div>
    </section>
  );
}