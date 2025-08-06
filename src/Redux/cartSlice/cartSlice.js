import { createSlice } from '@reduxjs/toolkit';


const INITIAL_STATE = {
    cartItems: [],


   
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: INITIAL_STATE,
    reducers: {
        addtocart: (state, action) => {
            const item = action.payload;
            const existingItem = state.cartItems.find((cartItem) => cartItem.id === item.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...item, quantity: 1 });
            }
        },
        REMOVE_FROM_CART: (state, action) => {
           const itemId = action.payload;
           state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
           
        },
        EDITED_CART_QTY: (state, action) => {
            const { index, qty } = action.payload;
            if(index >= 0 && index < state.cartItems.length) {
                state.cartItems[index].quantity = qty;
            }
        },


    }
})

export const { addtocart, REMOVE_FROM_CART, EDITED_CART_QTY } = cartSlice.actions;
export default cartSlice.reducer; 