import { CartRight } from "../Components/Cart/CartRight"
import { ProductCard } from "../Components/ProductCard"
import {Box} from "@chakra-ui/react"
import "./CartPage.css"

export const CartPage = () => {
    let data = JSON.parse(localStorage.getItem('wishlist'))|| []
    console.log(data)
    return (
        <Box className="cartPage">
             <ProductCard data={data}/>
             <CartRight data={data}/>
         </Box>
    )
}