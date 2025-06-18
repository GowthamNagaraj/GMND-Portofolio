"use client"
import React, { useState } from 'react'

export const Contact = () => {
  const [formData, setFormData] = useState({
    yourname:"",
    youremail:"",
    yourmsg:"",
  })
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)

  function handleSubmit(e){
    e.preventDefault();

    // if(formData.youremail === ""){
    //   setError(true);
    //   setSuccess(false)
    //   return;
    // }else{
    //   setError(false);
    //   setSuccess(true);
    // }
    // if(formData.yourname === ""){
    //   setError(true);
    //   setSuccess(false)
    //   return;
    // }else{
    //   setError(false);
    //   setSuccess(true);
    // }
    // if(formData.yourmsg === ""){
    //   setError(true);
    //   setSuccess(false)
    //   return;
    // }else{
    //   setError(false);
    //   setSuccess(true);
    // }



    if(formData.youremail === "" || formData.yourname === "" || formData.yourmsg === ""){
      alert("Please fill all the fields");
    }else{
      alert("yourname: " + formData.youremail+ "youremail: " +formData.yourmsg + "yourmessage: " + formData.yourmsg);
      console.log(formData);
      
      setFormData({yourname:"", youremail:"", yourmsg:""});
    }
  }
  return (
    <section id="contact" className="py-16 px-4 bg-gray-100 dark:bg-gray-800">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          Fill out the form below to send me a message!
        </p>
        <form
          action="https://formspree.io/f/yourformid"  // replace with your own form ID
          method="POST"
          className="space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.yourname}
            onChange={(e)=>setFormData((prevState)=>({...prevState,yourname:e.target.value}))}
            required
            className="w-full p-3 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.youremai}
            onChange={(e)=>setFormData((prevState)=>({...prevState,youremail:e.target.value}))}
            required
            className="w-full p-3 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.yourmsg}
            onChange={(e)=>setFormData((prevState)=>({...prevState,yourmsg:e.target.value}))}
            required
            className="w-full p-3 rounded bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded"
            onClick={(e)=>handleSubmit(e)}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
