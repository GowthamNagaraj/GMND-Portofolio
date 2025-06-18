"use client"
import { motion } from 'framer-motion'
import { fadeUp } from "../lib/animation";

export const About = () => {
  return (
    <motion.section
      {...fadeUp}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <section id='about' className="py-16 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About me</h2>
          <p className="text-lg text-gray-700">I'm a MERN stack developer who loves solving problems with clean code and efficient design.
            Experienced in React, Next.js, Node.js, and MongoDB.
            Let's build something awesome together!</p>
        </div>
      </section>
    </motion.section>
  )
}
