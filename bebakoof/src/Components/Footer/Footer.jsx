import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GavelIcon from '@mui/icons-material/Gavel';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AndroidIcon from '@mui/icons-material/Android';
import AppleIcon from '@mui/icons-material/Apple';

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
                            <SocialDiv><FacebookIcon /><span> &nbsp; 4.7M People Like This</span></SocialDiv>
                            <SocialDiv><InstagramIcon /><span> &nbsp; 1M Followers</span> </SocialDiv>
                            <SocialDiv><YouTubeIcon /><span> &nbsp; 5M Subscribers</span> </SocialDiv>
                        </SpecailSingleDataDiv>
                        <SingleDataDiv style={{ marginBottom: "10px" }}>
                            <SubHeading>KEEP UP TO DATE</SubHeading>
                            <Input type="email" placeholder='Enter Email Id' />
                            <Button>SUBSCRIBE</Button>
                        </SingleDataDiv>
                    </AllDataDiv>
                </TopSection>
                <MiddleSection>
                    <SpecailSingleDataDiv>
                        <SocialDiv><GavelIcon /><span> &nbsp; 15 Days return policy </span></SocialDiv>
                        <SocialDiv><MonetizationOnIcon /><span> &nbsp; Cash on delivery</span></SocialDiv>
                    </SpecailSingleDataDiv>
                    <SingleDataDiv>
                        <SubHeading>DOWNLOAD THE APP</SubHeading>
                        <DownloadDiv><AndroidIcon /><AppleIcon style={{ marginLeft: "40px" }} /></DownloadDiv>
                    </SingleDataDiv>
                    <SingleDataDiv>
                        <SubHeading>100% SECURE PAYMENTS</SubHeading>
                        <PaymentsImg src='https://images.bewakoof.com/web/secure-payments-image.png' />
                    </SingleDataDiv>
                </MiddleSection>
                <br />
                <hr />
                <LastSection>
                    <HeadPara style={{ marginTop: "50px" }}>BEWAKOOF THE NEW AGE ONLINE SHOPPING EXPERIENCE.</HeadPara>
                    <DataPara>
                        Founded in 2012, Bewakoof is a lifestyle fashion brand that makes creative, distinctive fashion for the trendy, contemporary Indian. Bewakoof was created on the principle of creating impact through innovation, honesty and thoughtfulness.
                    </DataPara>
                    <DataPara>
                        With a team of 400 members, and 2mn products sold till date. We like to experiment freely, which allows us to balance creativity and relatability, and our innovative designs. Our range of products is always fresh and up-to-date, and we clock sales of over 1 lakh products a month. Our innovation focus extends to our operations as well. We are vertically integrated, manufacture our own products, and cut out the middleman wherever possible. This direct-to-consumer model allows us to create high-quality fashion at affordable prices. A thoughtful brand, we actively attempt to minimize our environmental footprint and maximize our social impact. These efforts are integrated right into our day-to-day operations, from rainwater harvesting to paper packaging to employee benefits. To create an accessible, affordable and thoughtful experience of online shopping in India.
                    </DataPara>
                    <HeadPara>
                        ONLINE SHOPPING AT BEWAKOOF IS HASSLE-FREE, CONVENIENT AND SUPER-EXCITING!
                    </HeadPara>
                    <DataPara>

                        Online Shopping has always been a fun and exciting task for most and more so when the shopping mall is none other than your own house. We have all had days when we have planned trips to the clothing store in advance, dreaming about what we would buy once we get there. Now we wouldnt think twice before indulging in some online shopping. Well, cut to todays time and age, you can do all this from the comfort of your home while enjoying many online shopping offers, right from amazing deals and discounts to one of the most robust user interface amongst most online shopping sites in India, with many shopping filters to make your shopping experience truly hassle free. This in our own words is what we call Bewakoof.com.
                    </DataPara>
                    <DataPara>
                        Bewakoof, THE place to be when it comes to the coolest in online fashion, offers you fine, high-quality merchandise go ahead and indulge in a bit of online shopping for men and womens fashion. So browse through the exciting categories we have on offer from mens fashion to basic mens clothing as well as wide variety in womenswear and womens clothes to the amazing range of accessories, fill up your carts and get fast home delivery for all orders. All of this topped with our exclusive online shopping offers makes for an exciting, irresistible and uber cool combo! You can even gift some to your near and dear ones while being absolutely certain that it will put a smile on their faces.
                    </DataPara>
                    <HeadPara>
                        BEWAKOOF.COM: THE QUIRKIEST ONLINE SHOPPING SITES OF ALL!
                    </HeadPara>
                    <DataPara>
                        Online fashion is definitely more accessible with Bewakoof.com. Explore the latest collections in Marvel t-shirts including avengers t-shirts and captain America t-shirts in official merchandise. Apart from these, quirkiest of T-shirts that you wont find on any online shopping sites in India are showcased at Bewakoof.com. If your wardrobe has been longing for a cool overhaul then bewakoof.com will certainly be your best bet amongst all online shopping sites. Also, take a tour of our bewakoof blog to stay abreast with the latest runway trends and be a trendsetter among your immediate circles. What we wear speaks volumes of us they say. But what if what you wore actually spoke what your mood was! Havent we all wondered where we could get those quirky t-shirts and sport them with confidence? Sure otherwise getting them made or even buying them from otherwise expensive online shopping sites for clothes may cost you substantially but with Bewakoof.com, you will understand that you do not have to spend a fortune on online fashion to look great. Sliders, joggers, sweatshirts, bag and bag packs and so much more are just some of the other items you can grab hold of here.
                    </DataPara>
                    <HeadPara>
                        AVAIL OF ONLINE SHOPPING BENEFITS AT BEWAKOOF.COM AND YOULL SHOP NOWHERE ELSE!
                    </HeadPara>
                    <DataPara>
                        Choose your product, get it ordered online, and we ensure that its delivery happens right at your doorstep anywhere in India. You just need to take care of the payment for the product from the comfort of your home, while we ensure free shipping all the time on almost everything with no strings attached. For any second thoughts after purchase, we have in place a return policy as well. One of the best you will find on any online shopping sites in India. For your online shopping experience to be safe and risk-free, we offer Cash On Delivery (COD) facility too. So you dont have to worry anymore about your hard earned money being stuck when you buy clothes online at bewakoof.com. Avail exciting online shopping offers like designs of the day and colour of the month when you shop with us. Make sure to use our easy 15-day returns policy, card or cash on delivery option and other customer-friendly features. A comprehensive sizing guide and detailed product descriptions coupled with high-resolution product shots will give you all the information to make the right buying decision. Give your wardrobe the much-needed upgrade with uber cool clothing head to Bewakoof.com for a great online shopping india experience now! Could you have asked for more?
                    </DataPara>
                    <HeadPara>
                        DONT MISS OUT ON ACCESSORIES AVAILABLE ON OUR MULTI-FACETED ONLINE STORE!
                    </HeadPara>
                    <DataPara>
                        We dont just offer you exciting options in online fashion but also give you amazing accessories with really cool bags and bag packs to choose from. Our bags and backpacks are compact, hassle-free and easy to stuff things in. And all of this with the swag that you get to carry along with it. Cool designs are what form a major part of our online fashion and we also ensure our accessories section doesnt feel left out!
                    </DataPara>
                    <DataPara>
                        We dont just offer you exciting options in online fashion but also give you amazing accessories with really cool bags and bag packs to choose from. Our bags and backpacks are compact, hassle-free and easy to stuff things in. And all of this with the swag that you get to carry along with it. Cool designs are what form a major part of our online fashion and we also ensure our accessories section doesnt feel left out!
                    </DataPara>
                    <HeadPara>
                        DESIGN OF THE DAY- THE COOLEST FEATURE EVER!
                    </HeadPara>
                    <DataPara>
                        Who said good and cool t-shirts have to expensive? We bring newer, cooler and more youth oriented designs everyday. Yes! Everyday you get a new design to explore and buy. Although all our t-shirts are at an extremely affordable price, we decided to slash them down even further. But there is a catch. It is only for those designs and these exclusive prices are only valid for for a duration of 24 hours! Designs refresh every day at 3pm and are valid only for 24 hours. So you need to hurry and grab one fast before it ends. Because we believe everyone needs to have a fair chance at all of our fresh designs of the day.
                    </DataPara>
                    <HeadPara>
                        BEWAKOOF.COM: THE UBER COOL ONLINE FASHION STORE FOR THE YOUTH
                    </HeadPara>
                    <DataPara>
                        We, at Bewakoof.com, have all that you need to glam up your cool quotient. From an extensive range of plus size clothing, casual shirts for men and accessories for everyone, we purvey diversity of choices in online shopping india platform has to offer under one umbrella. The range of apparels like men t-shirts, joggers, sliders, Henley shirts, Polo t-shirts, Oxford pants and more provide an array of options for the online customer to create a ravishing ensemble from. We try to target all kinds of customers and cater to their needs and preferences. Communication is the key to our functioning. Your Bewakoof Online fashion Shop has arrived! Do not miss the attractive online shopping offers everyday. Work your fashion with the wide range of apparels available only one click away! Make a statement with our best t-shirts online! Get more, pay less!
                    </DataPara>
                    <HeadPara>
                        OUR PHILOSOPHY

                    </HeadPara>
                    <DataPara style={{ paddingBottom: "200px" }}>
                        We believe in creating the kind of fashion, that makes you stand out as they are in line with the latest local and global trends of the industry, but also at the same time offer value for money functionality, with quality materials and comfortable and flattering prints. We try to look into the psyche of our customers, and try to get inspired by the conversations and experiences around us while creating our graphics, to ensure that they are relatable. We believe in constant and consistent innovation to ensure that our fans get nothing short of the bets at affordable rates! While most people do not know, we do not outsource the manufacturing of our products, everything from the conception of the designs to the manufacture and the styling that you see on the photographs of the banners and product pages of our website all happen in house! We go from yarn to product and since we 're vertically integrated and bring fashion from us directly to your doorstep without any middlemen that also further ensures reliability because for us it is not just about the money but about building the trust and credibility in our fans about our brand. We also make sure to decrease the impact on environment and are building initiatives that will help us with the same, for now by optimizing our processes to use only as much as we need from nature, rain water harvesting and recycling the water from our RO water facility, because we believe that the spirit of Bewakoof is about creating an impact by breaking conventions and having a different perspective!
                    </DataPara>
                </LastSection>
                <br />
                <hr />
                <p style={{ color: "#ffffff", fontFamily: "Poppins", marginTop: "20px", textAlign: "center", paddingBottom: "200px" }}>© 2023, Fraudy.com</p>

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

