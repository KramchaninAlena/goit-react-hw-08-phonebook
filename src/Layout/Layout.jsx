import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='contacts'>Contacts</NavLink>
        <NavLink to='register'>Registration</NavLink>
        <NavLink to='login'>Login</NavLink>
      </header>
     <main>
     <Outlet/>
     </main>
    </div>
  )
};

export default Layout;
