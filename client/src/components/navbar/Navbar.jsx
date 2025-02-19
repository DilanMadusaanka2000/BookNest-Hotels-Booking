import React, { useContext } from 'react'
import './navbar.css'
import { Link } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';

function Navbar() {

    const { user } = useContext(AuthContext);
  
  return (
    <div>
    
     
      <div className="navbar">
        <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">Booking.com</span>
        </Link>
        {user ? user.username : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
        </div>
      </div>

      
    </div>
  )
}

export default Navbar