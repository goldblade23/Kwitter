import { domain, jsonHeaders, handleJsonResponse } from "./constants";

export const GETMESSAGES = "GETMESSAGES";
export const GETMESSAGES_SUCCESS = "GETMESSAGES_SUCCESS";
export const POSTMESSAGE = "POSTMESSAGE"
export const POSTMESSAGE_SUCCESS = "POSTMESSAGE_SUCCESS"
export const POSTMESSAGE_CHAR_FAIL = "POSTMESSAGE_CHAR_FAIL"

const url = domain + "/messages";

export const getMessages=()=>dispatch=>{
    dispatch({
        type:GETMESSAGES
    });

    return fetch(url + "?limit=50")
    .then(handleJsonResponse)
    .then(result =>{
        return dispatch({
            type: GETMESSAGES_SUCCESS,
            payload: result
    })
    })
}


const postMessage = messageData => (dispatch,getState) => {
    const token=getState().auth.login.token
    dispatch({
        type:POSTMESSAGE
    })
    return fetch(url,{
        method:"POST",
        headers: {...jsonHeaders,Authorization: "Bearer " + token},
        body: JSON.stringify(messageData)
    })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTMESSAGE_SUCCESS,
        payload: result
      });
    })
    .catch(err => { 
        return Promise.reject(
          dispatch({
            type: POSTMESSAGE_CHAR_FAIL,
            payload: alert("Your Kweet cannot exceed 255 characters.")
          })
        );
    });
};

export const updateAfterPosting = messageData => dispatch =>{
    return dispatch(postMessage(messageData))
    .then(()=>dispatch(getMessages()))
}