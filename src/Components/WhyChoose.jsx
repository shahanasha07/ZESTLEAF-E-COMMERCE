




import React, { useEffect, useState } from "react";
import green from "../assets/green.png";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCarrot, faLeaf, faShield } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-regular-svg-icons";
import whyZestleaf from '../assets/why-Zestleaf.jpg'
import natural from '../assets/natural.jpg'
import Preservatives from '../assets/preservatives.webp'
import fresh from '../assets/fresh.jpg'
import truck from '../assets/truck.png'
import { useInView } from "react-intersection-observer";

function WhyChoose() {
  
    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 100); // Add slight delay for smoother effect
        return () => clearTimeout(timer); // Cleanup if component unmounts
    }, []);

    const [ref, inView] = useInView({
        threshold: 0.1,
    });
  const services = [
    { img: natural, heading: "Buy a Car", para: "100% Natural & Cold Pressed", duraion: 500 },
    { img: Preservatives, heading: "Car Services", para: "No Preservatives or Added Sugar", duraion: 700},
    { img: fresh, heading: "Insurance", para: "Freshly Sourced Ingredients", duraion: 900 },
    { img: truck, heading: "Exchange Offers", para: "Delivered to Your Doorstep", duraion: 1200},
  ];

  return (

    <div className="px-4 md:px-16 pb-8">
      <h1 className="font-bold text-5xl py-8 mt-16 capitalize text-center ">Why Choose Us</h1>

      <div 
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-4 gap-8 px-6 md:px-24">
        {services.map((service, index) => (
          
            <div 
            key={index}
            className={` bg-[#f6fdf2]   hover:scale-105 flex flex-col items-center pt-8 pb-10 shadow-xl transition-all duration-${service.duraion} ${inView ? 'translate-y-0' : 'translate-y-20 opacity-0'}`}>
              <div
                className="w-30 h-[15vh]"
                style={{
                  background: `url(${service.img})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="py-8 text-center leading-[1.6rem] capitalize">
                <p className="mt-4 px-8 text-2xl font-medium ">{service.para}</p>
              </div>
            </div>
         
        ))}
      </div>
    </div>

    // <div className="bg-[#FFF2E2] p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center w-full  mt-18">
    //   <div className="w-[40vw] h-[90vh] bg-amber-200">
    //   <img src={whyZestleaf} alt="juice" className="w-full h-[100%] rounded-lg" />

    //   </div>

    //   <div className="ml-0 md:ml-8 mt-6 md:mt-0 space-y-4 w-1/2 ">
    //     <h2 className="text-2xl font-bold text-[#2D2D2D]">Why Zestleaf?</h2>
    //     <div className="flex items-center gap-3">
    //       <FontAwesomeIcon icon={faLeaf} className="text-[#74B816]" /> <span>100% Natural & Cold Pressed</span>
    //     </div>
    //     <div className="flex items-center gap-3">
    //       <FontAwesomeIcon icon={faShield} className="text-[#FFA500]" /> <span>No Preservatives or Added Sugar</span>
    //     </div>
    //     <div className="flex items-center gap-3">
    //       <FontAwesomeIcon icon={faCarrot} className="text-[#FFCB05]" /> <span>Freshly Sourced Ingredients</span>
    //     </div>
    //     <div className="flex items-center gap-3">
    //       <FontAwesomeIcon icon={faTruck} className="text-[#74B816]" /> <span>Delivered to Your Doorstep</span>
    //     </div>
    //   </div>



    // </div>

  );
}

export default WhyChoose;
