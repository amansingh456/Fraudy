// import { Button } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import styled from 'styled-components'

const Payment = () => {

    let tp = localStorage.getItem("tp")

    const [check, setCheck] = useState(false)


    const navigate = useNavigate();
    const handleSuccess = () => {
    
        navigate("/success");
    };

  return (
    <>
        <MainContainer>
            <PaymentOption>
                <Heading>Choose Your Payment Method</Heading>
                <VoucherBox>
                    <div>
                        <input type="checkbox" style={{marginLeft:"20px"}} />
                        <span style={{marginLeft:"20px"}}>Vouchers</span>
                    </div>
                    <p style={{marginRight:"20px", color:"red"}}>Link</p>
                </VoucherBox>
                <PaytmBox>
                    <div>
                        <img src="https://www.netmeds.com/assets/pgicon/Paytm_lo.png" alt="paytm" width={50} style={{marginLeft:"20px"}}/>
                    </div>
                    <p style={{marginRight:"20px", color:"red"}}>Link</p>
                </PaytmBox>
                <PaytmBox>
                    <div>
                        <img src="https://www.netmeds.com/assets/pgicon/Phone_Pay_lo.png" alt="paytm" width={30} style={{marginLeft:"20px"}}/>
                    </div>
                    <div>
                        <input type="checkbox" style={{marginRight:"20px"}} onChange={()=>setCheck(!check)}/>
                        {!check ? (<div></div>):(<Button onClick={handleSuccess}>Pay Rs.{tp}</Button>)}
                    </div>
                </PaytmBox>
                <PaytmBox>
                    <div style={{display:"flex", alignItems:"center"}}>
                        <img src="https://www.netmeds.com/assets/pgicon/googlepaylogo.png" alt="paytm" width={30} style={{marginLeft:"20px"}}/>
                        <span style={{marginLeft:"20px"}}>UPI</span>
                    </div>
                    <p style={{marginRight:"20px", color:"red"}}>Link</p>
                </PaytmBox>
                <COD>
                    <img src="https://www.netmeds.com/assets/pgicon/COD.png" alt="cod" />
                    <div>
                        <p style={{fontSize:"14px", margin:"0"}}>Cash On Delivery</p>
                        <PP style={{fontSize:"12px", margin:"0", marginRight:"20px"}}>Hear us out! Pay online and earn 100% NMS SuperCash (up to Rs. 3000) on all prepaid orders</PP>
                    </div>
                </COD>
            </PaymentOption>
            <ImgDiv>
                <img src="https://images.bewakoof.com/uploads/grid/app/1x1-flat-65-off-common-1674288704.jpg" alt="dummy" width="100%" />
            </ImgDiv>
        </MainContainer>
    </>
  )
}

export default Payment

const MainContainer = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    /* border: 1px solid black; */
    margin-top: 20px;
`
const PaymentOption = styled.div`
    width: 60%;
    @media all and (min-width: 310px) and (max-width: 700px){
        width: 85%;
        margin: auto;
    }
`

const VoucherBox = styled.div`
    background-color: #f3f7fb;
    width: 80%;
    /* margin: auto; */
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 10px;
`

const PaytmBox = styled.div`
    background-color: #f3f7fb;
    width: 80%;
    /* margin: auto; */
    margin-top: 30px;
    height: 40px;
    display: flex;
    
    justify-content: space-between;
    align-items: center;
    border-radius: 10px; 
` 

const COD = styled.div`
    background-color: #f3f7fb;
    width: 80%;
    /* margin: auto; */
    margin-top: 30px;
    height: 70px;
    display: flex;
    align-items: center;
    border-radius: 10px;  
`

const Button = styled.button`
    outline: none;
    padding: 5px;
    border: none;
    background-color: #24AEB1;
    margin-right: 20px;
    border-radius: 5px;
`
const PP = styled.p`
    @media all and (min-width: 310px) and (max-width: 700px){
        display: none;
    }
`

const ImgDiv = styled.div`
    width: 40%;
    @media all and (min-width: 310px) and (max-width: 700px){
        display: none;
    }
`

const Heading = styled.p`
    font-size: 20px;
    text-align: left;
    font-family: "Poppins";
    margin-top: 0;
    margin-bottom: 15px;
    padding-top: 0;
`