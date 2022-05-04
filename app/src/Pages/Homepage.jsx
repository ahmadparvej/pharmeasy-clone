import React from 'react'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar"
import DemoCarousel from '../components/Slider'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <DemoCarousel/>
      <Footer/>
    </div>
  )
}

export default Homepage
