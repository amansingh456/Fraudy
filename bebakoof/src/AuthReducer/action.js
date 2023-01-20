import { LoginFailure, LoginRequest, LoginSuccess, LogoutFailure, LogoutRequest, LogoutSuccess } from "./actionType"



export const LoginFunctionRequest=()=>{
    return{
        type: LoginRequest
    }
}

export const LoginFunctionSuccess = (payload)=>{
    return{
        type: LoginSuccess,
        payload
    }
}

export const LoginFunctionFailure=()=>{
    return{
        type: LoginFailure
    }
}


export const LogoutFunctionRequest=()=>{
    return{
        type: LogoutRequest
    }
}

export const LogoutFunctionSuccess = ()=>{
    return{
        type: LogoutSuccess,
        
    }
}

export const LogoutFunctionFailure=()=>{
    return{
        type: LogoutFailure
    }
}

