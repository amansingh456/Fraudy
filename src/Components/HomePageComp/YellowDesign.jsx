import React from 'react'
import styled from 'styled-components'

const CategoriesData = [
    {url:"https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-bestseller-1671624963.jpg", title:"Bestsellers"},
    {url:"https://images.bewakoof.com/uploads/grid/app/Thumbnail-New-Arrivals-Common-1668508339.jpg", title:"New Arrivals"},
    {url:"https://images.bewakoof.com/uploads/grid/app/hotdeals-2-1668491210.jpg", title:"Hot Deals"},
    {url:"https://images.bewakoof.com/uploads/grid/app/Thumbnail-Collabs-Common-1668508338.jpg", title:"Official Collaborations"},
    {url:"https://images.bewakoof.com/uploads/grid/app/last-size-new-thumbnaik-1668508337.jpg", title:"Last Sizes Left"},
    {url:"https://images.bewakoof.com/uploads/grid/app/new-thumbnail-icon-2022-copy-1669723278.jpg", title:"Plus Size"},
    {url:"https://images.bewakoof.com/uploads/grid/app/me-shirt-thumbnail-1668508337.jpg", title:"Customization"},
    {url:"https://images.bewakoof.com/uploads/grid/app/image-1668598708.png", title:"Coupon Offers"},

]

const YellowDesign = () => {
  return (
    <>  
        <ImageWrapper>
         <img src="https://images.bewakoof.com/uploads/grid/app/Desktop-Strip-6-1669115141.jpg" alt="Yellow_Design" width="100%" />
        </ImageWrapper>

        <CategoriesWrapper>
            {CategoriesData.map((el,ind)=>{
                return(
                    <SingleDiv key={ind}>
                        <SingleDivImg src={el.url} alt={el.title} />
                        <SingleDivPara>{el.title}</SingleDivPara>
                    </SingleDiv>
                )
            })}
        </CategoriesWrapper>
    </>
  )
}

export default YellowDesign

const ImageWrapper = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 15px;
`

const CategoriesWrapper  = styled.div`
    width: 85%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    gap: 20px;
    margin-top: 10px;
    @media all and (max-width: 1000px) and (min-width: 650px){
        grid-template-columns: repeat(4, 1fr);
    }
    @media all and (max-width: 649px) and (min-width: 310px){
        grid-template-columns: repeat(2, 1fr);
    }
`

const SingleDiv = styled.div`
    
`

const SingleDivImg = styled.img`
    width: 100%;
`

const SingleDivPara = styled.p`
    font-size: 12px;
    font-family: 'Poppins', sans-serif;
    @media all and (max-width: 1000px) and (min-width: 650px){
        font-size: 14px;
    }
    @media all and (max-width: 649px) and (min-width: 310px){
        font-size: 15px;
    }
`