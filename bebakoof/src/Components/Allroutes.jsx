import React from 'react'
import { Route, Routes} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Login from './Login'
import ProductPage from './ProductPage'

import Signup from './Signup'

const Allroutes = () => {
  return (
   
 <Routes>
<Route path="/" element={<HomePage/>}  />
<Route path="/Signup" element={<Signup/>}  />
<Route path="/Mens" element={<ProductPage/>}  />
<Route path="/Login" element={<Login/>}  />
 </Routes>
  )
}

export default Allroutes 

