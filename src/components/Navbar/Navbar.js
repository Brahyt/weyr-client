import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import TokenService from '../../services/token-service'

function Navbar(props) {
  async function logout(){
    await TokenService.clearAuthToken()
    await props.history.push('/')
  }

  if (TokenService.hasAuthToken()) {
    return (
    <nav>
      <NavLink className='link home' to='/'>Home</NavLink>
      <NavLink className="link char-link" to='/characters' onClick={() => props.takeStep()}>Characters</NavLink>
      <NavLink className="link party-link" to='/parties' onClick={() => props.takeStep()}>Parties</NavLink>
      <Link className="link right" to="/" onClick={logout}>Log Out</Link>
    </nav>
    )
    } else {
      return (
        <nav>
          <NavLink className='link home' to='/'>Home</NavLink>
          <NavLink className='link right' to="/signup">Sign Up</NavLink>
          <NavLink className='link right' to="/login">Log In</NavLink>
        </nav>
      )
    }
}

export default Navbar;
