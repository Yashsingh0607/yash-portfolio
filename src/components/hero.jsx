export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-sky-400 mb-4">
          Hello, I'm
        </p>

        <h1 className="text-7xl font-bold text-white">
          Yash Vardhan Singh
        </h1>

        <h2 className="text-3xl mt-4 text-slate-300">
          Java Developer & Cybersecurity Enthusiast
        </h2>

        <p className="max-w-2xl mx-auto mt-6 text-slate-400">
          Passionate about software development,
          cybersecurity, and problem solving.
        </p>

        <button className="mt-8 bg-sky-500 px-6 py-3 rounded-lg">
          View Projects
        </button>
      </div>
    </section>
  );
}