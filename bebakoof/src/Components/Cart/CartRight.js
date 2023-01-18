import {Text,Box,Center,Button,Heading, Link} from "@chakra-ui/react"
import { ArrowRightIcon } from '@chakra-ui/icons'
//import { Button } from './CartElements'

export const CartRight = () => {
   
    return (
        <Box>
        
            <Center>
                <Box>
                    <Button backgroundColor="#fdd835" w="500px" h="30px" fontSize="14px" border="1px solid grey" borderRadius="5px" mt="10px" > Save Extra  ₹40  with Tribe  <ArrowRightIcon ml={"100px"}  /> </Button>
                   
                    <Box w="500px"  border="1px solid grey" borderRadius="5px" mt="10px">
                        <Text textAlign={"left"}>Whistles! Get extra 10% Cashback upto 100 on prepaid orders above Rs.699. Coupon code - MAD10.</Text>
                    </Box>
                    
                    <Box w="500px"  border="1px solid grey" borderRadius="5px" mt="10px">
                        <Text textAlign={"left"}>Whistles! Get extra 20% Cashback on prepaid orders above Rs.499. Coupon code - NEW20. Applicable for new customers only!</Text>
                    </Box>
                   
                    <Button  border="1px solid grey" borderRadius="5px" mt="10px" fontSize="14px" w="500px" h="30px" bg="rgba(66,162,161,.1)" >
                        Have a Coupon / Referral / Gift Card ?   <span style={{marginLeft:"80px",color:"teal"}} >Redeem <ArrowRightIcon  /></span> 
                    </Button>
                   
                    <Box w="500px" mt="10px" border="1px solid grey">
                        <Heading  fontSize="15px" ml="-220px">PRICE SUMMARY</Heading>
                        <Box p="0px 5px 0px 5px">
                            <Box display="flex" justifyContent="space-between">
                                <Text>Total MRP (Incl. of taxes) </Text>
                                <Text>₹ 1049</Text>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Text>Shipping Charges  </Text>
                                <Text>₹ 1049</Text>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Text>Bag Discount  </Text>
                                <Text>₹ 1049</Text>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Text>Subtotal  </Text>
                                <Text>₹ 1049</Text>
                            </Box>
                            
                        </Box>
                        <Box p="20px" border="1px solid grey" textAlign="center" borderRadius="3px" display="flex" gap="120px" >
                                <Box fontSize="13px" display="block">
                                    <Box> <Text as ="b">TOTAL</Text></Box>
                                   
                                   <Box><Text as="b">₹499</Text></Box> 
                                    
                                </Box>
                               
                                    <Button w="220px" h="60px" border="none" bg="rgb(66, 162, 162)" borderRadius="5px">
                                    <Link href="" textDecoration={"none"}  color="white"> ADD ADDRESS </Link>
                                    </Button>
                                    
                               
                               
                        </Box>
                    </Box>
                </Box>  
                
            </Center>
            

            
        </Box> 
    )
}

