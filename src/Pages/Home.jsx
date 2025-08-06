import React from 'react'
import Banner from '../Components/Banner'
import Card from '../Components/Card'
import Featured from '../Components/WhyChoose'
import Footer from '../Components/Footer'
import WhyChoose from '../Components/WhyChoose'
import Testimonil from '../Components/Testimonail'

function Home() {
  return (
    <div className='overflow-hidden bg-[#FFF2E2 '>
      <Banner />
      {/* <Featured/> */}
      <div>
        <h1 className='text-5xl text-center font-bold py-6'>Featured Collections</h1>
        <Card />

      </div>
       <WhyChoose />
      <Testimonil />
      <Footer />
    </div>
  )
}

export default Home