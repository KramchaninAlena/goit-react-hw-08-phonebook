import { useDispatch, useSelector } from 'react-redux';
import css from '../Form/Form.module.css';
import React, { useState } from 'react';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/thunks';
import Notiflix from 'notiflix';

export default function Form({ createContacts }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
    } else {
      setPhone(value);
    }
  };

  const onSubmit = evt => {
    evt.preventDefault();
    if (contacts.find(el => el.name === name)) {
      Notiflix.Notify.warning(`${name} this contact exists`);
      setName('');
      setPhone('');
      return;
    }

    dispatch(addContact({ name, phone }));
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={onSubmit}>
      <label htmlFor="InputName" className={css.formLabel}>
        Name
      </label>
      <input
        onChange={handleChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        className={css.formInput}
      />
      <label htmlFor="Inputnumber" className={css.formLabel}>
        Number
      </label>
      <input
        onChange={handleChange}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={phone}
        className={css.formInput}
      />
      <button className={css.formBtn}>Add Contact</button>
    </form>
  );
}
