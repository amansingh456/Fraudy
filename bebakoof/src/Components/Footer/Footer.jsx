import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <>
      <MainContainer>
            <TopSection>
                <Heading>Fraudy</Heading>
                <AllDataDiv>
                    <SingleDataDiv>
                        <p style={{color:"#fdd835", textAlign:"left", fontSize:"14px", letterSpacing: "1px", fontFamily: "Poppins"}}>CUSTOMER SERVICE</p>
                        <p style={{color:"#ffffff", textAlign:"left", fontSize:"13px", marginBottom:"0", letterSpacing:"0.5px"}}>Contact Us</p>
                        <p style={{color:"#ffffff", textAlign:"left", fontSize:"13px", marginBottom:"0", marginTop:"2px", letterSpacing:"0.5px"}}>Track Order</p>
                        <p style={{color:"#ffffff", textAlign:"left", fontSize:"13px", marginBottom:"0", marginTop:"2px", letterSpacing:"0.5px"}}>Return Order</p>
                        <p style={{color:"#ffffff", textAlign:"left", fontSize:"13px", marginBottom:"5px", marginTop:"2px", letterSpacing:"0.5px"}}>Cancel Order</p>
                    </SingleDataDiv>
                    <SingleDataDiv>
                        <p style={{color:"#fdd835", textAlign:"left", fontSize:"14px", letterSpacing: "1px", fontFamily: "Poppins"}}>COMPANY</p>
                        <p style={{color:"#ffffff", textAlign:"left", fontSize:"13px", marginBottom:"0", letterSpacing:"0.5px"}}>About Us</p>
                        <p style={{color:"#ffffff", textAlign:"left", fontSize:"13px", marginBottom:"0", marginTop:"2px", letterSpacing:"0.5px"}}>We're Hiring</p>
                        <p style={{color:"#ffffff", textAlign:"left", fontSize:"13px", marginBottom:"0", marginTop:"2px", letterSpacing:"0.5px"}}>Terms & Conditions</p>
                        <p style={{color:"#ffffff", textAlign:"left", fontSize:"13px", marginBottom:"0", marginTop:"2px", letterSpacing:"0.5px"}}>Privacy Policy</p>
                        <p style={{color:"#ffffff", textAlign:"left", fontSize:"13px", marginBottom:"5px", marginTop:"2px", letterSpacing:"0.5px"}}>Blog</p>
                    </SingleDataDiv>
                    <SingleDataDiv>
                        <p style={{color:"#fdd835", textAlign:"left", fontSize:"14px", letterSpacing: "1px", fontFamily: "Poppins"}}>CONNECT WITH US</p>
                        <p style={{color:"#ffffff", textAlign:"left", fontSize:"13px", marginBottom:"0", letterSpacing:"0.5px"}}><FacebookIcon/><span> &nbsp; 4.7M People Like This</span> </p>
                        <p style={{color:"#ffffff", textAlign:"left", fontSize:"13px", marginBottom:"0", marginTop:"2px", letterSpacing:"0.5px"}}>Track Order</p>
                        <p style={{color:"#ffffff", textAlign:"left", fontSize:"13px", marginBottom:"0", marginTop:"2px", letterSpacing:"0.5px"}}>Return Order</p>
                        <p style={{color:"#ffffff", textAlign:"left", fontSize:"13px", marginBottom:"5px", marginTop:"2px", letterSpacing:"0.5px"}}>Cancel Order</p>
                    </SingleDataDiv>
                </AllDataDiv>
            </TopSection>
      </MainContainer>
    </>
  )
}

export default Footer


const MainContainer = styled.div`
    width: 100%;
    height: 400px;
    background-color: #000000;
`

const TopSection = styled.div`
    width: 85%;
    margin: auto;
    padding-top: 20px;
`
const Heading = styled.p`
    letter-spacing: 1px;
    font-size: 24px;
    font-family: "Poppins";
    text-align: left;
    color: #fdd835;
    margin: 0;
`

const AllDataDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20;
`

const SingleDataDiv = styled.div`
    
`