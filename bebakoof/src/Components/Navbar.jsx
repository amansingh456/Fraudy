import { Box, Flex, Heading , Image , Text , Spacer ,Input, VStack ,} from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-router-dom"
import "../Styles/Navbar.css"
import { CiHeart} from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import fraudy from "../images/fraudyReal.png"
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../images/logo.png" 

const Navbar = () => {
  return (

    <Box width="100%" border="1px solid black" >
        <Box bg="gray.200"> 
        <Flex   display={["none","none","none","flex"]} position="relative" width="80%" p={2}  height="20px" margin="auto" alignItems="center" >
      
         <a href="https://www.bewakoof.com/campaign/delights-coupons-discounts-offers-sale" ><Text px={4} fontSize={12} >Offers</Text></a>
         <a href="https://www.bewakoof.com/fanbook-testimonial-reviews" ><Text fontSize={12} px={4}>Fanbook</Text></a>
         <a href="https://www.bewakoof.com/campaign/apps" ><Text fontSize={12} px={4}>Download App</Text></a>
         <a href="https://www.bewakoof.com/tribe" ><Text fontSize={12} px={4}>Tribe Membership</Text></a>
         <Spacer/>
         <a href="https://www.bewakoof.com/tribe" ><Text fontSize={12} px={4}>Contact Us</Text></a>
         <a href="https://www.bewakoof.com/tribe" ><Text fontSize={12} px={4}>Track Order</Text></a>
        </Flex> </Box>
        <Box bg="gray.50" >
        <Flex width={[ "90%","90%", "80%","80%"]} px={2}   border="1px solid black" margin="auto" alignItems="center" > <Flex  display={["flex","flex","flex","none"]}>  <GiHamburgerMenu size={30}  /></Flex>  <Box display={["none","none","none","block"]} width="150px"  height="60px" mr={10} >   <Link>  <Image width="150px" height="54px" src={fraudy} alt="shopname" /> </Link></Box> <Box px={2} display={["block","block","block","none"]}> <Link><Image  width="70%"  src={logo} />   </Link>  </Box> <Flex display={["none","none","none","flex"]}> <VStack   className='dropdown1'  ><Link> <Text  py={4} fontWeight="semibold" fontSize={"md"}  px={2} >MEN</Text>  </Link>
       
<Box className='dropdown' position="absolute" width="80%" height="500px" overflow="scroll" backgroundColor="white" border="1px solid black" left={155} zIndex={5}  top={65} >
    <Flex width="90%" justifyContent="space-between" >
   <Box width="50%"  >
    <Flex p={2} px={5} justifyContent="space-between" border="1px solid black" >
    <VStack >
       <a href="" >  <Heading size="md" >
            Topwear
        </Heading> </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>

    </VStack >
    <VStack >
       <a href="" >  <Heading  size="md" >
            Topwear
        </Heading> </a>
        <a  > <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        
    </VStack >
    <VStack >
       <a href="" >  <Heading  size="md"  >
            Topwear
        </Heading> </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        
    </VStack >
    </Flex>
    </Box> <Box border="1px solid black" left="50%"   height="500px" position="absolute" borderLeft="1px solid black" ></Box> 
    <VStack  border="1px solid black" >
    <a href="" >  <Heading>
            Specials
        </Heading> </a>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
    </VStack >
    </Flex>
</Box>

     </VStack>

     <VStack className='dropdown2'  > 
           <Link> <Text  py={4} fontWeight="semibold" fontSize={"md"}   px={2}>WOMEN</Text> </Link>
           
           <Box className='dropdown3' position="absolute" width="80%" height="500px" overflow="scroll" backgroundColor="white" border="1px solid black" left={155} zIndex={5}  top={65} >
    <Flex width="90%" justifyContent="space-between" >
   <Box width="50%"  >
    <Flex p={2} px={5} justifyContent="space-between" border="1px solid black" >
    <VStack >
       <a href="" >  <Heading size="md" >
            Topwear
        </Heading> </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>

    </VStack >
    <VStack >
       <a href="" >  <Heading  size="md" >
            Topwear
        </Heading> </a>
        <a  > <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        
    </VStack >
    <VStack >
       <a href="" >  <Heading  size="md"  >
            Topwear
        </Heading> </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        
    </VStack >
    </Flex>
    </Box> <Box border="1px solid black" left="50%"   height="500px" position="absolute" borderLeft="1px solid black" ></Box> 
    <VStack  border="1px solid black" >
    <a href="" >  <Heading>
            Specials
        </Heading> </a>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
    </VStack >
    </Flex>
</Box>
           
            </VStack>
            
            
           <VStack className='dropdown4' >  <Link> <Text py={4} fontWeight="semibold" fontSize={"md"}   px={2}>MOBILE COVERS</Text> </Link>
           <Box className='dropdown5' position="absolute" width="80%" height="500px" overflow="scroll" backgroundColor="white" border="1px solid black" left={155} zIndex={5}  top={65} >
    <Flex width="90%" justifyContent="space-between" >
   <Box width="50%"  >
    <Flex p={2} px={5} justifyContent="space-between" border="1px solid black" >
    <VStack >
       <a href="" >  <Heading size="md" >
            Topwear
        </Heading> </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>

    </VStack >
    <VStack >
       <a href="" >  <Heading  size="md" >
            Topwear
        </Heading> </a>
        <a  > <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        
    </VStack >
    <VStack >
       <a href="" >  <Heading  size="md"  >
            Topwear
        </Heading> </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        
    </VStack >
    </Flex>
    </Box> <Box border="1px solid black" left="50%"   height="500px" position="absolute" borderLeft="1px solid black" ></Box> 
    <VStack  border="1px solid black" >
    <a href="" >  <Heading>
            Specials
        </Heading> </a>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2} border="1px solid black" alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
    </VStack >
    </Flex>
</Box>
            </VStack> </Flex>  <Spacer/> <Input  display={["none","none","none","block"]} placeholder='search by product , category or collection' width={300} /> <Link  > <Text  display={["none","none","none","block"]} px={2} >LOGIN</Text> </Link>  <Box px={2}  > <CiHeart  size={30}  /></Box>  <Box px={2} > <BsBag size={30}  /></Box>  <Image px={2} height={10} borderRadius="50%" size={30} src="https://as1.ftcdn.net/v2/jpg/01/85/97/08/1000_F_185970884_vu3JsjQgKW0IE00WpRsNiMtfptfcPtDA.jpg" /> </Flex>

             </Box>
    
    <Box bg="gray.50" > 

        <Flex display={["none","none","none","flex"]} width="60%" p={2}  height="50px"  margin="auto" alignItems="center" justifyContent="space-between" >
        <a href="https://www.bewakoof.com/campaign/delights-coupons-discounts-offers-sale" ><Text fontWeight="semibold" px={4} >LIVE NOW!</Text></a>
        <a href="https://www.bewakoof.com/campaign/delights-coupons-discounts-offers-sale" ><Text fontWeight="semibold" px={4} >MEN</Text></a>
        <a href="https://www.bewakoof.com/campaign/delights-coupons-discounts-offers-sale" ><Text fontWeight="semibold" px={4} >WOMEN</Text></a>
        <a href="https://www.bewakoof.com/campaign/delights-coupons-discounts-offers-sale" ><Text fontWeight="semibold" px={4} >ACCESSORIES</Text></a>
        <a href="https://www.bewakoof.com/campaign/delights-coupons-discounts-offers-sale" ><Text fontWeight="semibold" px={4} >WINTERWEAR</Text></a>
        </Flex>
        </Box>
        
    </Box>
  )
}

export default Navbar
