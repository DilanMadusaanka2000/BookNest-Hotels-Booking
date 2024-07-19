import React from 'react'
import './header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed, faCar, faTaxi} from "@fortawesome/free-solid-svg-icons"

function Header() {
  return (
    <div className='header'>

        <div className="headerContainer">


        <div className="headerList">
            <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />

               <span>Stays</span>
            </div>



            <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />

               <span>Car Rentals</span>
            </div>



            <div className="headerListItem">
                <FontAwesomeIcon icon={faBed} />

               <span>Attractions</span>
            </div>



            <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />

               <span>Airport Taxis</span>
            </div>
        </div>
         <h1 className="headerTtile">A lifeTime of Discount? It's Genius</h1>
         <p className="headerDescription">Lorem ipsum, dolor sit amet consectetur adipisicing</p>
         <button className='headerButton'>Sign in / Register</button>
        </div>
    </div>
  )
}

export default Header