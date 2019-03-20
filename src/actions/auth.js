import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";
import {downloadUserImage} from "."

// action types
export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

const url = domain + "/auth";

// action creators
const login = loginData => dispatch => {
  dispatch({
    type: LOGIN
  });

  return fetch(url + "/login", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(loginData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: LOGIN_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: LOGIN_FAIL,
          payload: alert("Incorrect login or password.")
        })
      );
    });
};

export const loginThenGoToUserProfile = loginData => (dispatch,getState) => {
  return dispatch(login(loginData))
  //.then(console.log(loginData)) 
  .then(() => 
  {
    const id=getState().auth.login.id
    return dispatch(downloadUserImage(id))
  }
  
  )    
  .then(() => dispatch(push("/feed")));
};

const register = registerData => dispatch => {
  dispatch({
    type: REGISTER
  });
  //console.log(registerData)

  return fetch(url + "/register", {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: REGISTER_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: REGISTER_FAIL,
          payload: alert(
            "Username already in use, Please choose a different username."
          )
        })
      );
    });
};

export const registerThenGoToUserProfile = registerData => dispatch => {
  return dispatch(register(registerData))
  //.then(() => dispatch(push("/")));
  .then(() => dispatch(loginThenGoToUserProfile(registerData)));
};


