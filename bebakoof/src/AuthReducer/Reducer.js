import { LoginSuccess, LogoutSuccess } from "./actionType"

const initialState={
    name: "",
    email:"",
    isAuth:false,
}

export const reducer = (state=initialState,{type,payload})=>{

    switch(type){

    case  LoginSuccess :
        return{...state,name:payload.name,email:payload.email,isAuth:true}
   
   case LogoutSuccess:
    return{...state,name:"",email:"",isAuth:false}
     
   

     default :
        return state

    }



}