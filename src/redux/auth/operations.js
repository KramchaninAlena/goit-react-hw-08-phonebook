import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const registrationUser = createAsyncThunk(
    'auth/registration',
    async (userData, { rejectWithValue }) => {
      try {
        const { data } = await axios.post('/users/signup', userData);
        return data;
      } catch (error) {
        console.log(error)
        rejectWithValue(error.message);
      }
    }
);
