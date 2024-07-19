import React from 'react'
import './navbar.css'


function Navbar() {
  return (
    <div>
    
     
      <div className="navbar">
        <div className="navContainer">
          <span className='logo'>Booking.com</span>

          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login </button>
          


          </div>
        </div>
      </div>

      
    </div>
  )
}

export default Navbar