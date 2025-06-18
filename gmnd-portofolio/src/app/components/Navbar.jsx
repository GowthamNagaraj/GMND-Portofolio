"use client"
import { motion } from 'framer-motion'
import { fadeUp } from "../lib/animation";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 p-4 flex justify-between items-center bg-white text-black shadow-md">
      <h1 className="text-xl font-bold">Gowtham</h1>
      <div className="flex items-center gap-4">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <motion.section
          {...fadeUp}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="/Gowtham-resume.docx" download>
            Download Resume
          </a>
        </motion.section>
      </div>
    </nav>
  )
}
