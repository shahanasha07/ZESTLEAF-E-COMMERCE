import { faShoppingCart, faTrash, faMinus, faPlus, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { EDITED_CART_QTY, REMOVE_FROM_CART } from '../Redux/cartSlice/cartSlice'

function Cart() {
  const { cartItems } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const [editIndex, setEditIndex] = useState(null)
  const [editQty, setEditQty] = useState(1)

  const totalPrice = cartItems.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity || 1), 0)
  const totalItems = cartItems.reduce((sum, item) => sum + Number(item.quantity || 1), 0)

  // Remove item handler (replace with your redux logic)
  const handleRemove = (idx) => {
    dispatch({ type: REMOVE_FROM_CART, payload: cartItems[idx].id });
    alert('Remove item logic here')
  }

  // Edit quantity handlers (replace with your redux logic)
  const handleEdit = (index, qty) => {
    dispatch({ type: EDITED_CART_QTY, payload: { index, qty}});

  }
  const handleQtyChange = (type) => {
    setEditQty(q => Math.max(1, type === 'inc' ? q + 1 : q - 1))
  }
  const handleSaveQty = () => {
    // dispatch({ type: 'EDIT_CART_QTY', payload: { idx: editIndex, qty: editQty } })
    setEditIndex(null)
  }

  return (
    <div className="min-h-screen bg-[#f6fdf2] relative">
      {/* Modal Overlay */}
      {editIndex !== null && (
        <div className="fixed inset-0 bg- bg-opacity-40 z-30 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-xs flex flex-col items-center relative">
            <h2 className="text-xl font-bold mb-4">Edit Quantity</h2>
            <div className="flex items-center gap-4 mb-4">
              <button
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                onClick={() => handleQtyChange('dec')}
                disabled={editQty <= 1}
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <span className="text-lg font-semibold">{editQty}</span>
              <button
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                onClick={() => handleQtyChange('inc')}
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
            <div className="flex gap-4">
              <button
                className="bg-[#74B816] text-white px-4 py-2 rounded-full font-semibold"
                onClick={handleSaveQty}
              >
                Save
              </button>
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded-full font-semibold"
                onClick={() => setEditIndex(null)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <Navbar />
      <div className={`max-w-5xl mx-auto p-6 bg-white rounded-xl shadow flex flex-col md:flex-row gap-8 relative top-30 z-10 ${editIndex !== null ? 'opacity-40 pointer-events-none' : ''}`}>
        <div className="md:w-2/3 w-full">
          <h2 className="text-xl font-bold mb-4">Cart Items</h2>
          <div className="space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center text-gray-500 py-10">Your cart is empty.</div>
            ) : (
              cartItems.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow transition"
                >
                  <div className="flex items-center">
                    <img src={item.image} alt={item.name} className="w-14 h-14 rounded-full mr-4 border" />
                    <div>
                      <h2 className="text-lg font-semibold">{item.name}</h2>
                      <p className="text-gray-600">Price : ${item.price} </p>
                      <p className="text-gray-500">Qty : {item.quantity || 1}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      className="p-2 rounded-full bg-gray-200 hover:bg-gray-300"
                      onClick={() => handleEdit(index, item.quantity || 1)}
                    >
                      <FontAwesomeIcon icon={faPen} />
                    </button>
                    <button
                      className="p-2 rounded-full bg-red-100 hover:bg-red-300"
                      onClick={() => handleRemove(index)}
                    >
                      <FontAwesomeIcon icon={faTrash} className="text-red-500" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
         
        </div>

        <div className="md:w-1/3 w-full bg-gray-50 rounded-lg p-6 shadow-sm mb-8 md:mb-0">
          <h2 className="text-lg font-bold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Total Items</span>
            <span>{totalItems}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Order Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-[#74B816] mt-4 text-lg">
            <span>Grand Total</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
           <div className="flex justify-center mt-8">
            <button
              className="bg-[#FFCB05] hover:bg-[#74B816] text-black font-semibold px-8 py-3 rounded-full shadow transition"
              onClick={() => alert('Proceed to next step')}
              disabled={cartItems.length === 0}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart