import { faMinus, faPen, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { REMOVE_FROM_CART, SET_EDIT_INDEX, SET_EDIT_QTY } from '../Redux/cartSlice/cartSlice'

function CartItem() {

    const { cartItems } = useSelector((state) => state.cart)
    const dispatch = useDispatch()

    const handleRemove = (idx) => {
        dispatch({ type: REMOVE_FROM_CART, payload: cartItems[idx].id })
    }

    const handleEdit = (index) => {
        dispatch({ type: SET_EDIT_INDEX, payload: index })
        dispatch({ type: SET_EDIT_QTY, payload: cartItems[index].quantity || 1 })
    }

    return (
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
                                    <div className="flex items-center gap-4">
                                        <p className="text-gray-600">Price: ${item.price}</p>
                                        <div className="flex items-center gap-2 ml-4">
                                            <span className="text-gray-500">Qty:</span>
                                            <span className="font-semibold">{item.quantity || 1}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button
                                    className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 cursor-pointer"
                                    onClick={() => handleEdit(index)}
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

    )
}

export default CartItem