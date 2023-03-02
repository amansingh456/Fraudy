import React from 'react'
import styled from 'styled-components'


const FinalLastSection = () => {
  return (
    <>
        <GangsWrapper>
            <Heading>THE GANG'S FAVOURITE</Heading>
            <GangsImageWrapper>
                <GangsImg src='https://images.bewakoof.com/uploads/grid/app/new-mid-banner-knitted-polo-tees-1671771476.jpg'/>
                <GangsImg src='https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-BFtees-offer-1673631218.jpg'/>
            </GangsImageWrapper>
            <GangsImageWrapper style={{marginTop:"15px"}}>
                <GangsImg src='https://images.bewakoof.com/uploads/grid/app/plus-size-mid-banner-1671788992.jpg'/>
                <GangsImg src='https://images.bewakoof.com/uploads/grid/app/windcheater-40-off-1673631221.jpg'/>
            </GangsImageWrapper>
        </GangsWrapper>
        <ImageWrapper>
         <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1672040129.jpg" alt="Yellow_Design" width="100%" />
        </ImageWrapper>  
        <ImageWrapper style={{marginTop:"10px", marginBottom:"-10px"}}>
         <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-3-1669022420.jpg" alt="Yellow_Design" width="100%" />
        </ImageWrapper>  
    </>
  )
}

export default FinalLastSection

const GangsWrapper = styled.div`
    margin-top: 50px;
`

const Heading = styled.p`
    font-size: 20px;
    letter-spacing: 2px;
    font-family: 'Poppins', sans-serif;
    margin-top: -40px;
    margin-bottom: 10px;
`

const GangsImageWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2 , 1fr);
    gap: 10px;
`
const GangsImg = styled.img`
    width: 100%;
`


const ImageWrapper = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 25px;
`