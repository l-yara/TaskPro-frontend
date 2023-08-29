import { createSlice } from "@reduxjs/toolkit";
import {
  signin,
  signup,
  signOut,
  changeTheme,
  currentUser,
} from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  user: {
    name: null,
    email: null,
    theme: null,
  },
  token: null,
  isRefreshing: false,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,

  extraReducers: (builder) => {
    builder

      .addCase(signup.pending, handlePending)
      .addCase(signup.rejected, handleRejected)
      .addCase(signup.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      })

      .addCase(signin.pending, handlePending)
      .addCase(signin.rejected, handleRejected)
      .addCase(signin.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.user.theme = action.payload.user.theme;
      })

      .addCase(signOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(changeTheme.fulfilled, (state, action) => {
        state.user.theme = action.payload.theme;
      })
      .addCase(currentUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(currentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(currentUser.rejected, (state) => {
        state.isRefreshing = false;
      });
  },
});

export const authReducer = authSlice.reducer;
