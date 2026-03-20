import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-5xl mx-auto py-20 px-4"
    >
      <h3 className="text-3xl font-bold mb-4">About Me</h3>
      <p className="text-gray-400 leading-relaxed">
        I am a Computer Science Engineering student passionate about building intelligent and scalable applications. 
        My work includes developing AI-based systems like hand sign recognition models and building full-stack web applications such as a food ordering platform. I focus on writing clean code, creating intuitive user experiences, and optimizing performance.
        With experience in React, Python, and cloud technologies like AWS, I continuously strive to improve my technical skills and stay updated with modern development practices.
      </p>
    </motion.section>
  )
}
