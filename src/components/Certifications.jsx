import { motion } from "framer-motion"

export default function Certifications() {
  const certifications = [
    {
      title: "Getting Started with Artificial Intelligence",
      issuer: "IBM",
      year: "2025",
      image: "/certificates/ibm-ai.png",
      logo: "/logos/ibm.png",
    },
  ]

  return (
    <section
      id="certifications"
      className="max-w-6xl mx-auto px-4 py-20"
    >
      {/* Title */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center mb-12"
      >
        Certifications
      </motion.h3>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            whileHover={{
              boxShadow: "0px 0px 20px rgba(59,130,246,0.4)",
              y: -5,
            }}
            className="bg-gray-900 border border-gray-700 rounded-2xl p-6"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={cert.logo}
                alt={cert.issuer}
                className="w-10 h-10 object-contain"
              />
              <div>
                <h4 className="text-lg font-semibold">
                  {cert.title}
                </h4>
                <p className="text-gray-400 text-sm">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            </div>

            {/* Certificate Preview */}
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={cert.image}
                alt="Certificate"
                className="rounded-lg border border-gray-700 hover:scale-105 transition"
              />
            </a>

            {/* Button */}
            <a
              href={cert.image}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 rounded-lg transition"
            >
              View Certificate →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}