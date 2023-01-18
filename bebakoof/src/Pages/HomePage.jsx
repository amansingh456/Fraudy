import React from 'react'
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
    </>
  )
}

export default HomePage
