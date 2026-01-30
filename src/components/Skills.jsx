const skills = [
  "React",
  "Tailwind CSS",
  "JavaScript",
  "Python",
  "Machine Learning",
  "SQL",
  "Git & GitHub"
]

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto py-20 px-4">
      <h3 className="text-3xl font-bold mb-6">Skills</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map(skill => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-800 rounded-xl text-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
