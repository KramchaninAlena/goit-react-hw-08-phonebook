import { useDispatch, useSelector } from 'react-redux';
import css from '../Contact/Contact.module.css';
import { selectFilterName, selectLoading } from 'redux/selectors';
import { useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/thunks';
import { Loader } from 'components/Section/Loader';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { Avatar, Button, IconButton, List, ListItem, ListItemAvatar } from '@mui/material';
import { Delete } from '@mui/icons-material';


export function Contact() {
  const contacts = useSelector(selectFilterName);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  return (
    <div className={css.container}>
      <List
      
    >
      <ul className={css.list}>
        {isLoading && <Loader />}

        {contacts.map(({ id, name, number }) => (
         
          <li className={css.item} key={id}>
            {/* <ListItemAvatar>
              <Avatar></Avatar>
            </ListItemAvatar> */}
             <span>{name}: {number}</span>
            <Button variant="contained" startIcon={<Delete />}  onClick={() => dispatch(deleteContact(id))}>Delete</Button>
            
          </li>
       
        ))}
      </ul>
      </List>
     </div>
  );
}
