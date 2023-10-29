import { Route, Routes } from 'react-router-dom';
import HomePage from 'pages/HomePage';
import Contacts from 'pages/Contacts';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Layout from 'Layout/Layout';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}


