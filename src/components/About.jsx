import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto px-4 py-20"
    >
      <h3 className="text-3xl font-bold text-center mb-8">
        About Me
      </h3>

      <p className="text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">
        I'm a final-year Computer Science Engineering student with a strong interest in 
        Artificial Intelligence, Data Science, and full-stack web development. 

        I enjoy building real-world projects that solve practical problems, from developing 
        machine learning models like hand sign recognition systems to creating responsive 
        web applications such as a food ordering platform.

        I have hands-on experience with technologies like React, Python, and AWS, and I am 
        always eager to learn new tools and improve my skills. My goal is to grow as a 
        software engineer and contribute to impactful, scalable solutions.
      </p>
    </motion.section>
  )
}