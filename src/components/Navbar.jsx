export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Ankan.dev</h1>
        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#skills" className="hover:text-blue-400 transition">Skills</a>
          <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
        </div>
      </div>
    </nav>
  )
}
