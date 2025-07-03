import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/AuthSlice";
import cartReducer from "../slices/CartSlice";
import wishlistReducer from "../slices/wishlistSlice";
import checkoutReducer from "../slices/CheckoutSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    checkout: checkoutReducer,
  },
});
