
import styled from "styled-components"
export const WishlistPage = () => {
    return (
        <div>
            <h1>Navbar</h1>
            <Wrapper>
                  <div >
                    
                    <Img  src="https://images.bewakoof.com/t320/men-s-black-riot-xxxtentican-oversized-t-shirt-568930-1673612996-1.jpg" />
                    
                </div>          
                <p>Men's Black</p>
                <div>
                    <p >₹550</p>
                    <p>₹779</p>
                    <OFF >70% OFF</OFF>
                </div>
                <ButtonWrapper >
                    <Button >MOVE TO BAG</Button>
                    <Button >REMOVE</Button>
                </ButtonWrapper>
                            
            </Wrapper>
        </div>
       
    )
}

const Wrapper = styled.div`
margin-top:20px;
text-align:left;
padding:5px;
width:250px;
`
const Img = styled.img`
width:250px;
height:250px;

`
const OFF = styled.p`
color:#4CAF50;
`
const ButtonWrapper= styled.div`
width:100%;
height:30px;
 display:flex;

`
const Button = styled.button`
text-align:center;
width:100%;
font-size:12px;
`

