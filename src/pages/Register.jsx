import { useDispatch } from 'react-redux';
import { registrationUser } from 'redux/auth/operations';

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
    <div>
      Register
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="password" name="password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
