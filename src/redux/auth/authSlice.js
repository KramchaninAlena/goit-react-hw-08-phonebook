import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, refreshUser, registrationUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: '',
    isRefreshing: false,
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registrationUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.pending, (state, { payload }) => {
        state.isLoggedIn = false;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(logOut.fulfilled, (state, { payload }) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
      });
  },
});

export const authReducer = authSlice.reducer;
