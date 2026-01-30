import { motion } from "framer-motion"

const projects = [
  {
    title: "MOMO’s Hut – Food Ordering Web App",
    description:
      "A responsive food ordering web application that allows users to browse menu items and place orders through a clean and intuitive interface. Deployed on Netlify.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
    live: "https://warm-cajeta-10a957.netlify.app/",
    
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A professional React-based portfolio featuring animated sections, an embedded resume viewer, and SEO optimization. Deployed on Vercel.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    live: "https://portfolio-xi-murex-87.vercel.app/",
    github: "https://github.com/Ankan703/portfolio",
  },
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="max-w-6xl mx-auto px-4 py-20"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        Projects
      </motion.h3>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6"
          >
            <h4 className="text-xl font-semibold mb-2">
              {project.title}
            </h4>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 bg-gray-800 rounded-lg"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  GitHub →
                </a>
              )}

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition"
                >
                  Live →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
