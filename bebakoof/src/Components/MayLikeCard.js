import {Text} from "@chakra-ui/react"
import { useEffect } from "react"
import { CiCircleRemove } from "react-icons/ci"
import { Wrapper,Button,P1,P2,P3,Img,Parent,Grand } from "./MaylikeCardElement"
export const MayLikeCard =  (data) => {
    //console.log(data.data)

    const handleClick = (id) => {
        let product = JSON.parse(localStorage.getItem("wishlist"))
        let FilterData = product.filter(el=>{
            return el.id != id
        })
        localStorage.setItem("wishlist",JSON.stringify(FilterData))
        console.log("delete")
    }
    const handleMove = (el) => {
            console.log(el,"xxx")
    }

    useEffect(()=>{

    },[data])
    return (
        
        <Grand>
            <Text as="b">WISHLIST</Text>
            <Parent>
            {
                data.data.length>0 && data.data.map((el)=>{
                    console.log(el,'ell')
                    return (
                        <Wrapper key={el.id}> 
                        <Img src={el.image} />
                        <P1>{el.name}</P1>
                        <P2 >₹{el.price}</P2>
                        <P3 as="s" bg="hsla(0,0%,92.9%,.6)">₹{el.oldprice}</P3>
                        <div style={{display:"flex",width:"100%"}}>
                            <Button onClick={()=>handleMove(el)}>MOVE TO BAG</Button>
                            <Button onClick={()=>handleClick(el.id)}>REMOVE</Button>
                        </div>
                        
                     </Wrapper>
                    )
                })
            }
            </Parent>
               
        </Grand>
    )
}


