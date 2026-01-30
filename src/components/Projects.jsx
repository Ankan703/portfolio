import { motion } from "framer-motion"

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-20 px-4">
      
      {/* Section Title */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Projects
      </motion.h3>

      <div className="grid gap-8 md:grid-cols-2">

        {/* Project Card 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-800/60 backdrop-blur border border-gray-700 
                     p-6 rounded-2xl hover:border-blue-500 transition-all"
        >
          <h4 className="text-xl font-semibold mb-2">
            AI Resume Parser
          </h4>

          <p className="text-gray-400 mb-4">
            NLP-based system that automatically analyzes resumes,
            extracts skills, experience, and ranks candidates.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm px-3 py-1 bg-gray-900 rounded-lg">Python</span>
            <span className="text-sm px-3 py-1 bg-gray-900 rounded-lg">NLP</span>
            <span className="text-sm px-3 py-1 bg-gray-900 rounded-lg">Machine Learning</span>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              GitHub →
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Live Demo →
            </a>
          </div>
        </motion.div>

        {/* Project Card 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -8 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gray-800/60 backdrop-blur border border-gray-700 
                     p-6 rounded-2xl hover:border-blue-500 transition-all"
        >
          <h4 className="text-xl font-semibold mb-2">
            Stock Price Predictor
          </h4>

          <p className="text-gray-400 mb-4">
            Machine learning model that predicts stock prices using
            historical data and technical indicators.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm px-3 py-1 bg-gray-900 rounded-lg">Python</span>
            <span className="text-sm px-3 py-1 bg-gray-900 rounded-lg">Pandas</span>
            <span className="text-sm px-3 py-1 bg-gray-900 rounded-lg">ML</span>
          </div>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              GitHub →
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              Live Demo →
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
