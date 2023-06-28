import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  isLoading: false,
  isLoggedIn: false,
  errorMessage: "",
  successMessage: "",
  errors: {},
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
    setIsloading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state,action) => {
      state.errors[action.payload.key] = action.payload.value
    }
  },
});

export const { setCredentials, setIsLoggedIn, setIsloading, setError } =
  authSlice.actions;
export default authSlice.reducer;