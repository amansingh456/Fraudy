import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../Components/Footer/Footer'

import CarouselFirst from '../Components/HomePageComp/CarouselFirst'
import FinalLastSection from '../Components/HomePageComp/FinalLastSection'
import LastCarousel from '../Components/HomePageComp/LastCarousel'
import LastTopSection from '../Components/HomePageComp/LastTopSection'
import MiddleSection from '../Components/HomePageComp/MiddleSection'
import YellowDesign from '../Components/HomePageComp/YellowDesign'

const HomePage = () => {

  

  return (
    <>
        <CarouselFirst/> 
        <YellowDesign/>
        <MiddleSection/>
        <LastTopSection/>
        <LastCarousel/>
        <FinalLastSection/>
        <Footer/>
    </>
  )
}

export default HomePage
