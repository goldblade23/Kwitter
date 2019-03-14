import {LOGIN_ACTION,SIGN_UP_OPEN_FORM} from "../actions/actions.js"

const initialState={
    active:false
}

function reducer(state=initialState, action){
    switch(action.type){
        case LOGIN_ACTION:
        return console.log("yes")
        case SIGN_UP_OPEN_FORM:

        return ({...state, active:!state.active})
        default: return state
    }
}

export default reducer