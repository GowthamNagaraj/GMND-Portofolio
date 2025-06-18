"use client"
import { motion } from 'framer-motion'
import { fadeUp } from "../lib/animation";
import React from 'react'

export const Footer = () => {
  return (
    <motion.section
      {...fadeUp}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <footer className="bg-white dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-400 py-6">
        © {new Date().getFullYear()} Gowtham — All rights reserved.
      </footer>
    </motion.section>
  )
}
