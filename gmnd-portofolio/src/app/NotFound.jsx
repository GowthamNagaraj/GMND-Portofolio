"use client"

import React from 'react'
import { motion } from 'framer-motion'
export const NotFound = () => {
    return (
        <motion.section
            {...fadeUp}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            <div className="h-screen flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-6xl font-bold text-red-600">404</h1>
                <p className="text-2xl mt-4 text-gray-700 dark:text-gray-300">Page Not Found</p>
                <a
                    href="/"
                    className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Go Home
                </a>
            </div>
        </motion.section>
    )
}
