import React from 'react'
import FooterHome from '../components/FooterHome'
import FooterMiddle from '../components/FooterMiddle'
// import Navbar from "../components/Navbar"
import DemoCarousel from '../components/Slider'
import Upper from '../components/Upper'
import SwipeToSlide from './MiddleSlider'

const Homepage = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <DemoCarousel/>
      <Upper/>
      <SwipeToSlide/>
      <FooterHome/>
      <FooterMiddle/>
    </div>
  )
}

export default Homepage
