import { AppBar, Container } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import css from './Layout.module.css'

const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch()
  return (
    <div>
      <header className={css.header}>
        
          
            <NavLink to="/" className={css.navigate}>Home</NavLink>
            <NavLink to="contacts" className={css.navigate}>Contacts</NavLink>
            <NavLink to="register" className={css.navigate}>Registration</NavLink>
            {isLoggedIn ? (
              <button className={css.logOut} type="button" onClick={() => dispatch(logOut())}>Log Out</button>
            ) : (
              <NavLink to="login" className={css.navigate}>Log In</NavLink>
            )}

            
        
      
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
