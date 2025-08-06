import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

function Contact() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-[#74B816] mb-8 text-center">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Have a question or want to get in touch? Fill out the form below or reach us directly!
        </p>
        <form className="bg-[#f6fdf2] rounded-lg shadow-md p-8 mb-8 space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#74B816]"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#74B816]"
              placeholder="you@email.com"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#74B816]"
              rows="5"
              placeholder="Type your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#74B816] text-white font-bold px-8 py-2 rounded hover:bg-[#5a8e13] transition"
          >
            Send Message
          </button>
        </form>
        <div className="text-center text-gray-600">
          <p><span className="font-semibold">Email:</span> support@zestleaf.com</p>
          <p><span className="font-semibold">Phone:</span> +91 98765 43210</p>
          <p><span className="font-semibold">Address:</span> 123 Green Lane, Mumbai, India</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact