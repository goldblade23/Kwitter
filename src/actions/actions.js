export const SIGN_UP_OPEN_FORM="SIGN_UP_OPEN_FORM"
export const LOGIN_ACTION="LOGIN_ACTION"


export function signUpOpenForm(){
    return{
        type:SIGN_UP_OPEN_FORM
    }
}

export function loginAction(){
    return {
        type:LOGIN_ACTION
    }
}