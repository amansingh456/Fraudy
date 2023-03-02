import { SignupSuccess, LogoutSuccess,LoginSuccess } from "./actionType"

const initialState={
    name: "",
    email:"",
    isAuth:false,
}

export const reducer = (state=initialState,{type,payload})=>{

    switch(type){

    case  SignupSuccess :
        return{...state,name:payload.names,email:payload.emails}
   
   case LogoutSuccess:
    return{...state,name:"",email:"",isAuth:false}
     

    case LoginSuccess:
        return{...state,isAuth:true}
   

     default :
        return state

    }



}