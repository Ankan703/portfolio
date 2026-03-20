import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Certifications from "./components/Certifications"
import Resume from "./components/Resume"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="text-white min-h-screen">
      
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />   {/* NEW */}
      <Resume />
      <Contact />

    </div>
  )
}