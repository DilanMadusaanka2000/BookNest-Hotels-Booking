import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'

function Home() {
  return (
    
    <div>
   
    <Navbar />
    <Header />
    <div className="homeContainer">
      <Featured />
    </div>


      
  

    </div>
  )
}

export default Home