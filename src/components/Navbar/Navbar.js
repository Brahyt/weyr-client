import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import TokenService from '../../services/token-service'

function Navbar(props) {
  async function logout(){
    await TokenService.clearAuthToken()
    await props.history.push('/')
  }

  if (TokenService.hasAuthToken()) {
    return (
    <nav>
      <Link
        to="/"
        onClick={logout}
      >Log Out</Link>
      <NavLink to='/characters'>Characters</NavLink>
      <NavLink to='/parties'>Parties</NavLink>
    </nav>
    )
    } else {
      return (
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/login">Log In</NavLink>
        </nav>
      )
    }
}

export default Navbar;
