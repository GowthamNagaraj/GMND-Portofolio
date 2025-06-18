'use client'; // ⬅️ Needed in App Router for interactive components
import { motion } from 'framer-motion';


export const Hero = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Gowtham 👋</h1>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Full Stack Developer (MERN) | JavaScript Enthusiast
      </p>
    </motion.section>
  )
}
