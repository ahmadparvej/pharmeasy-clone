import React from 'react'
import FooterHome from '../components/FooterHome'
import Navbar from "../components/Navbar"
import DemoCarousel from '../components/Slider'

const Homepage = () => {
  return (
    <div>
      <Navbar/>
      <DemoCarousel/>
      <FooterHome/>
    </div>
  )
}

export default Homepage
