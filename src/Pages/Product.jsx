import React from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar'
import banner from '../assets/bg.jpg'
import Footer from '../Components/Footer'

function Product() {
  return (
    <div className='relative'>
      <div className='fixed top-0 z-99'>
        <Navbar />
      </div>
 <div
        className='w-full h-[70vh] relative bg-cover bg-center bg-no-repeat'
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className='text-3xl md:text-7xl/20 font-bold w-1/2 '>Fresh. Organic. Pure Energy.</h1>
          <p className='text-2xl py-4 '>Delivered from nature to your door</p>
          <button className="capitalize bg-[#74B816] px-8 py-2 rounded-sm font-bold mt-8 ml-2 cursor-pointer">Explore Juices </button>
        </div>
      </div>


      <div className='mt-8 lg:mt-18 px-'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer/>

    </div>
  )
}

export default Product