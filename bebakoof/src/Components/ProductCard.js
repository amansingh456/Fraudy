import {Box, Button, Select, Heading,Text, Image } from "@chakra-ui/react"
import { MayLikeCard } from "./MayLikeCard"

//import { Button } from "./Cart/CartElements"
export const ProductCard = (data)=>{
  
   console.log(data.data)
    return (
        <Box border="1px solid grey" w="100%" h="auto" p="10px">
            <Heading textAlign={"left"}>My Bag {data.data.length} item</Heading>

            {
                 data?.data.map((el)=>{
                    console.log(el.price)
                    return (
                        <Box mb="10px" key={el.id}>
                            <Box border="2px solid rgb(234, 234, 234)" display="flex" p="5px" justifyContent="space-between">
                                <Box  textAlign={"left"}>
                                    <Text >{el.name}</Text>
                                    <Text as="b">₹{el.price}</Text>
                                    <Text color={"#1d8802"}>{el.oldprice}</Text>
                                    <Box display="flex" gap="10px">
                                        <Select placeholder="Size:S"   w="100px"  p="5px">
                                            <option value='S'>S</option>
                                            <option value='M'>M</option>
                                            <option value='L'>L</option>
                                            <option value='XL'>XL</option>
                                            <option value='2XL'>2XL</option>
                                            <option value='3XL'>3XL</option>
                                        </Select>
                                        <Select placeholder='Qty:1' p="5px">
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                            <option value='6'>6</option>
                                            <option value='7'>7</option>
                                            <option value='8'>8</option>
                                            <option value='9'>9</option>
                                            <option value='10'>10</option>
                                        </Select>
                                    </Box>
                                </Box>
                                <Box>
                                    < Image boxSize="120px" src={el.image} />
                                </Box>
                            </Box>
        
                            <Box display="flex"  >
                                <Button fontSize="20px" w="100%" h="30px" border="1px solid grey">Remove</Button>
                                <Button fontSize="20px" w="100%" h="30px" border="1px solid grey">Move to Wish List</Button>
                            </Box>
                        </Box>
                    )
                })
            }
            
            <Box textAlign={"left"} mt="50px" >
                 <Text as="b" >My WIshlist</Text>
                 <Box mt="20px" textAlign={"left"} p="5px" w="150px" className="wishlist"> 
                    <Image w="150px" h="250px" src="https://images.bewakoof.com/t320/men-s-black-riot-xxxtentican-oversized-t-shirt-568930-1673612996-1.jpg" />
                    <Text>Men's Black</Text>
                    <Text bg="hsla(0,0%,92.9%,.6)">₹550</Text>
                    <Button w="100%" h="30px" color={"teal"}  border="1px solid teal">MOVE TO BAG</Button>
                 </Box>
            </Box>

            <Box mt="50px" textAlign={"left"} >
            <Text as="b" >You May also Like</Text>
            <Box display={"grid"} className="maylike">
                <MayLikeCard />
                <MayLikeCard />
                <MayLikeCard />
            </Box>
               
            </Box>
            
          

        </Box>
    )
}