import { Box, Flex, Heading , Image , Text , Spacer ,Input, VStack , Menu,
    MenuButton,
    MenuList,
    MenuItem,
Button} from '@chakra-ui/react'
import React from 'react'
import { Link } from "react-router-dom"
import "../Styles/Navbar.css"
import { CiHeart} from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import fraudy from "../Images/fraudyReal.png"
import { GiHamburgerMenu } from "react-icons/gi";
import logo from "../Images/logo.png" 
import { useDispatch, useSelector } from 'react-redux';
import { VscAccount } from "react-icons/vsc";
import { LogoutFunctionSuccess } from '../AuthReducer/action';


const Navbar = () => {

 const dispatch = useDispatch()


    const auth = useSelector((store)=>store.AuthReducer.isAuth)

   const names =  useSelector((store)=>
   store.AuthReducer.name
  )

  console.log(names)

  const logout=()=>{
   
    dispatch(LogoutFunctionSuccess())


  }


  return (

    <Box width="100%"  >
        <Box bg="gray.200"> 
        <Flex  display= {["none","none","none","flex"]} position="relative" width="80%" p={2}  height="20px" margin="auto" alignItems="center" >
      
         <a href="https://www.bewakoof.com/campaign/delights-coupons-discounts-offers-sale" ><Text px={4} fontSize={12} >Offers</Text></a>
         <a href="https://www.bewakoof.com/fanbook-testimonial-reviews" ><Text fontSize={12} px={4}>Fanbook</Text></a>
         <a href="https://www.bewakoof.com/campaign/apps" ><Text fontSize={12} px={4}>Download App</Text></a>
         <a href="https://www.bewakoof.com/tribe" ><Text fontSize={12} px={4}>Tribe Membership</Text></a>
         <Spacer/>
         <a href="https://www.bewakoof.com/tribe" ><Text fontSize={12} px={4}>Contact Us</Text></a>
         <a href="https://www.bewakoof.com/tribe" ><Text fontSize={12} px={4}>Track Order</Text></a>
        </Flex> </Box>
        <Box bg="gray.50" >
        <Flex width={[ "90%","90%", "80%","80%"]} px={2}   margin="auto" alignItems="center" > <Flex  display={["flex","flex","flex","none"]}>
            
        <Menu position="absolute"  top={0}   >
  <MenuButton as={Button} rightIcon={<GiHamburgerMenu size={20} />}>
 
  </MenuButton>
  <MenuList width={["200px" , "270px","270px","270px"]}   >
    <MenuItem _hover={{ bg: 'gray.400',color:"white" ,transform:"scale(1.2)" }} >  <Flex > 
          {auth?<Heading fontSize={"md"} >Hello {names}</Heading>: <VStack>  <Link to="/Signup" > <Heading fontSize={"md"}  >Welcome Guest</Heading></Link> <Link to="/Signup" ><Text >Login/Signup</Text></Link> </VStack>  }  </Flex></MenuItem>
    <MenuItem _hover={{ bg: 'gray.400',color:"white" ,transform:"scale(1.2)" }} > <Link><Text>Men</Text></Link></MenuItem>
    <MenuItem _hover={{ bg: 'gray.400',color:"white" ,transform:"scale(1.2)" }} ><Link><Text>Women</Text></Link></MenuItem>
    <MenuItem _hover={{ bg: 'gray.400',color:"white" ,transform:"scale(1.2)" }} >   <Link><Text>Accessories</Text></Link></MenuItem>
    <MenuItem _hover={{ bg: 'gray.400',color:"white" ,transform:"scale(1.2)" }}> <Link> <Flex p={2}   alignItems="center"  ><Text mr={5} >Mad in India Sale</Text> <Image width="20%" src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> </Flex> </Link></MenuItem>
    <MenuItem _hover={{ bg: 'gray.400',color:"white" ,transform:"scale(1.2)" }}> <Link> <Flex p={2}   alignItems="center"  ><Text mr={5} >WinterWear Store</Text> <Image width="20%" src="https://images.bewakoof.com/nav_menu/Circle-icon-dotw-1669102812.png" /> </Flex> </Link></MenuItem>
    <MenuItem  _hover={{ bg: 'gray.400',color:"white" ,transform:"scale(1.2)" }}> <Link> <Flex p={2}   alignItems="center"  ><Text mr={5} >Designs of the week</Text> <Image width="20%" src="https://images.bewakoof.com/nav_menu/Circle-Icon-1664893858.png" /> </Flex> </Link></MenuItem>
    <MenuItem _hover={{ bg: 'gray.400',color:"white" ,transform:"scale(1.2)" }}> <Link> <Flex p={2}   alignItems="center"  ><Text mr={5} >Specials</Text> <Image width="20%" src="https://images.bewakoof.com/nav_menu/Circle-icon-dotw-1669102812.png" /> </Flex> </Link></MenuItem>
    <MenuItem _hover={{ bg: 'gray.400',color:"white" ,transform:"scale(1.2)" }}>  {auth?<Link><Text onClick={logout} >Logout</Text></Link>:""}</MenuItem>
  </MenuList>
  
</Menu>  
              
              
              
              </Flex>  <Box display={["none","none","none","block"]} width="150px"  height="60px" mr={10} >   <Link to="/" >  <Image width="150px" height="54px" src={fraudy} alt="shopname" /> </Link  ></Box> <Box px={2} display={["block","block","block","none"]}> <Link to="/"><Image  width="70%"  src={logo} />   </Link>  </Box> <Flex display={["none","none","none","flex"]}> <VStack   className='dropdown1'  ><Link> <Text className='main'  py={4} fontWeight="semibold" fontSize={"md"}   px={2} >MEN</Text>  </Link>
       
<Box className='dropdown'   position="absolute" width="80%" height="500px" overflow="scroll"   backgroundColor="white"  left={155} zIndex={5}  top={65} >
    <Flex width="90%" justifyContent="space-between" >
   <Box width="50%"  >
    <Flex p={2} px={5} justifyContent="space-between"  >
   <VStack className='stack1'    width="max-content" >
       <a href="" >  <Heading size="md" >
            Topwear
        </Heading> </a>
        <a  > <Text  left={0}  >Printed T-shirts</Text>  </a>
        <a> <Text  >Oversized T-shirts</Text>  </a>
        <a> <Text >Plain T-shirts</Text>  </a>
        <a> <Text >Fashion T-shirts</Text>  </a>
        <a> <Text>ActiveWear T-shirts</Text>  </a>
        <a> <Text>Full-Sleeve T-shirts</Text>  </a>
        <a> <Text>Half-Sleeve  T-shirts</Text>  </a>
        <a> <Text>shirts</Text>  </a>
        <a> <Text>Vests</Text>  </a>
        <a> <Text>Co-ord Sets</Text>  </a>
        <a> <Text>Kurtas</Text>  </a>
        <a> <Text>Henleys</Text>  </a>
        <a> <Text>Plus Size Topwear</Text>  </a>
        <a> <Text>Polo T-shirts</Text>  </a>
        <a> <Text>Jackets</Text>  </a>
        <a> <Text>Sweatshirts & Hoodies</Text>  </a>
        <a> <Text>Sweaters</Text>  </a>
        <a> <Text>Customize T-shirts</Text>  </a>
        <a> <Text>T-shirt Combos</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>

    </VStack >
   

    <VStack className='stack1'   >

       <a href="" >  <Heading  size="md" >
            Bottomwear
        </Heading> </a>
        <a  > <Text>Joggers</Text>  </a>
        <a> <Text>Pyjamas</Text>  </a>
        <a> <Text>Shorts</Text>  </a>
        <a> <Text>Jeans & Denims</Text>  </a>
        <a> <Text>Boxers</Text>  </a>
        <a> <Text>Briefs</Text>  </a>
        <a> <Text>Trunks</Text>  </a>
        <a> <Text>Hipster Trunks</Text>  </a>
        <a> <Text>Trousers & pants</Text>  </a>
        <a> <Text>Actievewear Shorts</Text>  </a>
        <a> <Text>Actievewear Joggers</Text>  </a>
        <a> <Text>Plus Size Bottomwear</Text>  </a>
        <a> <Text>All bottomWear</Text>  </a>
    </VStack >
    <VStack className='stack1'  >
       <a href="" >  <Heading  size="md"  >
            WinterWear
        </Heading> </a>
        <a> <Text>Sweatshirts & Hoodies</Text>  </a>
        <a> <Text>Jackets</Text>  </a>
        <a> <Text>Sweaters</Text>  </a>
        <a> <Text>Joggers</Text>  </a>
        <a> <Text>Full Sleeve T-shirts</Text>  </a>
        <a> <Text>Plus Size</Text>  </a>



        <a href="" >  <Heading mt={20}  size="md"  >
            Sports & ActiveWear
        </Heading> </a>
        <a> <Text>ActiveWear & Hoodies</Text>  </a>
        <a> <Text>ActiveWearT-shirts </Text>  </a>
        <a> <Text>ActiveWear Shorts</Text>  </a>
        <a> <Text>ActiveWear joggers</Text>  </a>
        <a> <Text>Accessories</Text>  </a>
        <a> <Text>Plus Size</Text>  </a>
       
    </VStack >
    </Flex>
    </Box> <Box  left="50%"   height="750px" position="absolute" ></Box> 
    <VStack   width="200px" >
    <a href="" >  <Heading size="md">
            Specials
        </Heading> </a>
        <Flex p={2}  alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2}  alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/wmw-circle-icon-1673011178.png" /> <Text>Winterwear Store</Text> </Flex>
        <Flex p={2}  alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/Circle-icon-dotw-1669102812.png" /> <Text>Designs of the weak</Text> </Flex>
        <Flex p={2}  alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/icon-168-1668158001.png" /> <Text>Streatwear Collection</Text> </Flex>
        <Flex p={2}  alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/Circle-icon-space-collection-1666891198.png" /> <Text>Space collection</Text> </Flex>
        <Flex p={2}  alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/Circle-Icon-1664893858.png" /> <Text>Pokemon collection</Text> </Flex>
        <Flex p={2}  alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/Circle-icon-color-splash-1663442159.png" /> <Text>Colour Splash</Text> </Flex>
       
       
    </VStack >
    </Flex>
</Box>

     </VStack>

     <VStack className='dropdown2'  > 
           <Link> <Text  py={4} fontWeight="semibold" fontSize={"md"} className='main'  px={2}>WOMEN</Text> </Link>
           
           <Box className='dropdown3' position="absolute" width="80%" height="500px" overflow="scroll" backgroundColor="white"  left={155} zIndex={5}  top={65} >
    <Flex width="90%" justifyContent="space-between" >
   <Box width="50%"  >
    <Flex p={2} px={5} justifyContent="space-between" >
    <VStack className='stack1'    width="max-content" >
       <a href="" >  <Heading size="md" >
            Topwear
        </Heading> </a>
        <a> <Text  >Oversized T-shirts</Text>  </a>
        <a> <Text >Plain T-shirts</Text>  </a>
        <a> <Text >Fashion T-shirts</Text>  </a>
        <a> <Text>ActiveWear T-shirts</Text>  </a>
        <a> <Text>Full-Sleeve T-shirts</Text>  </a>
        <a> <Text>Half-Sleeve  T-shirts</Text>  </a>
        <a> <Text>Plus Size Topwear</Text>  </a>
        <a> <Text>shirts</Text>  </a>
        <a> <Text>Vests</Text>  </a>
        <a> <Text>Co-ord Sets</Text>  </a>
        <a> <Text>Kurtas</Text>  </a>
        <a> <Text>Henleys</Text>  </a>
        
        <a> <Text>T-shirt Combos</Text>  </a>
        <a> <Text>Printed T-shirts</Text>  </a>
        <a  > <Text  left={0}  >Printed T-shirts</Text>  </a>
      
        <a> <Text>Polo T-shirts</Text>  </a>
        <a> <Text>Jackets</Text>  </a>
        <a> <Text>Sweatshirts & Hoodies</Text>  </a>
        <a> <Text>Sweaters</Text>  </a>
        <a> <Text>Customize T-shirts</Text>  </a>

    </VStack >
   
    <VStack className='stack1'   >

       <a href="" >  <Heading  size="md" >
            Bottomwear
        </Heading> </a>
        <a  > <Text>Joggers</Text>  </a>
        <a> <Text>Pyjamas</Text>  </a>
        <a> <Text>Shorts</Text>  </a>
        <a> <Text>Jeans & Denims</Text>  </a>
        <a> <Text>Boxers</Text>  </a>
        <a> <Text>Briefs</Text>  </a>
        <a> <Text>Trunks</Text>  </a>
        <a> <Text>Hipster Trunks</Text>  </a>
        <a> <Text>Trousers & pants</Text>  </a>
        <a> <Text>Actievewear Shorts</Text>  </a>
        <a> <Text>Actievewear Joggers</Text>  </a>
        <a> <Text>Plus Size Bottomwear</Text>  </a>
        <a> <Text>All bottomWear</Text>  </a>
    </VStack >
    <VStack className='stack1'  >
       <a href="" >  <Heading  size="md"  >
            WinterWear
        </Heading> </a>
        <a> <Text>Sweaters</Text>  </a>
        <a> <Text>Sweatshirts & Hoodies</Text>  </a>
     
        <a> <Text>Joggers</Text>  </a>
        <a> <Text>Full Sleeve T-shirts</Text>  </a>
        <a> <Text>Plus Size</Text>  </a>
        <a> <Text>Jackets</Text>  </a>
        


        <a href="" >  <Heading mt={20}  size="md"  >
            Sports & ActiveWear
        </Heading> </a>
        <a> <Text>ActiveWear joggers</Text>  </a>
        <a> <Text>Accessories</Text>  </a>
        <a> <Text>Plus Size</Text>  </a>
       
        <a> <Text>ActiveWear & Hoodies</Text>  </a>
        <a> <Text>ActiveWearT-shirts </Text>  </a>
        <a> <Text>ActiveWear Shorts</Text>  </a>
      
    </VStack >
    </Flex>
    </Box> <Box  left="50%"   height="500px" position="absolute" borderLeft="1px solid black" ></Box> 
    <VStack   width="200px" >
    <a href="" >  <Heading size="md">
            Specials
        </Heading> </a>
        <Flex p={2}  alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/mad-india-circle-icon-1673616489.png" /> <Text>Mad in India Sale</Text> </Flex>
        <Flex p={2}  alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/wmw-circle-icon-1673011178.png" /> <Text>Winterwear Store</Text> </Flex>
        <Flex p={2}  alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/Circle-icon-dotw-1669102812.png" /> <Text>Designs of the weak</Text> </Flex>
        <Flex p={2}  alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/icon-168-1668158001.png" /> <Text>Streatwear Collection</Text> </Flex>
        <Flex p={2}  alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/Circle-icon-space-collection-1666891198.png" /> <Text>Space collection</Text> </Flex>
        <Flex p={2}  alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/Circle-Icon-1664893858.png" /> <Text>Pokemon collection</Text> </Flex>
        <Flex p={2}  alignItems="center" > <Image px={2} width={20} src="https://images.bewakoof.com/nav_menu/Circle-icon-color-splash-1663442159.png" /> <Text>Colour Splash</Text> </Flex>
       
       
    </VStack >
    </Flex>
</Box>
           
            </VStack>
            
            
           <VStack className='dropdown4' >  <Link> <Text py={4} fontWeight="semibold" fontSize={"md"} className='main'  px={2}>MOBILE COVERS</Text> </Link>
           <Box className='dropdown5' position="absolute" width="80%" height="350px" overflow="hidden" backgroundColor="white"  left={155} zIndex={5}  top={65} >
    <Flex width="90%" justifyContent="space-between" >
   <Box width="50%"  >
    <Flex p={2} px={5} justifyContent="space-between"  >
    <VStack  className='stack1'  >
       <a href="" >  <Heading size="md" >
          Xiamoi
        </Heading> </a>
        <a> <Text>Mi 12 Pro 5g</Text>  </a>
        <a> <Text>Redmi 9 Power</Text>  </a>
        <a> <Text>Redmi 10 A</Text>  </a>
       
    </VStack >
    <VStack  className='stack1'  >
       <a href="" >  <Heading  size="md" >
          OnePlus
        </Heading> </a>
        <a  > <Text>OnePlus 9R</Text>  </a>
        <a> <Text>OnePlus 9RT</Text>  </a>
        <a> <Text>OnePlus 9</Text>  </a>
       
    </VStack >
    <VStack   className='stack1' >
       <a href="" >  <Heading  size="md"  >
           Apple
        </Heading> </a>
        <a> <Text>Iphone 14 Pro Max</Text>  </a>
        <a> <Text>Iphone 14 Pro</Text>  </a>
        <a> <Text>Iphone 14 Plus</Text>  </a>
       
    </VStack >
    
    </Flex>
    <Flex mt={10} p={2} px={5} justifyContent="space-between"  >
    <VStack  width="200px"   className='stack1'  >
       <a href="" >  <Heading size="md" >
          Samsung
        </Heading> </a>
        <a> <Text> Samsung Galaxy Note 10</Text>  </a>
        <a> <Text> Samsung Galaxy Note 10 Plus</Text>  </a>
        <a> <Text> Samsung Galaxy Note 10</Text>  </a>
       
    </VStack >
    <VStack   width="200px"  className='stack1' >
       <a href="" >  <Heading  size="md" >
         Realme
        </Heading> </a>
        <a  > <Text>   Realme 5 Pro</Text>  </a>
        <a> <Text>   Realme 5</Text>  </a>
        <a> <Text>   Realme 9 Pro 5G</Text>  </a>
       
    </VStack >
    <VStack  width="200px" className='stack1'  >
       <a href="" >  <Heading  size="md"  >
       Vivo
        </Heading> </a>
        <a> <Text>   Vivo S1</Text>  </a>
        <a> <Text>   Vivo Y22</Text>  </a>
        <a> <Text>   Vivo Y16</Text>  </a>
       
    </VStack >
    
    </Flex>
    </Box> <Box left="50%"   height="500px" position="absolute" borderLeft="1px solid black" ></Box> 
    <VStack mt={3} width="50%"    >
      <Flex   > 
       <VStack className='stack1' > <a href="" >  <Heading  size="md"  >
       Other Brand
        </Heading> </a>
        <a> <Text> Oppo</Text>  </a>
        <a> <Text> Huawei</Text>  </a>
        <a> <Text> Moto </Text>  </a>
       </VStack> 
       <VStack ml={10} > <Image width="80%" src="https://images.bewakoof.com/nav_menu/bewakoof-online-fashion-COTM-mobile-cover-navigation-box-desktop-1612275399.jpg" /></VStack>
      </Flex>
    </VStack >
    </Flex>
</Box>
            </VStack> </Flex>  <Spacer/> <Input border="1px solid black" display={["none","none","none","block"]} placeholder='search by product , category or collection' width={300} />  {auth? <Box py={2} className="signupbox"  position="relative" display={["none","none","none","block"]} px={2} > <VscAccount size={25} /><VStack className='signup' display="none" ml={-20}  backgroundColor="white" width="200px"   position="absolute" >
            <Link><Text  className='Text' >{names}</Text></Link>
            <Link><Text className='Text' >My Wishlist</Text></Link>
            <Link><Text className='Text' >My Bag</Text></Link>
            <Link><Text className='Text' >My account</Text></Link>
            <Link><Text onClick={logout} className='Text' >Logout</Text></Link>
                </VStack>  </Box>:<Link to="/Signup"  >  <Text  display={["none","none","none","block"]} px={2} >LOGIN</Text> </Link> } <Link>  <Box px={2}  > <CiHeart  size={30}  /></Box> </Link> <Link>   <Box px={2} > <BsBag size={30}  /></Box>  </Link> <Image px={2} height={10} borderRadius="50%" size={30} src="https://as1.ftcdn.net/v2/jpg/01/85/97/08/1000_F_185970884_vu3JsjQgKW0IE00WpRsNiMtfptfcPtDA.jpg" /> </Flex>

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
