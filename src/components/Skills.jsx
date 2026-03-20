import {
  FaPython,
  FaJava,
  FaAws,
  FaGitAlt,
  FaLinux,
  FaDatabase,
  FaReact,
} from "react-icons/fa"

import { SiC, SiMysql, SiTailwindcss, SiVite } from "react-icons/si"
import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    {
      category: "Programming",
      items: [
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "C", icon: <SiC /> },
        { name: "SQL", icon: <FaDatabase /> },
      ],
    },
    {
      category: "Machine Learning",
      items: [
        { name: "Machine Learning" },
        { name: "Deep Learning" },
        { name: "YOLO" },
        { name: "SSD" },
        { name: "OpenCV" },
      ],
    },
    {
      category: "Web Development",
      items: [
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Vite", icon: <SiVite /> },
        { name: "HTML" },
        { name: "CSS" },
      ],
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Linux", icon: <FaLinux /> },
        { name: "AWS", icon: <FaAws /> },
        { name: "VS Code" },
      ],
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "DBMS" },
      ],
    },
  ]

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 py-20">
      <h3 className="text-3xl font-bold text-center mb-12">
        Skills
      </h3>

      <div className="grid gap-8 md:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{
              boxShadow: "0px 0px 25px rgba(59,130,246,0.5)",
              y: -5,
            }}
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6 transition"
          >
            <h4 className="text-xl font-semibold mb-4 text-blue-400">
              {skill.category}
            </h4>

            <div className="flex flex-wrap gap-3">
              {skill.items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0px 0px 12px rgba(59,130,246,0.6)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-lg text-sm transition"
                >
                  {item.icon && (
                    <motion.span
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="text-lg text-blue-400"
                    >
                      {item.icon}
                    </motion.span>
                  )}
                  {item.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}