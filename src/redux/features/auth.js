import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isLoading: false,
  isLoggedIn: false,
  errorMessage: "",
  successMessage: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userData = action.payload;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setCredentials, setIsLoggedIn, setIsloading } =
  authSlice.actions;
export default authSlice.reducer;