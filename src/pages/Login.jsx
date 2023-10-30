import { Button, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/auth/operations';

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
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="email"
          name="email"
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="password"
          name="password"
        />
        <Button type='submit' variant="contained">Log In</Button>
        <p>Or <NavLink to='/register'>Register</NavLink></p>
      </form>
    </div>
  );
};

export default Login;
