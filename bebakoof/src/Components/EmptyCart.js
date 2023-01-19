// https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png
import styled from "styled-components"
import { useNavigate } from "react-router-dom"


export const EmptyCart = () => {
    const navigate = useNavigate();
    return (
        <div>
                <Img src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png" alt="empty" />
                <p style={{fontSize:"20px"}}>Nothing in the bag</p>
                <Button onClick={()=>navigate("/")}> Continue Shopping</Button>
        </div>
    )
}

const Button = styled.button`
width:200px;
height:50px;
background:transparent;
 color:teal;
 font-size:20px;
 border:2px solid teal;
 border-radius:5px;
`
const Img = styled.img`
width:200px;
height:200px;
margin-bottom:20px;
`