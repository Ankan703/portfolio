import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Resume from "./components/Resume"
import Contact from "./components/Contact"

export default function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />   {/* 👈 Resume viewer section */}
      <Contact />

    </div>
  )
}
