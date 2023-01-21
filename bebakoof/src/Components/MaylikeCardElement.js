import styled from "styled-components"

export const Wrapper =styled.div`
margin-top:20px;
text-align:left;
padding:5px;
width:250px;



`
export const Grand = styled.div`
// border:1px solid green;
margin:auto;
width:80%;
text-align:left;
padding:50px;
`
export const Parent = styled.div`
margin:auto;

text-align:left;

height:auto;
display:grid;
grid-template-columns: repeat(4,1fr);
justify-content:space-between;

@media screen and (max-width:777px){
    dispaly:grid;
    grid-template-columns: repeat(2,1fr);
    justify-content:space-between;
    margin:auto;
    padding:10px;
}
`

export const Img= styled.img`
width:100%;
height:250px;
`

export const P1 = styled.p`
font-size:10px!important;;


`
export const P2 = styled.p`
    font-family: montserrat-semibold,sans-serif!important;
    font-size: 16px!important;
    line-height: 14px!important;
`
export const P3 = styled.p`
font-family: montserrat-regular,sans-serif!important;
font-size: 12px!important;
line-height: 12px!important;

`

export const Button = styled.button`
width:100%;
height:30px;
border:1px solid #ccc;
background-color: #fff;
margin-bottom:4px;
cursor: pointer;
`
// export const Icon =styled.CiCircleRemove`
//  top:0px;
// `