const DownloadDiv = styled.p`
    color: #ffffff;
    margin-bottom: 0;
    letter-spacing: 0.5px;
    font-size: 13px;
    display: flex;
    align-items: center;
    
    @media all and (min-width: 310px) and (max-width: 600px){
        width: 400px;  
        display: inline;
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







const MiddleSection = styled.div`
    width: 85%;
    margin: auto;
    padding-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20;
    /* border-bottom: 2px solid #fff; */
    @media all and (min-width: 310px) and (max-width: 600px){
        grid-template-columns: repeat(1, 1fr);
    }
    @media all and (min-width: 601px) and (max-width: 900px){
        grid-template-columns: repeat(2, 1fr);
    }
`

const PaymentsImg = styled.img`
    display: flex;
    /* align-items: left; */
    @media all and (min-width: 310px) and (max-width: 600px){
        display: inline;
    }
`


const LastSection = styled.div`
    
`

const HeadPara = styled.p`
   color: #fff;
   text-align: left;
   width: 85%;
   margin: auto;
   letter-spacing: 1px;
   font-size: 18px;
   font-family: "Poppins";
   margin-bottom: 10px;
   @media all and (min-width: 310px) and (max-width: 600px){
        display: none;
    }
`

const DataPara = styled.p`
    color: #fff;
   text-align: left;
   width: 85%;
   margin: auto;
   letter-spacing: 1px;
   margin-top: 15px;
   margin-bottom: 15px;
   @media all and (min-width: 310px) and (max-width: 600px){
        display: none;
    }
`