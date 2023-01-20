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
    <Box  bg="yellow.100" height="620px" >

    <Box bg="white" width="80%"  height="600px"  mx="auto" >

 <Box pt={20} width="30%" px={2} py={5}     height="500px" margin="auto"  >
   
   <Heading size="lg" pt={10} >Log in to your account</Heading>
  <FormLabel mt={10} >Email</FormLabel>
  <Input border="1px solid black" defaultValue={email} onChange={(e)=>Setemail(e.target.value)} /> 
  <FormLabel mt={5} >Password</FormLabel>
  <Input border="1px solid black"  onChange={(e)=>Setpass(e.target.value)} /> 
<Button width="100%" bgColor="red" display="block" margin="auto" mt={10} onClick={()=>submit()} >Login</Button>
 </Box>

    </Box>

    </Box>
  )
}

export default Login
