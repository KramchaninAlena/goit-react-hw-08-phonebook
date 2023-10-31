import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import css from './Layout.module.css';
import { useAuth } from 'components/hooks/useAuth';


const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const { user } = useAuth();
  
  const dispatch = useDispatch();
  return (
    <div className={css.container}>
      <AppBar position="static">
        <Toolbar>
          <header className={css.header}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink to="/" className={css.navigate}>
                Home
              </NavLink>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 4 }}>
              <NavLink to="contacts" className={css.navigate}>
                Contacts
              </NavLink>
            </Typography>

            <div className={css.auth}>
              {/* <Typography variant="h6" component="div" sx={{}}>
                {!isLoggedIn && (
                  <NavLink to="register" className={css.navigate}>
                    Registration
                  </NavLink>
                )}
              </Typography>
              {isLoggedIn && (
                <Typography variant="h6" component="div" sx={{ flexGrow: 4 }}>
                  Welcome {user.name}
                </Typography>
              )} */}
              {isLoggedIn ? (
              <p >Welcome, {user.name}</p>
            ) : (
              <NavLink  to="/register">
                Registration
              </NavLink>
            )}
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                {isLoggedIn ? (
                  <Button
                    variant="outlined"
                    color="inherit"
                    type="button"
                    onClick={() => dispatch(logOut())}
                    className={css.logOut}
                  >
                    Log Out
                  </Button>
                ) : (
                  <NavLink to="login" className={css.navigate}>
                    Log In
                  </NavLink>
                )}
              </Typography>
            </div>
          </header>
        </Toolbar>
      </AppBar>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
