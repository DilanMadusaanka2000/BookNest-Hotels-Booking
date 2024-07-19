import React from 'react'
import './header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBed, faCalendarDays, faCar, faPerson, faTaxi} from "@fortawesome/free-solid-svg-icons"

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

               <span>Airport Taxis </span>
            </div>
        </div>
         <h1 className="headerTtile">A lifeTime of Discount? It's Genius</h1>
         <p className="headerDescription">Lorem ipsum, dolor sit amet consectetur adipisicing</p>
         <button className='headerButton'>Sign in / Register</button>


         <div className="headerSearch">
            
            <div className="headerSearchItem">

                <FontAwesomeIcon icon={faBed} className='headerIcon' />

                <input type="text" placeholder='Where are you going' className='headerSearchInput'/>
            </div>


            <div className="headerSearchItem">

                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />

                <span className='headerSeachText'>  date to </span>

            </div>



            <div className="headerSearchItem">

                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                <span className='headerSeachText'> to adults 2 children 1 room</span>
            </div>




            <div className="headerSearchItem">
                <button className='headerButton'>Search</button>
                    
            </div>


         </div>
        </div>
    </div>
  )
}

export default Header