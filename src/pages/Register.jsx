import { useDispatch } from 'react-redux';
import { registrationUser } from 'redux/auth/operations';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import css from './Register.module.css'

const Register = () => {
  const dispatch = useDispatch();
  // dispatch(registrationUser({ name: 'kughduj', email: 'dsvsfkijfirf@mail.com', password: 'gkrokro5664' }));

  const handleSubmit = evt => {
    evt.preventDefault();
    const { name, email, password } = evt.currentTarget.elements;
    const userData = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(registrationUser(userData));
  };
  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
      
      <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text" name="name"
          sx={{ bgcolor: '#fffaf0'}}
        />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email" name="email"
          sx={{ bgcolor: '#fffaf0'}}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          type="password" name="password"
          sx={{ bgcolor: '#fffaf0'}}
        />
        <Button type='submit' variant="contained" className={css.btn} >Register</Button>        
        {/* <button type="submit">Register</button> */}
      </form>
    </div>
  );
};

export default Register;
