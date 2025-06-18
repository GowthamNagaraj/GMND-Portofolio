import React from 'react'

export const Contact = () => {
  return (
    <section id='contact' className='py-16 px-4 bg-gray-100'>
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-lg text-gray-700 mb-4">
          Want to work together or have a question?
        </p>
        <a
          href="ngowthamnadi@gmail.com"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
        >
          Email Me
        </a>
      </div>
    </section>
  )
}
