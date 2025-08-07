import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { EDITED_CART_QTY, SET_EDIT_INDEX, SET_EDIT_QTY } from '../Redux/cartSlice/cartSlice'

function CartModal() {
    const { editIndex, editQty } = useSelector((state) => state.cart)

    const dispatch = useDispatch()
    const handleQtyChange = (type) => {
        if (type === 'inc') {
            dispatch({ type: SET_EDIT_QTY, payload: editQty + 1 })
        } else if (type === 'dec') {
            dispatch({ type: SET_EDIT_QTY, payload: Math.max(1, editQty - 1) })
        }
    }

    const handleSaveQty = () => {
        dispatch({ type: EDITED_CART_QTY, payload: { index: editIndex, qty: editQty } })
        dispatch({ type: SET_EDIT_INDEX, payload: null })
    }

    const handleCancelEdit = () => {
        dispatch({ type: SET_EDIT_INDEX, payload: null })
    }
    return (
        <div>
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
                                onClick={handleCancelEdit}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CartModal