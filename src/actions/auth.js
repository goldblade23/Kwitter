import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";

// consts for registration
export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

// consts for login
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN = "LOGIN";
export const LOGIN_FAIL = "LOGIN_FAIL";

// const for update user
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

// const for delete user
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAIL = "DELETE_USER_FAIL";

//const for messages
export const GET_MESSAGES = "GET_MESSAGES";

// const for getting user info
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";

export const GET_USER_MESSAGES = "GET_USER_MESSAGES";
export const POST_MESSAGES = "POST_MESSAGES";

export const LOGOUT_USER = "LOGOUT_USER";

export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_FAIL = "UPLOAD_IMAGE_FAIL";

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

export const loginThenGoToUserProfile = loginData => dispatch => {
  return dispatch(login(loginData))
  //.then(console.log(loginData))     
  .then(() => dispatch(push("/feed")));
};

const register = registerData => dispatch => {
  dispatch({
    type: REGISTER
  });
  console.log(registerData)

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


