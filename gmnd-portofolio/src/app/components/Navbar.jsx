"use client"

export const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center bg-white text-black shadow-md">
        <h1 className="text-xl font-bold">Gowtham</h1>
        <div className="flex items-center gap-4">
        <a href="/Gowtham-resume.docx" download>
          Download Resume
        </a>

        </div>
    </nav>
  )
}
