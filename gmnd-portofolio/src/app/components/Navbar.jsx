"use client"

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 p-4 flex justify-between items-center bg-white text-black shadow-md">
        <h1 className="text-xl font-bold">Gowtham</h1>
        <div className="flex items-center gap-4">
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="/Gowtham-resume.docx" download>
            Download Resume
          </a>
        </div>
    </nav>
  )
}
