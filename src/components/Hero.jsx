import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center pt-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Hi, I'm <span className="text-blue-500">Ankan</span> 👋
        </h1>

        <p className="mt-6 text-xl text-gray-400">
          Computer Science Engineer focused on
          <span className="text-white"> AI, Data Science</span> & real-world problem solving.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/resume.pdf"
            className="px-8 py-3 bg-blue-600 rounded-xl hover:bg-blue-700 transition"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="px-8 py-3 border border-gray-700 rounded-xl hover:border-blue-500 transition"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </section>
  )
}
