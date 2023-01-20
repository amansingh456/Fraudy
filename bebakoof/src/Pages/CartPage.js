import { CartRight } from "../Components/Cart/CartRight"
import { ProductCard } from "../Components/ProductCard"
import {Box} from "@chakra-ui/react"
import "./CartPage.css"
import { useState } from "react"

export const CartPage = () => {
   
    
    return (
        <Box className="cartPage">
             <ProductCard />
             <CartRight />
         </Box>
    )
}