import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: {
    firstname: "",
    lastname: "",
    email: "",
    address: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    },
  },
});

export const { updateProfile } = userSlice.actions;
export default userSlice.reducer;
