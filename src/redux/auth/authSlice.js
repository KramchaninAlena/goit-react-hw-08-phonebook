import { createSlice } from '@reduxjs/toolkit';
import { refreshUser, registrationUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: '',
  },
  extraReducers: builder => {
    builder
      .addCase(registrationUser.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.token = payload.token;
        state.user = payload.user;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
      });
  },
});

export const authReducer = authSlice.reducer;
