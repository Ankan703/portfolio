import { motion } from "framer-motion"

const projects = [
  {
    title: "Pi-Project – Voice Assistant on Raspberry Pi",
    description:
      "Developed a locally running voice assistant on Raspberry Pi 4 integrating speech recognition and AI APIs to perform tasks similar to Alexa.",
    tech: ["Python", "Raspberry Pi", "Speech Recognition", "AI"],
    live: "",
    github: "https://github.com/Ankan703/Pi-Project",
  },
  {
    title: "SSD-Model – Hand Sign Recognition",
    description:
      "Built a computer vision model using SSD architecture for real-time hand sign recognition and object detection.",
    tech: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
    live: "",
    github: "https://github.com/Ankan703/SSD-Model-",
  },
  {
    title: "MOMO’s Hut – Food Ordering Web App",
    description:
      "A responsive food ordering web application that allows users to browse menu items and place orders through a clean and intuitive interface. Deployed on Netlify.",
    tech: ["React", "Tailwind CSS", "JavaScript", "Netlify"],
    live: "https://warm-cajeta-10a957.netlify.app/",
    github: "",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A professional React-based portfolio featuring animations, an embedded resume viewer, and SEO optimization. Deployed on Vercel.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    live: "https://portfolio-xi-murex-87.vercel.app/",
    github: "https://github.com/Ankan703/portfolio",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-20">
      
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        Projects
      </motion.h3>

      {/* Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{
              y: -6,
              boxShadow: "0px 0px 20px rgba(59,130,246,0.4)",
            }}
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6"
          >
            {/* Title */}
            <h4 className="text-xl font-semibold mb-2">
              {project.title}
            </h4>

            {/* Description */}
            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            {/* Tech stack */}
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

            {/* Links */}
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