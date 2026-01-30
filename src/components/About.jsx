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
        I'm a Computer Science Engineering student passionate about AI,
        Data Science, and building real-world software solutions.
      </p>
    </motion.section>
  )
}
