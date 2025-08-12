


import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  fields: {
    name: '',
    contactNumber: '',
    house: '',
    pincode: '',
    city: '',
    state: '',
  },
  errors: {},
  isOpen: false,
  paymentOpen: false,
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state.fields[field] = value;

      // Clear only that field's error if present
      if (state.errors[field]) {
        delete state.errors[field];
      }
      
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    clearErrors: (state) => {
      state.errors = {};
      state.isOpen = false;
    },
    resetForm: () => initialState,

    handleFormOpen: (state, action) => {
        state.isOpen = action.payload;

    },
    handlePayment: (state, action) => {
      state.paymentOpen = action.payload;
      console.log('payment page is open');
      
    }
  },
});

export const { updateField, setErrors, clearErrors, resetForm, handleFormOpen ,handlePayment} = addressSlice.actions;
export default addressSlice.reducer;
