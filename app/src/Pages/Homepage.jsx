import React from 'react'
import FooterHome from '../components/FooterHome'
import FooterMiddle from '../components/FooterMiddle'
// import Navbar from "../components/Navbar"
import DemoCarousel from '../components/Slider'
import SwipeToSlide from './MiddleSlider'

const Homepage = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <DemoCarousel/>
      <SwipeToSlide/>
      <FooterHome/>
      <FooterMiddle/>
    </div>
  )
}

export default Homepage
