import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAddContact, fetchDeleteContact, getContacts } from 'api/api';
import Notiflix from 'notiflix';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const data = await getContacts();
    
    return data;
  } catch (error) {
    console.log(error);
    
  }
});

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    try {
      const data = await fetchDeleteContact(id);
      Notiflix.Notify.success(`contact ${data.name} successfully deleted`);
      return data;
    } catch (error) {}
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await fetchAddContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
