import { useDispatch, useSelector } from 'react-redux';
import css from '../Contact/Contact.module.css';
import { selectFilterName, selectLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/thunks';
import { Loader } from 'components/Section/Loader';

export function Contact() {
  const contacts = useSelector(selectFilterName);
  const isLoading = useSelector(selectLoading)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {isLoading && <Loader />}
      {contacts.map(({ id, name, phone }) => (
        <li className={css.item} key={id}>
          {name}: <span>{phone}</span>
          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
