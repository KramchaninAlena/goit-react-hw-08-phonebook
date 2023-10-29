import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAddContact, fetchDeleteContact, getContacts } from 'api/api';
import Notiflix from 'notiflix';

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async () => {
  try {
    const data = await getContacts();
    Notiflix.Notify.info(`There are ${data.length} friends in your contacts`);
    return data;
  } catch (error) {
    console.log(error);
    Notiflix.Notify.warning(error.mesage);
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
  async contact => {
    try {
      const data = await fetchAddContact(contact);
      Notiflix.Notify.success(`contact ${data.name} successfully added`);
      return data;
    } catch (error) {
      Notiflix.Notify.warning(error.mesage);
    }
  }
);
