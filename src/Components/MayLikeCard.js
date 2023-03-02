import {Text} from "@chakra-ui/react"
import { useEffect } from "react"
import { CiCircleRemove } from "react-icons/ci"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, deleteToWishlist, getToWishlist, moveToCart, removeToWishlist } from "../Redux/action"
import { EmptyWishlist } from "./EmptyWishlist"
import { Wrapper,Button,P1,P2,P3,Img,Parent,Grand } from "./MaylikeCardElement"
export const MayLikeCard =  () => {
    const isLoading = useSelector((store)=>store.DataReducer.isLoading)
   const dispatch= useDispatch();
    const wishlist= useSelector((store)=>store.DataReducer.wishlist)
     console.log(wishlist,"wish")
    const handleRemove = (id) => {
       
         dispatch(deleteToWishlist(id)) 
       
    }
   
    const handleAdd = (id) => {
        console.log(id,"add-el")
        let filterData = wishlist.filter((el)=>{
            if(el.id==id){
                return el
            }
        })
       
        dispatch(addToCart(filterData[0]))
        
         dispatch(deleteToWishlist(id)) 
    }
  useEffect(()=>{
  if(!isLoading)  dispatch(getToWishlist())
  },[isLoading])
   
  
    return (
        
        <Grand>
            { wishlist.length>0?<Text as="b">WISHLIST</Text>:null}
            

            {
                wishlist.length>0? 

                <Parent>

                {
                   
                     wishlist.map((el)=>{
                        console.log(el,'ell')
                        return (
                            <Wrapper key={el.id}> 
                            <Img src={el.image} />
                            <P1>{el.name}</P1>
                            <P2 >₹{el.price}</P2>
                            <P3 as="s" bg="hsla(0,0%,92.9%,.6)">₹{el.oldprice}</P3>
                            <div style={{display:"flex",width:"100%"}}>
                                <Button onClick={()=>handleAdd(el.id)}>MOVE TO BAG</Button>
                                <Button onClick={()=>handleRemove(el.id)}>REMOVE</Button>
                            </div>
                            
                         </Wrapper>
                        )
                    })
                    
                   
                    
                }
                </Parent> :
                     
                     <div style={{textAlign:"center"}}>
                        <EmptyWishlist />
                    </div>
            }
           
            
               
        </Grand>
    )
}


