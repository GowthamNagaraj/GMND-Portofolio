import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-center text-sm text-gray-600 dark:text-gray-400 py-6">
      © {new Date().getFullYear()} Gowtham — All rights reserved.
    </footer>
  )
}
