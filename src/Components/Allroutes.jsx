import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Login from './Login'
import ProductPage from './ProductPage'
import WomensPage from "./WomensPage"
import { CartPage } from "../Pages/CartPage"
import { MayLikeCard } from "../Components/MayLikeCard"
import Signup from './Signup'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Payment from '../Pages/Payment'
import Success from '../Pages/Success'

const Allroutes = () => {
  return (

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Mens" element={<ProductPage />} />
      <Route path="/Women" element={<WomensPage />} />
      <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
      <Route path="/maylikecard" element={<PrivateRoute><MayLikeCard /></PrivateRoute>} />
      <Route path="/Login" element={<Login />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/success" element={<Success />} />

    </Routes>
  )
}

export default Allroutes

