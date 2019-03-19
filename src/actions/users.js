import { domain, handleJsonResponse } from "./constants";

export const SETCURRENTUSER = "SETCURRENTUSER";

const url = domain + "/users/";

export const user = id => dispatch => {
    return fetch(url + id)
      .then(handleJsonResponse)
      .then(result => {
          return dispatch({
              type: SETCURRENTUSER,
              payload: result.user
          })
      })
  };
  
  export const userUpdate = id => dispatch => {
    return fetch(url + id)
      .then(handleJsonResponse)
      .then(result => {
          return dispatch({
              type: SETCURRENTUSER,
              payload: result.user
          })
      })
  };