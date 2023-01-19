import {Box, Text} from "@chakra-ui/react"

import { Wrapper,Button,P1,P2,Img } from "./MaylikeCardElement"
export const MayLikeCard =  (data) => {
    console.log(data)
    return (
        <Box>
            <Text as="bold">WISHLIST</Text>
            {
                data.length>0 && data.map((el)=>{
                    return (
                        <Wrapper key={el.id}> 
                        <Img src={el.image} />
                        <P1>{el.name}</P1>
                        <P2 as="s" bg="hsla(0,0%,92.9%,.6)">{el.oldprice}</P2>
                        <Button>MOVE TO BAG</Button>
                     </Wrapper>
                    )
                })
            }
               
        </Box>
    )
}


