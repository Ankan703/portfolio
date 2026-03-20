export default function Skills() {
  const skills = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Python",
    "C",
    "C++",
    "Machine Learning",
    "AWS",
    "SQL",
    "Git & GitHub"
  ]

  return (
    <section
      id="skills"
      className="max-w-6xl mx-auto px-4 py-20"
    >
      <h3 className="text-3xl font-bold text-center mb-10">
        Skills
      </h3>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-xl text-sm hover:border-blue-500 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}