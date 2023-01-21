import React from 'react'
import { Route, Routes} from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Login from './Login'
import ProductPage from './ProductPage'
import {CartPage} from "../Pages/CartPage"
import Signup from './Signup'
import { MayLikeCard } from './MayLikeCard'
import Payment from '../Pages/Payment'
import Success from "../Pages/Success"

const Allroutes = () => {
  return (
   
 <Routes>
<Route path="/" element={<HomePage/>}  />
<Route path="/Signup" element={<Signup/>}  />
<Route path="/Login" element={<Login/>}  />
<Route path="/Mens" element={<ProductPage/>}  />
<Route path="/Womens" element={<ProductPage/>}  />
<Route path="/cart" element={<CartPage/>}  />
<Route path="/wishlist" element={<MayLikeCard/>}  />
<Route path="/payment" element={<Payment/>}  />
<Route path="/success" element={<Success/>}  />
 </Routes>
  )
}

export default Allroutes 

