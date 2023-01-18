import React from 'react'
import Carousel from "react-multi-carousel"
import 'react-multi-carousel/lib/styles.css'
import styled from "styled-components"


const ItemsImgData = [
  {url:"https://images.bewakoof.com/uploads/grid/app/mad-india-common--1673630619.jpg"},
  {url:"https://images.bewakoof.com/uploads/grid/app/revamped-banner-1x1-B3A899-1673630084.jpg"},
  {url:"https://images.bewakoof.com/uploads/grid/app/b2g1-1x1-common-1670505865.jpg"},
  {url:"https://images.bewakoof.com/uploads/grid/app/oversized-tees-1x1-common-1673957836.jpg"},
  {url:"https://images.bewakoof.com/uploads/grid/app/Homepage-1X1-Winterwear-offer-02-1673631217.jpg"},
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




const CarouselFirst = () => {
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
    </>
  )
}

export default CarouselFirst



const ItemsImg = styled.img`
    width: 425px;
    height: 425px;
`





