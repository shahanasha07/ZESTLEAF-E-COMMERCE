import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ShopingAddressForm({ isOpen, onClose, onSave }) {
  return (
    <div
      className={`fixed  inset-0 z-99 flex transition-all duration-500 ${
        isOpen ? 'bg-black/40 pointer-events-auto' : 'bg-transparent pointer-events-none'
      }`}
      style={{ transitionProperty: 'background-color, opacity' }}
    >
      {/* Slide-in Panel */}
      <div
        className={`
          h-full w-full max-w-md md:w-[30%] bg-white shadow-xl overflow-y-auto relative
          flex flex-col justify-center
          transition-transform duration-500 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          ml-auto
        `}
        style={{ maxHeight: '100vh' }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-6 text-[#74B816] text-center">Add Delivery Address</h2>
          <form
            className="space-y-4"
            onSubmit={e => {
              e.preventDefault()
              onSave && onSave()
            }}
          >
            <div>
              <label className="block text-gray-700 mb-1">Name</label>
              <input type="text" className="w-full border rounded px-3 py-2 focus:outline-[#74B816]" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">Contact Number</label>
              <input type="number" className="w-full border rounded px-3 py-2 focus:outline-[#74B816]" required />
            </div>
            <div>
              <label className="block text-gray-700 mb-1">House No. / Building Name</label>
              <input type="text" className="w-full border rounded px-3 py-2 focus:outline-[#74B816]" required />
            </div>
            <div className="flex gap-2">
              <div className="w-1/2">
                <label className="block text-gray-700 mb-1">Pincode</label>
                <input type="number" className="w-full border rounded px-3 py-2 focus:outline-[#74B816]" required />
              </div>
              <div className="w-1/2">
                <label className="block text-gray-700 mb-1">City</label>
                <input type="text" className="w-full border rounded px-3 py-2 focus:outline-[#74B816]" required />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-1">State</label>
              <input type="text" className="w-full border rounded px-3 py-2 focus:outline-[#74B816]" required />
            </div>
            <button
              type="submit"
              className="w-full bg-[#74B816] hover:bg-[#5ea012] text-white font-semibold py-3 rounded-lg mt-4 transition"
            >
              Save Address and Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ShopingAddressForm