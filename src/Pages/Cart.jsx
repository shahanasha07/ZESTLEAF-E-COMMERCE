import { faShoppingCart, faTrash, faMinus, faPlus, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useSelector } from 'react-redux'
import CartItem from '../Components/CartItem'
import CartModal from '../Components/CartModal'
import CartSummary from '../Components/CartSummary'
import ShoppingAddressForm from '../Components/ShoppingAddressForm'
import Payment from '../Components/Payment'

function Cart() {
  const { editIndex } = useSelector((state) => state.cart)
  const { paymentOpen } = useSelector((state) => state.address)

  return (
    <div className="min-h-screen bg-[#f6fdf2] relative">
      <CartModal />
      <Navbar />
      <div
        className={`max-w-5xl mx-auto p-6 bg-white rounded-xl shadow flex flex-col md:flex-row gap-8 relative top-30 z-10 ${editIndex !== null ? 'opacity-40 pointer-events-none' : ''}`}>
        <CartItem />
        <CartSummary />
      </div>
        <ShoppingAddressForm/>
      <Payment/>
    </div>
  )
}

export default Cart