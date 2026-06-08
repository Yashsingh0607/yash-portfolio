const skills = [
  "Java",
  "C++",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Linux",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-6 py-32"
    >
      <h2 className="text-4xl font-bold text-white mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="bg-slate-900 border border-slate-800 rounded-xl p-6 text-center text-white"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}