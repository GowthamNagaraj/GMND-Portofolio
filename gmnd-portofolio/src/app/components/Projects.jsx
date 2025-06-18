"use client"
import { motion } from "framer-motion";
import { fadeUp } from "../lib/animation";

export const Projects = () => {

  const projects = [
    {
      title: "Attendance Dashboard",
      description: "A fullstack app to track user attendance with MongoDB, JWT, and a responsive UI.",
      link: "https://gmnd-attendance-frontend.vercel.app/",
      imgurl: "/images/attendance-login.png"
    },
    {
      title: "Portfolio Website",
      description: "A personal developer portfolio with dark mode and resume download.",
      link: "https://gmnd-portofolio.vercel.app/",
      imgurl: "/images/portofolio.png"
    },
  ]

  return (

    <motion.section
      {...fadeUp}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Your section content here */}
      <section id='projects' className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-gray-700 shadow-md rounded-xl hover:scale-105 transform transition"
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-300 underline"
                >
                  <img src={project.imgurl} className="rounded mb-4" alt="Project 1" />
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.section>
  )
}
