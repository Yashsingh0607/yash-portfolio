export default function Highlights() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-32">
      <h2 className="text-4xl font-bold text-white mb-12">
        Technical Highlights
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Cryptography
          </h3>

          <ul className="space-y-3 text-slate-400">
            <li>AES-256-GCM Encryption</li>
            <li>PBKDF2-HMAC-SHA256</li>
            <li>1.2 Million Iterations</li>
            <li>Random Salt Generation</li>
            <li>Authentication Tags</li>
            <li>SecureRandom</li>
          </ul>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Development
          </h3>

          <ul className="space-y-3 text-slate-400">
            <li>Java</li>
            <li>Object-Oriented Programming</li>
            <li>File Streaming</li>
            <li>Command Line Applications</li>
            <li>Exception Handling</li>
            <li>Java Cryptography Architecture</li>
          </ul>
        </div>
      </div>
    </section>
  );
}