import React, { useEffect, useState } from 'react'
import { InView, useInView } from "react-intersection-observer";
import Navbar from './Navbar'
import juice from '../assets/green.png'
import juice1 from '../assets/greenjuice1.png'
import juice2 from '../assets/yellow.png'
import juice3 from '../assets/greenjuice1.png'
import greenbg from '../assets/greenBg.png'
function Banner() {

    const [show, setShow] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setShow(true), 100); // Add slight delay for smoother effect
        return () => clearTimeout(timer); // Cleanup if component unmounts
    }, []);

    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    return (
        <div
        ref={ref}
         className="relative h-screen overflow-hidden">
            {/* Background Layer */}
            <div
                className={`absolute inset-0 w-full h-full bg-[#8ab81f] transition-opacity duration-1500 ${show ? 'opacity-100' : 'opacity-70'}`}
                style={{ zIndex: 0 }}
            />
            {/* Content Layer */}
            <div className="relative z-10 h-full">
                {/* Navbar with solid background and higher z-index */}
                <div className="relative z-20">
                    <Navbar />
                </div>
                {/* Rest of your content */}
                <section className="h-full grid grid-cols-4 row-2">
                    <main

                        className=' col-start-1 col-end-5 row-start-1 row-end-5 flex justify-center items-end relative '>

                        <h1 className={`text-[22rem] font-black font-serif text-white relative z-10 duration-500 ${show ? 'opacity-100 translate-y-0 ' : 'opacity-100 -translate-y-50 '} `} >Juicy</h1>
                        <img src={juice} alt="" className={`absolute w-[30%] m-auto left-[32.5rem]  bottom-10 z-50 transform transition-all ease-in-out duration-900  ${show ? 'opacity-100 translate-y-0' : 'opacity-100 -translate-y-88'} `} />
                        <img src={greenbg} alt="" className={`absolute w-1/5 left-0 top-40 z-1 -rotate-5 transform transition-all ease-in-out duration-1200 ${show ? 'opacity-100 translate-x-0 translate-y-0' : 'opacity-50 -translate-x-58 -translate-y-5'}`} />
                    </main>
                    <aside className=' row-start-1 row-end-5 w-28 flex items-end  '>
                        <ul className=' h-2/3 w-1/2 space-y-4 '>
                            <li className={`border rounded-full w-full duration-900 ${show ? 'translate-x-0' : 'translate-x-88'} `} style={{ backgroundImage: `url(${juice1})`, width: '100%', height: '20%', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></li>
                            <li className={`border rounded-full w-full duration-700 ${show ? 'translate-x-0' : 'translate-x-88'} `} style={{ backgroundImage: `url(${juice2})`, width: '100%', height: '20%', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></li>
                            <li className={`border rounded-full w-full duration-500 ${show ? 'translate-x-0' : 'translate-x-88'} `} style={{ backgroundImage: `url(${juice3})`, width: '100%', height: '20%', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}></li>

                        </ul>
                    </aside>
                    <footer className='col-start-1 col-end-3 flex justify-center row-start-4 row-end-7'>
                        <div className={` w-1/2 h- text-white text- space-y-4 duration-800 ${show? 'translate-y-0' : 'translate-y-8'} `} >
                            <h1>Green Cleanse Juice</h1>
                            <p>Zestleaf brings you pure, organic juices made from fresh fruits and veggies. Cold-pressed, preservative-free, and full of natural goodness in every sip. </p>
                            <button className='bg-white px-5 py-2 text-black rounded-full font-medium text-sm'>See More</button>

                        </div>

                    </footer>
                </section>
            </div>
        </div>
    )
}

export default Banner