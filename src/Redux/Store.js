import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice/cartSlice';
import addressReducer from "./cartSlice/addressSlice";

const store = configureStore({
    reducer: {
        cart:cartReducer,
        address:addressReducer,
    }
})

export default store;