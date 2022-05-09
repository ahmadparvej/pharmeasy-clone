import React from 'react'
import FooterHome from '../components/FooterHome'
import FooterMiddle from '../components/FooterMiddle'
import DemoCarousel from '../components/Slider'
import { DealsOfTheDay } from "../components/DealsOfTheDay";
import {useDispatch} from 'react-redux'
import {getData} from '../Redux/Products/Action'
const Homepage = () => {
  return (
    <div>
      <DemoCarousel/>
      <DealsOfTheDay/>
      <FooterHome/>
      <FooterMiddle/>
    </div>
  )
}

export default Homepage
