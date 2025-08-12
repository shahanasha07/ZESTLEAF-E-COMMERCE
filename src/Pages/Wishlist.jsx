import React from 'react'
import ShoppingAddressForm from '../Components/ShoppingAddressForm'
import { useSelector } from 'react-redux'
import Payment from '../Components/Payment';

function Wishlist() {
  const { fields } = useSelector((state) => state.address);
  console.log("this wishlist access", fields.name);
  
  return (
    <div>
      <h1>Wishlist</h1>
<Payment/>
    </div>
  )
}

export default Wishlist