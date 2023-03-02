import React from 'react'
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import styled from "styled-components"


const ItemsImgData = [
  {url:"https://images.bewakoof.com/uploads/grid/app/static-1x1-Cargo-offer-1673631220.jpg"},
  {url:"https://images.bewakoof.com/uploads/grid/app/static-1x1-indo-common-1673685812.jpg"},
  {url:"https://images.bewakoof.com/uploads/grid/app/puffer-40-off-1673631220.jpg"},
  {url:"https://images.bewakoof.com/uploads/grid/app/hot-new-evrythng-1x1-01-1672806265.gif"},
  {url:"https://images.bewakoof.com/uploads/grid/app/oversized-tees-1x1-common-1673957836.jpg"},
]

const CategoriesImgData = [
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-Mobile-covers-1672907490.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-new-mugs-1673005212.jpg"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-backpacks-1672907481.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-notebooks-1672896372.jpg"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-sliders-men-1672907494.png"},
    {url:"https://images.bewakoof.com/uploads/grid/app/category-box-caps-1672907483.png"},
    
]


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };


const LastCarousel = () => {
  return (
    <>
        <Carousel
            swipeable={false}
            draggable={false}
            // showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
           {ItemsImgData.map((el,ind)=><div key={ind}><ItemsImg src={el.url}/></div>)}
        </Carousel>
        <ImageWrapper>
         <img src="https://images.bewakoof.com/uploads/grid/app/desktop-survey-1673330211.jpg" alt="Yellow_Design" width="100%" />
        </ImageWrapper>

        <CategoriesWrapper>
        <Heading>TOP ACCESSORIES</Heading>
        <CategoriesData>
            {CategoriesImgData.map((el,ind)=><CtaegoriesImg key={ind} src={el.url}/>)}
        </CategoriesData>
     </CategoriesWrapper>
    </>
  )
}

export default LastCarousel


const ItemsImg = styled.img`
    width: 425px;
    height: 425px;
`

const ImageWrapper = styled.div`
    width: 100%;
    margin: auto;
    margin-top: 25px;
`

const Heading = styled.p`
    font-size: 20px;
    letter-spacing: 2px;
    font-family: 'Poppins', sans-serif;
    /* margin-top: 30px;
    margin-bottom: 20px; */
`


const CategoriesWrapper = styled.div`
    
`
const CategoriesData = styled.div`
    width: 98%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    margin-top: -15px;
    margin-bottom: 0 !important;
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