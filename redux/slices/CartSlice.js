import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
  subtotal: 0,
  shipping: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existing = state.cartItems.find((p) => p.id === item.id);
      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.cartItems.push({ ...item });
      }
      cartSlice.caseReducers.calculateTotals(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((p) => p.id !== action.payload);
      cartSlice.caseReducers.calculateTotals(state);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((p) => p.id === id);
      if (item) {
        item.quantity = quantity;
      }
      cartSlice.caseReducers.calculateTotals(state);
    },
    calculateTotals: (state) => {
      let subtotal = 0;
      let totalQty = 0;
      state.cartItems.forEach((item) => {
        subtotal += item.price * item.quantity;
        totalQty += item.quantity;
      });
      state.subtotal = subtotal;
      state.totalQuantity = totalQty;
      state.shipping = 0;
      state.total = subtotal + state.shipping;
    },
    clearCart: (state) => {
      state.cartItems = [];
      cartSlice.caseReducers.calculateTotals(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  calculateTotals,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
