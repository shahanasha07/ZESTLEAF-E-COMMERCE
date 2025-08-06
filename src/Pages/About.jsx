
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import aboutImg1 from '../assets/bg.jpg'
import aboutImg2 from '../assets/product-banner.jpg'

import Team from '../Components/Team'

function About() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-18">
        <h1 className="text-5xl font-extrabold text-[#74B816] mb-10 text-center">About Zestleaf</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-16">
          <img src={aboutImg1} alt="Fresh organic fruits" className="w-2/5 md:w-[35%] rounded-lg shadow-lg" />
          <div className="w-full md:w-3/4">
            <h2 className="text-4xl font-bold mb-4 text-[#74B816] pt-14 pb-4 inline-block" >Our Story </h2>
            
            <p className="text-lg text-gray-700 mb-3 leading-relaxed">
              Zestleaf was born from a passion for healthy living and a love for nature’s purest flavors. We believe that everyone deserves access to fresh, organic juices made from the finest ingredients.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our journey began with a simple goal: deliver pure energy and wellness straight from nature to your door. Every bottle is crafted with care, ensuring you get the best taste and nutrition in every sip.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8 mb-16">
          <img src={aboutImg2} alt="Juice preparation" className="w-2/5 md:w-[35%] rounded-lg shadow-lg" />
          <div className="w-full md:w-3/4">
            <h2 className="text-4xl font-bold mb-4 text-[#74B816] pt-14 pb-4 inline-block">Why Choose Zestleaf?</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 space-y-2 leading-relaxed">
              <li>100% organic, locally sourced fruits and vegetables</li>
              <li>No added sugars, preservatives, or artificial flavors</li>
              <li>Cold-pressed for maximum nutrition and taste</li>
              <li>Eco-friendly packaging and sustainable practices</li>
              <li>Fast, fresh delivery to your doorstep</li>
            </ul>
          </div>
        </div>
        {/* Team Section */}
      <Team/>
      </div>
      <Footer />
    </div>
  )
}

export default About