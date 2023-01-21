import { LoginSuccess, LogoutSuccess } from "./actionType"

const initialState={
    name: "",
    email:"",
    isAuth:false,
}

export const reducer = (state=initialState,{type,payload})=>{

    switch(type){

    case  LoginSuccess :
        return{...state,name:payload.names,email:payload.emails,isAuth:true}
   
   case LogoutSuccess:
    return{...state,name:"",email:"",isAuth:false}
     
   

     default :
        return state

    }



}