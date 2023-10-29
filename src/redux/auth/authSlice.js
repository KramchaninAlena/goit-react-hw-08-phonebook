import { createSlice } from "@reduxjs/toolkit";
import { registrationUser } from "./operations";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        token:'', 
    },
    extraReducers: builder => {
        builder
          .addCase(registrationUser.fulfilled, (state, { payload }) => {
            console.log(payload)
            state.token = payload.token;
            state.user = payload.user;
            
          })
        
    },
  });
  
export const authReducer = authSlice.reducer;