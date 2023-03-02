
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export const EmptyWishlist = () => {
    const navigate = useNavigate()
    return (
        <div>
                <Img src="https://images.bewakoof.com/web/group-3x-1509961969.png" alt="empty" />
                <p style={{fontSize:"20px"}}>Your Wishlist is Empty !</p>
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
// https://images.bewakoof.com/web/group-3x-1509961969.png