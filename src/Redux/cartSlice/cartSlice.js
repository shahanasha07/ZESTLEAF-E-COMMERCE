import { createSlice } from '@reduxjs/toolkit';


const INITIAL_STATE = {
    cartItems: [],
    totalquantity: 0,
    editIndex: null,
    editQty: 1,


   
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        ADD_TO_CART: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
                state.totalquantity += 1;


            } else {
                state.cartItems.push({ ...item, quantity: 1 });
                state.totalquantity += 1;
            }
        },
        REMOVE_FROM_CART: (state, action) => {
           const itemId = action.payload;
           state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
           state.totalquantity -= 1;
           if (state.totalquantity < 0) {
                state.totalquantity = 0; 
           }
            alert('Item removed from cart');
           
        },
        SET_EDIT_INDEX: (state, action) => {
            state.editIndex = action.payload;

        },
        SET_EDIT_QTY: (state, action) => {
            state.editQty = action.payload;
        },
        EDITED_CART_QTY: (state, action) => {
            const { index, qty } = action.payload;
            if(index >= 0 && index < state.cartItems.length) {
                state.cartItems[index].quantity = qty;
            }
            state.totalquantity = state.cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0);
            alert('Quantity updated');

        },
      


    }
})

export const { ADD_TO_CART, REMOVE_FROM_CART, SET_EDIT_INDEX, SET_EDIT_QTY, EDITED_CART_QTY, } = cartSlice.actions;
export default cartSlice.reducer; 