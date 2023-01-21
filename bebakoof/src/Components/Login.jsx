import { Box, Button, FormLabel, Heading, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword , updateProfile } from 'firebase/auth';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Login = () => {

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

    const  submit = ()=>{
       
        if(email && pass){

            signInWithEmailAndPassword(auth,email,pass).then(res=>{ Setemail("");Setpass("");navigate("/");console.log(res)} )
            .catch(err=> {alert("enter correct details") ;console.log(err)})
        
        }else{
            alert("enter all details")
            return
        }
 
        
      }



      useEffect(()=>{
        Setemail(emails)
      },[emails])
     

  return (
    <Box  bg="yellow.100" height={["500px" , "600px" , "700px" ,  "650px"]} >

    <Box bg="white" width="80%"  height={["400px" , "500px" , "600px" ,  "600px"]}  mx="auto"  >

 <Box pt={20} width={[ "70%", "60%" , "40%","50%"]} px={2} py={5}     height={[ "300px" ,  "300px" ,  "450px", "500px"]} margin="auto"  >
   
   <Heading size={["sm","md","md","lg"]} pt={10} >Log in to your account</Heading>
  <FormLabel mt={[5,10,10,10]} >Email</FormLabel>
  <Input  border="1px solid black" defaultValue={email} onChange={(e)=>Setemail(e.target.value)} /> 
  <FormLabel mt={[2,5,5,5]} >Password</FormLabel>
  <Input border="1px solid black"  onChange={(e)=>Setpass(e.target.value)} /> 
<Button width="100%" bgColor="red" display="block" margin="auto" mt={[5,5,10,10]} onClick={()=>submit()} >Login</Button>
 </Box>

    </Box>

    </Box>
  )
}

export default Login
