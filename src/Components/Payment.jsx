import React from 'react'
import { useSelector } from 'react-redux'

function Payment() {
  const { paymentOpen } = useSelector((state) => state.address);
  return (
    <div className={`fixed inset-1/5 z-99 w-2/5 h-1/3 border-r-1 border-gray-200 pr-4 mt-5  ${paymentOpen ? "translate-x-0 opacity-100" : "translate-x-] opacity-0 "} ml- }`}>
        <div className='border border-gray-400 rounded-xl flex gap-5 bg-amber- px-4 py-8 text-xl font-bold mb-4'>
            <div className='border-r-1 border-r-gray-300 pr-2'>$333</div>
            <div className=' flex justify-between items-center bg-pink- w-full'>
                <label htmlFor="">Cash On Delivery</label>
                <input type="radio" name='payment' className='size-5' />
            </div>
        </div>
        <div className='border border-gray-400 rounded-xl flex gap-5 px-4 py-8 text-xl font-bold'>
            <div className='border-r-1 border-r-gray-300 pr-2'>$333</div>
            <div className=' flex justify-between items-center bg-pink- w-full'>
                <label htmlFor="">Pay online</label>
                <input type="radio" name='payment' className='size-5' />
            </div>
        </div>
            <hr  className='text-gray-300 mt-4'/>
     
    </div>
  )
}

export default Payment