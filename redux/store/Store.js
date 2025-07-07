import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/AuthSlice";
import cartReducer from "../slices/CartSlice";
import wishlistReducer from "../slices/wishlistSlice";
import checkoutReducer from "../slices/CheckoutSlice";
import userReducer from "../slices/userSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
    user: userReducer,
    wishlist: wishlistReducer,
    checkout: checkoutReducer,
  },
});
