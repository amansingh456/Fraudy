import React from 'react'
import styled from 'styled-components'

const CategoriesImgData = [
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Jeans-men-1672915059.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668772677.jpg"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-new-pyjamas-1668772679.jpg"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-new-2-1669360792.jpg"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-new-joggers-1668773245.jpg"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Dress-1672907485.png"},
    
]

const LastTopSection = () => {
  return (
    <>
     <GangsWrapper>
        <Heading>THE GANG'S FAVOURITE</Heading>
        <GangsImageWrapper>
            <GangsImg src='https://images.bewakoof.com/uploads/grid/app/revamped-banner-MID-SIZE-B1G1-02-1673359273.jpg'/>
            <GangsImg src='https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-winterwear-common-Pastels-01-1673253851.jpg'/>
        </GangsImageWrapper>
        <GangsImageWrapper style={{marginTop:"15px"}}>
            <GangsImg src='https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-pj-offer-1673631218.jpg'/>
            <GangsImg src='https://images.bewakoof.com/uploads/grid/app/new-mid-banner-2023-printedsweatshoodsj-offer-1673631219.jpg'/>
        </GangsImageWrapper>
     </GangsWrapper> 
     <CategoriesWrapper>
        <Heading>CATEGORIES TO BAG</Heading>
        <CategoriesData>
            {CategoriesImgData.map((el,ind)=><CtaegoriesImg key={ind} src={el.url}/>)}
        </CategoriesData>
     </CategoriesWrapper>

    </>
  )
}

export default LastTopSection

const GangsWrapper = styled.div`
    margin-top: 50px;
`

const Heading = styled.p`
    font-size: 20px;
    letter-spacing: 2px;
    font-family: 'Poppins', sans-serif;
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

const CategoriesWrapper = styled.div`
    
`
const CategoriesData = styled.div`
    width: 98%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-top: -15px;
    @media all and (min-width: 310px) and (max-width: 600px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media all and (min-width: 601px) and (max-width: 900px){
        grid-template-columns: repeat(3, 1fr);
    }
`
const CtaegoriesImg = styled.img`
    width: 100%;
`