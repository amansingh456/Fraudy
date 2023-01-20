import { Box, Flex, Heading, VStack , Image, Input, Button ,Text} from '@chakra-ui/react'
import { createUserWithEmailAndPassword , updateProfile ,signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { auth, provider } from './firebase';
import {FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginFunctionSuccess } from '../AuthReducer/action';


// AiFillEye

const Signup = () => {

     const navigate = useNavigate()
    const dispatch = useDispatch()



   

    // console.log(names)
    const[close,Setclose] = useState(false) //button disabled
     const[name,Setname] = useState("")
     const[email,Setemail] = useState("")
     const[pass,Setpass] = useState("")


      const  submit = ()=>{
       
        if(name && email && pass){
          const obj={name,email}
            Setclose(true)
  createUserWithEmailAndPassword(auth,email,pass).then(res=>{console.log(res); Setclose(false); dispatch(LoginFunctionSuccess(obj)) ; navigate("/Login")} )
  .catch(()=>  Setclose(false))
        }else{
            alert("enter all details")
            return
        }
 
        Setemail("")
        Setname("")
        Setpass("")

      }


//google

const googleSignin=()=>{

  signInWithPopup(auth,provider).then((data)=> {console.log(data.user);dispatch(LoginFunctionSuccess({name:data.user.displayName,
    email:data.user.email}));navigate("/")})
}

// displayName
// email


  return (
    <Box   >

 <Flex justifyContent="space-between"  >
    <VStack bg="yellow.100" height="640px" width="50%" p={5} >
        <Heading>Welcome to the world of fraudy!</Heading>
        <Box pt={100}  > 
        <Image width="100%" src="https://images.bewakoof.com/web/group-19-1617704502.png" />
        </Box>
    </VStack>
    <VStack p={5}  width="50%" >

   <Heading fontSize={"2xl"} >Signup</Heading>

   <Text pt={5} fontSize="lg" >Hi new buddy, let's get you started with the fraudy!</Text>
 
  <Box  p={5}  width="50%" > 
   <Input placeholder='Enter name' marginBottom={5}  type="name" onChange={(e)=>Setname(e.target.value)}  value={name} />
   <Input  placeholder='Email Id'  type="email" marginBottom={5} onChange={(e)=>Setemail(e.target.value)} value={email} />
   <Input placeholder='Password'  type="password" onChange={(e)=>Setpass(e.target.value)} value={pass} />
   </Box>
   
   <Button disabled={close} bgColor="cyan.300" _hovercolor="white" width="45%" onClick={()=>submit()} >Proceed</Button> 
   <Box pt={5} > 
 <Flex  alignItems="center" > <Text>Already have an Account</Text> <Link to="/Login" >  <Text ml={5} bgColor="blue.100" color_hover="white" fontWeight="bold" borderRadius={5}  p={2} >Login</Text> </Link> </Flex> 

 </Box>

 <Box bor pt={5} >
    <Flex> 
 <Link>   <Flex onClick={googleSignin}  border="1px solid black" borderRadius={5} width="200px" px={5} py={2}  >
        <FcGoogle size={30} />   <Text  ml={5}  fontWeight="semibold" >Google</Text> 
    </Flex> </Link>
    <Link to="/Login" >   <Flex ml={5}  onClick={googleSignin} border="1px solid black" borderRadius={5} width="200px" px={5} py={2}  >
        <AiFillFacebook size={30} />   <Text ml={5} fontWeight="semibold" >Facebook</Text> 
    </Flex> </Link>
    </Flex>
</Box>


    </VStack>
 </Flex>


    </Box>
  )
}

export default Signup
