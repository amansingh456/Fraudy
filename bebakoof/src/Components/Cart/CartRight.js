import {Text,Box,Center,Button,Heading, Link} from "@chakra-ui/react"
import { ArrowRightIcon } from '@chakra-ui/icons'
import { useSelector } from "react-redux";


export const CartRight = () => {
   const cart = useSelector((store)=>store.cart)
      let MRP=0;
      let totalPrice=0;
     cart.map((el)=>{
        MRP+=el.oldprice;
        totalPrice+=el.price
      })
      let Charges = MRP-totalPrice
     //console.log(MRP)
    return (
        <Box  classNmae="CartRight">
        
            <Center>
                <Box>
                    <Button backgroundColor="#fdd835" w="500px" h="50px" fontSize="15px"  border="none" borderRadius="5px" mt="10px" > Save Extra  ₹40  with Tribe  <ArrowRightIcon ml={"250px"}  /> </Button>
                   
                    <Box w="500px"  border="1px solid rgb(234, 234, 234)" borderRadius="5px" mt="10px">
                        <Text textAlign={"left"} ml="5px">Whistles! Get extra 10% Cashback upto 100 on prepaid orders above Rs.699. Coupon code - MAD10.</Text>
                    </Box>
                    
                    <Box w="500px"  border="1px solid rgb(234, 234, 234)" borderRadius="5px" mt="10px">
                        <Text textAlign={"left"} ml="5px">Whistles! Get extra 20% Cashback on prepaid orders above Rs.499. Coupon code - NEW20. Applicable for new customers only!</Text>
                    </Box>
                   
                    <Button  border="1px solid rgb(234, 234, 234)" borderRadius="5px" mt="10px" fontSize="14px" w="500px" h="30px" bg="rgba(66,162,161,.1)" >
                        Have a Coupon / Referral / Gift Card ?   <span style={{marginLeft:"80px",color:"teal"}} >Redeem <ArrowRightIcon  /></span> 
                    </Button>
                   
                    <Box w="500px" mt="10px" border="1px solid rgb(234, 234, 234)">
                        <Heading  fontSize="15px" ml="-220px">PRICE SUMMARY</Heading>
                        <Box p="0px 8px 0px 8px">
                            <Box display="flex" justifyContent="space-between">
                                <Text>Total MRP (Incl. of taxes) </Text>
                                <Text>₹ {MRP}</Text>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Text>Shipping Charges  </Text>
                                <Text color={"#1d8802"}>FREE</Text>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Text>Bag Discount  </Text>
                                <Text>₹{Charges}</Text>
                            </Box>
                            <Box display="flex" justifyContent="space-between">
                                <Text>Subtotal  </Text>
                                <Text>₹ {totalPrice}</Text>
                            </Box>
                            <Box>
                                <Button mb="10px" w="400px" h="30px" fontSize={"12px"} textAlign="left" color={"rgb(29, 136, 2)"} borderRadius={"14px"}>You are saving ₹ {Charges} on this order</Button>
                            </Box>
                            
                        </Box>
                        <Box p="20px" border="0.5px solid rgb(234, 234, 234)" textAlign="center" borderRadius="3px" display="flex" gap="120px" >
                                <Box fontSize="15px" display="block">
                                    <Box> <Text as ="b">TOTAL</Text></Box>
                                   
                                   <Box fontSize={"15px"}><Text as="b" >₹{totalPrice}</Text></Box> 
                                    
                                </Box>
                               
                                <Button w="340px" fontSize={"18px"} h="60px" border="none" bg="rgb(66, 162, 162)" borderRadius="5px">
                                    <Link href="" textDecoration={"none"}  color="white"> ADD AMOUNT </Link>
                                </Button>
                              
                        </Box>
                    </Box>
                </Box>  
                
            </Center>
            

            
        </Box> 
    )
}

