import { motion } from "framer-motion"

export default function Contact() {
  return (
    <motion.footer
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="border-t border-gray-800 bg-gray-950"
    >
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">

        <h3 className="text-3xl font-bold mb-4">
          Contact
        </h3>

        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Feel free to reach out for opportunities, collaborations,
          or just to connect.
        </p>

        <div className="flex justify-center flex-wrap gap-6 mb-10">

          <a
            href="mailto:ankanchakraborty185@gmail.com"
            className="px-6 py-3 border border-gray-700 rounded-xl
                       hover:border-blue-500 hover:text-blue-400 transition"
          >
            Email
          </a>

          <a
            href="https://github.com/Ankan703"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-700 rounded-xl
                       hover:border-blue-500 hover:text-blue-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ankan-chakraborty-8a5785349/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-700 rounded-xl
                       hover:border-blue-500 hover:text-blue-400 transition"
          >
            LinkedIn
          </a>

        </div>

        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Ankan Chakraborty. All rights reserved.
        </div>

      </div>
    </motion.footer>
  )
}
