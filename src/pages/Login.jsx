import { Button, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './login.module.css'


const Login = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    const { email, password } = evt.currentTarget.elements;
    const userData = {
      email: email.value,
      password: password.value,
    };
    dispatch(logIn(userData));
    console.log(userData)
  };
  return (
    <div className={css.container}>
      
      <form onSubmit={handleSubmit} className={css.form}>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          sx={{ bgcolor: '#fffaf0'}}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          sx={{ bgcolor: '#fffaf0'}}
        />
        <Button type='submit' variant="contained" className={css.btn} >Log In</Button>
        {/* <p>Or <NavLink to='/register'>Register</NavLink></p> */}
      </form>
    </div>
  );
};

export default Login;
