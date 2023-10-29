import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, registrationUser } from './operations';

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
        
      });
  },
});

export const authReducer = authSlice.reducer;
