

import React, { useState, useEffect, useRef } from 'react'
import review1 from '../assets/james.jpg'
import review2 from '../assets/james.jpg'
import review3 from '../assets/james.jpg'
import review4 from '../assets/james.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const reviews = [
  {
    image: review1,
    name: "James Abraham",
    text: "Zestleaf juices are a game changer! Fresh, delicious, and delivered right to my door. Highly recommended!",
  },
  {
    image: review2,
    name: "Priya Sharma",
    text: "I love the variety and the fact that everything is organic. My mornings are incomplete without Zestleaf.",
  },
  {
    image: review3,
    name: "Rahul Verma",
    text: "Great taste, eco-friendly packaging, and super fast delivery. Zestleaf is my go-to for healthy juices.",
  },
  {
    image: review4,
    name: "Aarav Patel",
    text: "The cold-pressed juices are so refreshing and nutritious. I feel energized every day. Thank you, Zestleaf!",
  },
]

const CARDS_TO_SHOW = 2

function Testimonail() {
  const [current, setCurrent] = useState(0)
  const intervalRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  const total = reviews.length

  // Auto-slide logic (infinite)
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrent(prev => (prev + 1) % total)
      }, 4000)
    }
    return () => clearInterval(intervalRef.current)
  }, [isHovered, total])

  const prevSlide = () => setCurrent(prev => (prev - 1 + total) % total)
  const nextSlide = () => setCurrent(prev => (prev + 1) % total)

  // Get 2 reviews to show, wrapping around if needed
  const getVisibleReviews = () => {
    let visible = []
    for (let i = 0; i < CARDS_TO_SHOW; i++) {
      visible.push(reviews[(current + i) % total])
    }
    return visible
  }

  return (
    <div className="py-20 bg-[#f6fdf2]">
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-2">
          <hr className="h-[3px] bg-[#74B816] hover:te w-14 ml-2" />
          <p className="text-[#74B816] hover:te font-serif text-xl font-semibold mx-2">Testimonial</p>
          <hr className="h-[3px] bg-[#74B816] hover:te w-14 ml-2" />
        </div>
        <h1 className="text-3xl md:text-5xl text-center font-bold mt-4 mb-10">Our Clients Say!!!</h1>
      </div>
      <div className="relative max-w-4xl mx-auto">
        <div
          className="flex items-center justify-center"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow mx-2 transition text-[#74B816]  hover:bg-[#74B816] hover:text-white"
            aria-label="Previous"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-xl" />
          </button>



          {/* <div className="flex w-full gap-6 justify-center">
            {getVisibleReviews().map((review, idx) => (
              <div
                key={idx}
                className="w-1/2 flex-shrink-0 flex justify-center items-center"
                style={{ minWidth: '50%' }}
              >
                <div className="border px-8 py-8 bg-white rounded-lg shadow-lg flex flex-col items-center text-center min-h-[340px] h-full w-full max-w-md">
                  <FontAwesomeIcon icon={faQuoteLeft} className="text-3xl text-[#74B816] hover:te mb-4" />
                  <p className="text-gray-600 italic mb-6 text-lg flex-1">{review.text}</p>
                  <img src={review.image} alt={review.name} className="rounded-full w-20 h-20 border-4 border-[#74B816] mb-3 object-cover" />
                  <p className="font-bold text-[#74B816] text-lg">{review.name}</p>
                </div>
              </div>
            ))}
          </div> */}

<div className="overflow-hidden w-full max-w-4xl relative">
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{
      transform: `translateX(-${(current * (100 / CARDS_TO_SHOW))}%)`,
      width: `${(reviews.length * (100 / CARDS_TO_SHOW))}%`
    }}
  >
    {reviews.map((review, idx) => (
      <div
        key={idx}
        className="w-1/2 px-3 box-border shrink-0"
      >
        <div className="border px-8 py-8 bg-white rounded-lg shadow-lg flex flex-col items-center text-center min-h-[340px] h-full">
          <FontAwesomeIcon icon={faQuoteLeft} className="text-3xl text-[#74B816] mb-4" />
          <p className="text-gray-600 italic mb-6 text-lg flex-1">{review.text}</p>
          <img src={review.image} alt={review.name} className="rounded-full w-20 h-20 border-4 border-[#74B816] mb-3 object-cover" />
          <p className="font-bold text-[#74B816] text-lg">{review.name}</p>
        </div>
      </div>
    ))}
  </div>
</div>




          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow mx-2 transition text-[#74B816] hover:bg-[#74B816] hover:text-white"
            aria-label="Next"
          >
            <FontAwesomeIcon icon={faChevronRight} className=" text-xl" />
          </button>
        </div>
        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${current === idx ? 'bg-[#74B816]' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonail











