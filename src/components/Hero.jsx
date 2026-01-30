import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center text-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="text-blue-500">
            Ankan
          </span>{" "}
          👋
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-10">
          Computer Science Engineer focused on{" "}
          <span className="text-white font-medium">
            AI, Data Science
          </span>{" "}
          & real-world problem solving.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {/* View Resume (scrolls to embedded resume) */}
          <a
            href="#resume"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl transition font-medium"
          >
            View Resume
          </a>

          {/* View Projects */}
          <a
            href="#projects"
            className="px-6 py-3 border border-gray-600 hover:border-gray-400 rounded-xl transition font-medium"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  )
}
