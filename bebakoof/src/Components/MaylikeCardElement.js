import styled from "styled-components"

export const Wrapper =styled.div`
margin-top:20px;
text-align:left;
padding:5px;
width:150px;

@media screen and (max-width:777px){
    dispaly:grid;
    grid-template-columns: repeat(2,1fr);
    justify-content:space-between;
    margin:auto;
    padding:10px;
}
`

export const Img= styled.img`
width:150px;
height:250px;
`

export const P1 = styled.p`
font-size:15px;
font-weight:bold;

`
export const P2 = styled.p`
font-size:15px;
font-weight:bold;
text-decoration: line-through
`
export const Button = styled.button`
width:100%;
height:30px;
color:teal;
border:1px solid teal;
`



