import React, { useEffect, useState } from 'react'
import juiceData from '../data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART } from '../Redux/cartSlice/cartSlice';


function Card() {

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        
        console.log('added to cart', item);
        dispatch({ type: ADD_TO_CART, payload: item });
        
    }

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
            className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-6 p-4 mb-8 px-38 '>
            {juiceData.map((item, index) => (
                <div key={index} className={`gruop h-[50vh] relative transition-all transform hover:scale-105 ease-in-out duration-${item.duration}  ${inView ? 'translate-y-0' : 'translate-y-20 opacity-0'} `}>
                    <FontAwesomeIcon icon={faHeart} className='absolute z-10 right-5 top-4 text-xl text-white  hover:text-red-500' />
                    <div
                        className='h-[80%] rounded-t-3xl bg-cover bg-center '
                        style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className='bg-[#C9F5D1] h- rounded-b-3xl text-center  p-1 '>
                        <h1 className='font-semibold'>{item.name} </h1>
                        <p className='text-[#34a0a4] font-semibold'>${item.price} </p>
                        <button
                        onClick={() => handleAddToCart(item)}
                         className=' px-8 py-2 mb-2  bg-[#74B816] rounded-full text-white cursor-pointer'>Add To Cart</button>
                    </div>

                </div>

            ))}

          
        </div>
    )
}

export default Card