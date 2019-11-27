import React from 'react';
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to="/signup">Sign Up</NavLink>
      <NavLink to="/login">Log In</NavLink>
      <NavLink to='/characters'>Characters</NavLink>
      <NavLink to='/parties'>Parties</NavLink>
    </nav>
  );
}

export default Navbar;
