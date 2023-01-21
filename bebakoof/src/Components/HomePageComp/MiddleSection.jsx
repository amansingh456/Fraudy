import React from 'react'
import styled from 'styled-components'
import bgImg from "../../Images/ye.webp"




const PopularCategoriesData = [
    { url: "https://images.bewakoof.com/uploads/grid/app/category-box-printed-tshirt-men-1672915214.png" },
    { url: "https://images.bewakoof.com/uploads/grid/app/category-box-Oversize-tshirt-women-1672915214.png" },
    { url: "https://images.bewakoof.com/uploads/grid/app/category-box-Sweatshirt---Hoodies-1672915219.png" },
    { url: "https://images.bewakoof.com/uploads/grid/app/category-box-Jackets-women-1673010261.png" },
    { url: "https://images.bewakoof.com/uploads/grid/app/category-box-Sweater-1673010262.png" },
    { url: "https://images.bewakoof.com/uploads/grid/app/category-box-Boyfriend-Tshirt-women-1672915204.png" },
]





const BiggestDealsData = [
    {url:"https://images.bewakoof.com/t320/women-s-black-killer-queen-oversized-hoodie-568951-1673613723-1.jpg", name:"Fraudy", title:"Women's Black Killer Queen", rupee:"₹", price:"349", strikePrice:"₹999", off:"65% OFF"},
    {url:"https://images.bewakoof.com/t320/women-s-brownweirdos-boyfriend-t-shirt-568935-1673613958-1.jpg", name:"Fraudy", title:"Women's Brown Weirdos Gras", rupee:"₹", price:"351", strikePrice:"₹997", off:"62% OFF"},
    {url:"https://images.bewakoof.com/t320/men-s-blackriot-xxxtentican-plus-size-round-neck-t-shirt-568934-1673613201-1.jpg", name:"Fraudy", title:"Men's Black Riot XXX Tentacion", rupee:"₹", price:"599", strikePrice:"₹1399", off:"57% OFF"},
    {url:"https://images.bewakoof.com/t320/men-s-black-web-slinger-oversized-t-shirt-568920-1673610952-1.jpg", name:"Fraudy", title:"Men's Black Web Slinger Graph", rupee:"₹", price:"499", strikePrice:"₹1499", off:"66% OFF"},
    {url:"https://images.bewakoof.com/t320/women-s-blackdeathnote-ryuk-oversized-t-shirt-568922-1673597249-1.jpg", name:"Fraudy", title:"Women's Black Deathnote Ryux", rupee:"₹", price:"499", strikePrice:"₹1499", off:"70% OFF"},
]



const MiddleSection = () => {
    return (
        <>
            <HeroImageWrapper>
                <HeroImage src='https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Men-1673937544.jpg' />
                <HeroImage src='https://images.bewakoof.com/uploads/grid/app/DOTW-Split-banner-Desktop-Women--1673937544.jpg' />
            </HeroImageWrapper>
            <CategoriesWrapper>
                <Heading>POPULAR CATEGORIES</Heading>
                <AllSingleDiv>
                    {PopularCategoriesData.map((el, ind) => {
                        return (
                            <SingleDiv key={ind}>
                                <SingleDivImg src={el.url} />
                            </SingleDiv>
                        )
                    })}
                </AllSingleDiv>
            </CategoriesWrapper>
            <BiggestDealsWrapper>
                <Heading style={{paddingTop:"10px"}}>BIGGEST DEALS!</Heading>   
                <SingleDataContainer>
                    {BiggestDealsData.map((el,ind)=>{
                        return(
                            <SingleDataDiv key={ind}>
                                <SingleDivDataImg src={el.url}/>
                                <p style={{margin:"0", textAlign:"left", marginLeft:"5px", fontSize:"14px", color:"grey"}}>{el.name}</p>
                                <p style={{margin:"0", textAlign:"left", marginLeft:"5px", fontSize:"15px"}}>{el.title}</p>
                                <p style={{margin:"0", textAlign:"left", marginLeft:"5px"}}><span style={{fontSize:"12px", fontFamily:"Poppins"}}>{el.rupee}</span><span style={{fontWeight:"bold", fontFamily:"Poppins", marginLeft:"2px"}}>{el.price}</span> <span style={{fontSize:"12px", marginLeft:"5px"}}> <strike>{el.strikePrice}</strike> </span> <span style={{fontSize:"14px", fontFamily:"Poppins", marginLeft:"10px", color:"#1bbf64"}}>{el.off}</span> </p>

                            </SingleDataDiv>
                        )
                    })}
                </SingleDataContainer> 
            </BiggestDealsWrapper>        
        </>
    )
}

export default MiddleSection


const HeroImageWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;
`

const HeroImage = styled.img`
    width: 50%;
    @media all and (min-width: 310px) and (max-width: 600px){
        height: 200px;
    }
`

const CategoriesWrapper = styled.div`
    margin-top: 10px;
`
const Heading = styled.p`
    text-align: center;
    font-size: 20px;
    font-family: 'Poppins', sans-serif;
    letter-spacing: 2px;
    margin-bottom: 0;
    /* font-weight: 500; */
`
const AllSingleDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    @media all and (min-width: 310px) and (max-width: 600px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media all and (min-width: 601px) and (max-width: 900px){
        grid-template-columns: repeat(3, 1fr);
    }
`
const SingleDiv = styled.div`
    
`
const SingleDivImg = styled.img`
    width: 100%;
`

const BiggestDealsWrapper = styled.div`
    background-image:url(${bgImg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
    /* height: 400px; */
    width: 100%;
`
const SingleDataContainer = styled.div`
    width: 95%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    margin-top: 10px;
    @media all and (min-width: 310px) and (max-width: 600px){
        grid-template-columns: repeat(2, 1fr);
    }
    @media all and (min-width: 601px) and (max-width: 900px){
        grid-template-columns: repeat(3, 1fr);
    }

`

const SingleDataDiv = styled.div`
    width: 100%;
    height: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 5px;
`
const SingleDivDataImg = styled.img`
    width: 100%;
    height: 80%;
    border-radius: 5px;
`