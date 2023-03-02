import { Box, Button, FormControl, FormErrorMessage, FormLabel, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword , updateProfile } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from "yup"
import { useFormik } from 'formik'
import swal from 'sweetalert';
import { LoginFunctionSuccess } from '../AuthReducer/action';
const Login = () => {

   const dispatch = useDispatch()
     const navigate = useNavigate()

    const[email,Setemail] = useState("")
    const[pass,Setpass] = useState("")


    const names =  useSelector((store)=>
    store.AuthReducer.name
   )
   const emails =  useSelector((store)=>
   store.AuthReducer.email
  )
    console.log(names,emails)


    const formik = useFormik({
      initialValues:{
          email:"" ,
          password:"" ,
      } ,
      validationSchema: yup.object({
        email : yup.string().email().required("Please enter your email") ,
          password : yup.string().required(" password Required").min(6," password is too Short")
      }),
      onSubmit :  (values,actions) =>{
        
          signInWithEmailAndPassword(auth,values.email,values.password).then(res=>{dispatch(LoginFunctionSuccess());navigate("/") ;swal("Login Success", "Happy Shopping", "success")} )
          .catch(err=>console.log(err))
          actions.resetForm()
      }
  })

   



      useEffect(()=>{
        Setemail(emails)
      },[emails])
     

  return (
    <Box  bg="yellow.100" height={["500px" , "600px" , "700px" ,  "650px"]} >

    <Box bg="white" width="80%"  height={["400px" , "500px" , "600px" ,  "600px"]}  mx="auto"  >



 
 <VStack pt={20} width={[ "70%", "60%" , "40%","50%"]} px={2} py={5}     height={[ "300px" ,  "300px" ,  "450px", "500px"]} margin="auto"   as="form" onSubmit={formik.handleSubmit} >
  
  <Heading>Log In</Heading>
<FormControl isInvalid={formik.errors.email && formik.touched.email} >
    <FormLabel>email</FormLabel>
    <Input name="email" type="email"  placeholder="Enter email" onChange={formik.handleChange}  value={formik.values.email} 
    onBlur={formik.handleBlur} />
    <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
</FormControl>
<FormControl isInvalid={formik.errors.password && formik.touched.password } >
    <FormLabel>Password</FormLabel>
    <Input  name="password"  type="password"  placeholder="Enter Password" onChange={formik.handleChange} value={formik.values.password} 
      onBlur={formik.handleBlur} />
    <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
</FormControl>
<Box> 
<Button width="100%" bgColor="red" display="block" margin="auto" mt={20} type="submit" _hover={{color:"white"}}  >Submit</Button>
</Box>
    </VStack>
   
 





    </Box>

    </Box>
  )
}

export default Login
