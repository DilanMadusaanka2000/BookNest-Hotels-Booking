import React from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    
    <div>
   
    <Navbar />
    <Header />
    <div className="homeContainer">
      <Featured />
      <h1 className="homeTitle">Popular Stays Recommended for You </h1>
      <PropertyList/>
      <h1 className="homeTitle">Stays for Guests</h1>
      <FeaturedProperties />
      <MailList />
      <Footer />
    </div>


      
  

    </div>
  )
}

export default Home