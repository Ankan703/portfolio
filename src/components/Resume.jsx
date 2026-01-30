import { motion } from "framer-motion"

export default function Resume() {
  return (
    <section
      id="resume"
      className="max-w-6xl mx-auto px-4 py-20"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-10"
      >
        Resume
      </motion.h3>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="w-full h-[85vh] border border-gray-700 rounded-xl overflow-hidden"
      >
        <iframe
          src="/resume/Ankan_Chakraborty_Resume.pdf"
          title="Ankan Chakraborty Resume"
          className="w-full h-full"
        ></iframe>
      </motion.div>
    </section>
  )
}
