import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import ShopingAddressForm from './ShopingAddressForm';

function CartSummary() {
    const [showAddressForm, setShowAddressForm] = useState(false);

    const { cartItems } = useSelector((state) => state.cart);

    const totalPrice = cartItems.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity || 1), 0)
    const totalItems = cartItems.reduce((sum, item) => sum + Number(item.quantity || 1), 0)
    return (
        <div className="md:w-1/3 w-full bg-gray-50 rounded-lg p-6 shadow-sm mb-8 md:mb-0 md:ml-auto">
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
                    onClick={() => setShowAddressForm(true)}
                    // disabled={cartItems.length === 0}
                >
                    Proceed to Checkout
                </button>
            </div>
            <ShopingAddressForm
                isOpen={showAddressForm}
                onClose={() => setShowAddressForm(false)}
                onSave={() => setShowAddressForm(false)}
            />
        </div>
    )
}

export default CartSummary