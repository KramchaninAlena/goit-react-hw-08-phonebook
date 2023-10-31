import { useDispatch, useSelector } from 'react-redux';
import css from '../Form/Form.module.css';
import React, { useState } from 'react';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/thunks';
import Notiflix from 'notiflix';
import { Button, TextField } from '@mui/material';

export default function Form({ createContacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const onSubmit = evt => {
    evt.preventDefault();
    if (contacts.find(el => el.name === name)) {
      Notiflix.Notify.warning(`${name} this contact exists`);
      setName('');
      setNumber('');
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      
      <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        className={css.formInput} sx={{ bgcolor: '#fffaf0'}}/>
     <TextField id="outlined-basic" label="Number" variant="outlined" onChange={handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        className={css.formInput} sx={{ bgcolor: '#fffaf0'}}/>
      
      
      <Button type='submit' variant="contained" className={css.formBtn} >Add Contact</Button>
    </form>
  );
}
