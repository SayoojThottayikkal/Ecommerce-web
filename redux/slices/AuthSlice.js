import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("authUser", JSON.stringify(action.payload));
      localStorage.setItem("isAuthenticated", "true");
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("authUser");
      localStorage.removeItem("isAuthenticated");
    },
    loadAuthFromStorage: (state) => {
      const storedUser = localStorage.getItem("authUser");
      const isAuth = localStorage.getItem("isAuthenticated");
      if (storedUser && isAuth === "true") {
        state.user = JSON.parse(storedUser);
        state.isAuthenticated = true;
      }
    },
  },
});

export const { loginSuccess, logout, loadAuthFromStorage } = authSlice.actions;
export default authSlice.reducer;
