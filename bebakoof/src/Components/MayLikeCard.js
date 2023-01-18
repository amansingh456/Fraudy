import {Box, Button, Select, Heading,Text, Image } from "@chakra-ui/react"

export const MayLikeCard=  () => {
    return (
        <Box>
             <Box mt="20px" textAlign={"left"} p="5px" w="150px"> 
                    <Image w="150px" h="250px" src="https://images.bewakoof.com/t320/men-s-black-riot-xxxtentican-oversized-t-shirt-568930-1673612996-1.jpg" />
                    <Text>Men's Black</Text>
                    <Text bg="hsla(0,0%,92.9%,.6)">₹550</Text>
                    <Button w="100%" h="30px" color={"teal"}  border="1px solid teal">MOVE TO BAG</Button>
                 </Box>
        </Box>
    )
}