
import styled from "styled-components"
export const WishlistPage = () => {
    return (
        <Wrapper>
                
                <img  src="https://images.bewakoof.com/t320/men-s-black-riot-xxxtentican-oversized-t-shirt-568930-1673612996-1.jpg" />
                <p>Men's Black</p>
                <div>
                    <p >₹550</p>
                    <p>₹779</p>
                    <OFF >70% OFF</OFF>
                </div>
                
                <button w="100%" h="30px" color={"teal"}  border="1px solid teal">MOVE TO BAG</button>
                 
        </Wrapper>
    )
}

const Wrapper = styled.div`
margin-top:20px;
text-align:left;
padding:5px;
width:150px
`
const Img = styled.img`
width:150px;
height:250px;

`
const OFF = styled.p`
color:#4CAF50;
`