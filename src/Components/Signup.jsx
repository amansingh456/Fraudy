import { Box, Flex, Heading, VStack , Image, Input, Button ,Text, FormControl, FormLabel, FormErrorMessage,Alert ,AlertIcon } from '@chakra-ui/react'
import { createUserWithEmailAndPassword , updateProfile ,signInWithPopup } from 'firebase/auth';
import React, { useState } from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { auth, provider } from './firebase';
import {FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate  } from 'react-router-dom';
import { LoginFunctionSuccess, SignupFunctionSuccess } from '../AuthReducer/action';
import * as yup from "yup"
import { useFormik } from 'formik'
import swal from 'sweetalert';
// AiFillEye



const Signup = () => {
  
     const navigate = useNavigate()
    const dispatch = useDispatch()
    const[close,Setclose] = useState(false) //button disabled
    const[name,Setname] = useState("")
    const[email,Setemail] = useState("")
    const[pass,Setpass] = useState("")


    const formik = useFormik({
      initialValues:{
        name:"" ,
          email:"" ,
          password:"" ,
      } ,
      validationSchema: yup.object({
         name : yup.string().required("name Required").min(6,"your name is too Short") ,
          email : yup.string().email().required("Please enter your email") ,
          password : yup.string().required("Please enter password Required").min(6,"Your password is too Short")
      }),
      onSubmit :  (values,actions) =>{
        Setclose(true)
    const emails = values.email; const names = values.name
    createUserWithEmailAndPassword(auth,values.email,values.password).then(res=>{console.log(res);dispatch(SignupFunctionSuccess({names,emails})); navigate("/Login");
    swal("Signup Success", "You are redirected to Login Page!", "success") ;} )

          .catch(err=>console.log(err));
  
          Setclose(false)
          actions.resetForm()
      }
  })
      


  





//google

const googleSignin=()=>{

  signInWithPopup(auth,provider).then((data)=> {console.log(data.user);dispatch(LoginFunctionSuccess({names:data.user.displayName,
    emails:data.user.email}));navigate("/")})
}




  return (
    <Box   >

 <Flex justifyContent="space-between" flexDirection={["column","column","column","row"  ]}  >
    <VStack bg="yellow.100" height="640px" p={5} width={["auto","auto","auto","50%"]}  >
        <Heading>Welcome to the world of fraudy!</Heading>
        <Box pt={100}  > 
        <Image width="100%" src="https://images.bewakoof.com/web/group-19-1617704502.png" />
        </Box>
    </VStack>
    <VStack p={5}   width={["auto","auto","auto","50%"]}    >

   <Heading fontSize={"2xl"} >Signup</Heading>

   <Text pt={5} fontSize="lg" >Hi new buddy, let's get you started with the fraudy!</Text>


<VStack as="form" onSubmit={formik.handleSubmit}  p={5}  width={[ "90%","400px","50%","500px"]} >
  

 

  <FormControl isInvalid={formik.errors.name && formik.touched.name } >
    <FormLabel>name</FormLabel>
    <Input name="name" type="name"  placeholder="Enter Name" onChange={formik.handleChange}  value={formik.values.name} 
    onBlur={formik.handleBlur} />
    <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
</FormControl>
<FormControl isInvalid={formik.errors.email && formik.touched.email } >
    <FormLabel>Email</FormLabel>
    <Input name="email" type="email"  placeholder="Enter Email" onChange={formik.handleChange}  value={formik.values.email} 
    onBlur={formik.handleBlur} />
    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
</FormControl>
<FormControl isInvalid={formik.errors.password && formik.touched.password } >
    <FormLabel>Password</FormLabel>
    <Input  name="password"  type="password"  placeholder="Enter Username" onChange={formik.handleChange} value={formik.values.password} 
      onBlur={formik.handleBlur} />
    <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
</FormControl>
<Button type="submit" bgColor="blue.100" disabled={close} _hover={{color:"white"}} >Submit</Button>

    </VStack>
   
  
   <Box pt={5} > 
 <Flex width={[ "90%","","",""]} alignItems="center" > <Text>Already have an Account</Text> <Link to="/Login" >  <Text ml={5} bgColor="blue.100" color_hover="white" fontWeight="bold" borderRadius={5}  p={2} >Login</Text> </Link> </Flex> 

 </Box>

 <Box bor pt={5} >
    <Flex flexDirection={["column","column","row","row"  ]} >
      <VStack> 
 <Link>   <Flex onClick={googleSignin}  border="1px solid black" borderRadius={5} width="200px" px={5} py={2}  >
        <FcGoogle size={30} />   <Text  ml={5}  fontWeight="semibold" >Google</Text> 
    </Flex> </Link> </VStack> 
    <Link >   <VStack> <Flex ml={[0,0,5,5]} mt={[5,10,0,0]}  onClick={googleSignin} border="1px solid black" borderRadius={5} width="200px" px={5} py={2}  >
        <AiFillFacebook size={30} />   <Text ml={5} fontWeight="semibold" >Facebook</Text> 
    </Flex> </VStack> </Link>
    </Flex>
</Box>


    </VStack>
 </Flex>


    </Box>
  )
}

export default Signup
