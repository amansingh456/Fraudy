import { LoginFailure, LoginRequest, SignupSuccess, LogoutFailure, LogoutRequest, LogoutSuccess,LoginSuccess } from "./actionType"



export const LoginFunctionRequest=()=>{
    return{
        type: LoginRequest
    }
}

export const LoginFunctionSuccess =()=>{
    return{
        type: LoginSuccess
    }
}



export const SignupFunctionSuccess = (payload)=>{
    return{
        type: SignupSuccess,
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

