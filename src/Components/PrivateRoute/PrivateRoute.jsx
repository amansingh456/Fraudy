import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import { store } from '../../Redux/store'

const PrivateRoute = ({children}) => {
 
  const isAuth = useSelector((store)=>store.AuthReducer.isAuth)


  if(isAuth=="false"){
    return <Navigate to="/Signup"  />
  }
  

  return children
}

export default PrivateRoute
