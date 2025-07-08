import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkoutItems: [],
  totalQuantity: 0,
  subtotal: 0,
  shipping: 0,
  total: 0,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    addTocheckout: (state, action) => {
      const item = action.payload;
      const existing = state.checkoutItems.find((p) => p.id === item.id);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.checkoutItems.push({ ...item });
      }
      checkoutSlice.caseReducers.calculateTotals(state);
    },
    removeFromcheckout: (state, action) => {
      state.checkoutItems = state.checkoutItems.filter(
        (p) => p.id !== action.payload
      );
      checkoutSlice.caseReducers.calculateTotals(state);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.checkoutItems.find((p) => p.id === id);
      if (item) {
        item.quantity = quantity;
      }
      checkoutSlice.caseReducers.calculateTotals(state);
    },
    setCheckoutItems: (state, action) => {
      state.checkoutItems = action.payload;
      checkoutSlice.caseReducers.calculateTotals(state);
    },
    calculateTotals: (state) => {
      let subtotal = 0;
      let totalQty = 0;
      state.checkoutItems.forEach((item) => {
        subtotal += item.price * item.quantity || item.price;
        totalQty += item.quantity;
      });
      state.subtotal = subtotal;
      state.totalQuantity = totalQty;
      state.shipping = 0;
      state.total = subtotal + state.shipping;
    },
    clearCheckout: (state) => {
      state.checkoutItems = [];
      checkoutSlice.caseReducers.calculateTotals(state);
    },
  },
});

export const {
  addTocheckout,
  removeFromcheckout,
  updateQuantity,
  setCheckoutItems,
  calculateTotals,
  clearCheckout,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
