import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
      <MainContainer>
            <TopSection>
                <Heading>Fraudy</Heading>
                <AllDataDiv>
                    <SingleDataDiv>
                        <SubHeading>CUSTOMER SERVICE</SubHeading>
                        <SubHeadingTop>Contact Us</SubHeadingTop>
                        <SubHeadingMiddle>Track Order</SubHeadingMiddle>
                        <SubHeadingMiddle>Return Order</SubHeadingMiddle>
                        <SubHeadingLast>Cancel Order</SubHeadingLast>
                    </SingleDataDiv>
                    <SingleDataDiv>
                        <SubHeading>COMPANY</SubHeading>
                        <SubHeadingTop>About Us</SubHeadingTop>
                        <SubHeadingMiddle>We're Hiring</SubHeadingMiddle>
                        <SubHeadingMiddle>Terms & Conditions</SubHeadingMiddle>
                        <SubHeadingMiddle>Privacy Policy</SubHeadingMiddle>
                        <SubHeadingLast>Blog</SubHeadingLast>
                    </SingleDataDiv>
                    <SpecailSingleDataDiv>
                        <SubHeading>CONNECT WITH US</SubHeading>
                        <SocialDiv><FacebookIcon/><span> &nbsp; 4.7M People Like This</span></SocialDiv>
                        <SocialDiv><InstagramIcon/><span> &nbsp; 1M Followers</span> </SocialDiv>
                        <SocialDiv><YouTubeIcon/><span> &nbsp; 5M Subscribers</span> </SocialDiv>
                    </SpecailSingleDataDiv>
                    <SingleDataDiv style={{marginBottom:"10px"}}>
                        <SubHeading>KEEP UP TO DATE</SubHeading>
                        <Input type="email" placeholder='Enter Email Id' />
                        <Button>SUBSCRIBE</Button>
                    </SingleDataDiv>
                </AllDataDiv>
                {/* <p style={{color:"#ffffff", fontFamily:"Poppins", marginTop:"20px", textAlign:"center"}}>© 2023, Fraudy.com</p> */}
            </TopSection>
      </MainContainer>
    </>
  )
}

export default Footer


const MainContainer = styled.div`
    width: 100%;
    height: auto;
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
    @media all and (min-width: 310px) and (max-width: 600px){
        text-align: center;
    }
`

const AllDataDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20;
    @media all and (min-width: 310px) and (max-width: 600px){
        grid-template-columns: repeat(1, 1fr);
    }
    @media all and (min-width: 601px) and (max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }
`

const SingleDataDiv = styled.div`
    
`
const SpecailSingleDataDiv = styled.div`
    @media all and (min-width: 310px) and (max-width: 600px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const SubHeading = styled.p`
    color: #fdd835;
    text-align: left;
    font-size: 14px;
    letter-spacing: 1px;
    font-family: "Poppins";
    @media all and (min-width: 310px) and (max-width: 600px){
        text-align: center;
        font-size: 15px;
    }
`
const SubHeadingTop = styled.p`
    color: #ffffff;
    text-align: left;
    margin-bottom: 0;
    font-size: 13px;
    letter-spacing: 0.5px;
    @media all and (min-width: 310px) and (max-width: 600px){
        text-align: center;
        font-size: 14px;
    }
`
const SubHeadingMiddle = styled.p`
    color: #ffffff;
    text-align: left;
    margin-bottom: 0;
    margin-top: 2px;
    font-size: 13px;
    letter-spacing: 0.5px;
    @media all and (min-width: 310px) and (max-width: 600px){
        text-align: center;
        font-size: 14px;
    }
`
const SubHeadingLast = styled.p`
    color: #ffffff;
    text-align: left;
    margin-bottom: 5;
    margin-top: 2px;
    font-size: 13px;
    letter-spacing: 0.5px;
    @media all and (min-width: 310px) and (max-width: 600px){
        text-align: center;
        font-size: 14px;
    }
`

const SocialDiv = styled.p`
    color: #ffffff;
    margin-bottom: 0;
    letter-spacing: 0.5px;
    font-size: 13px;
    display: flex;
    align-items: center;
    @media all and (min-width: 310px) and (max-width: 600px){
        text-align: center !important;
        font-size: 14px;
    }
`



const Input = styled.input`
    outline: none;
    border: none;
    border-bottom: 1.5px solid #fdd835;
    background-color: #000000;
    color: #ffffff;
    left: 0;
`

const Button = styled.button`
    background-color: #fdd835;
    padding-bottom: 2.5px;
    padding-top: 5px;
    padding-left: 5px;
    padding-right: 5px;  
`