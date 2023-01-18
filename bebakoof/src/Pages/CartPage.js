import { CartRight } from "../Components/Cart/CartRight"
import { ProductCard } from "../Components/ProductCard"
import {Box} from "@chakra-ui/react"

export const CartPage = () => {
    return (
        <Box mt="50px" >
            <Box border="1px solid black" display="flex" p="0px 10% 0px 10%" gap={"80px"}>
                <ProductCard />
                <CartRight />
            </Box>
        </Box>
    )
}