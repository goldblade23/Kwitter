import { domain, handleJsonResponse } from "./constants";
import { push } from "connected-react-router";
//import {auth} from "../reducers/auth.js"

export const SETCURRENTUSER = "SETCURRENTUSER";
export const GETUSERS = "GETUSERS"
export const GETUSERS_SUCCESS="GETUSERS_SUCCESS"

export const UPDATE = "UPDATE";
export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
 export const UPDATE_FAIL = "UPDATE_FAIL";

 export const DOWNLOAD_USER_IMAGE="DOWNLOAD_USER_IMAGE"
 export const DOWNLOAD_USER_IMAGE_SUCCESS="DOWNLOAD_USER_IMAGE_SUCCESS"

 export const DELETEUSER="DELETEUSER"
 export const DELETEUSER_SUCCESS="DELETEUSER_SUCCESS"

// export const UPLOAD_USER_PIC = "UPLOAD_USER_PIC";
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

  export const getUsers = ()=> dispatch => {
    dispatch({
      type: GETUSERS
    })
    
    return fetch(url + "?limit=10000")
      .then(handleJsonResponse)
      .then(result => {
          return dispatch({
              type: GETUSERS_SUCCESS,
              payload: result
          })
      })
  };


  //---------
  const userUpdate = newUserData => dispatch => {
        const token = newUserData.loginInfo.token
    dispatch({
      type: UPDATE
    });
fetch(url, {
      method: "PATCH",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUserData.state)
    })
    .then(res => {
        if (!res.ok) {
          res.json().then(err => {
            throw err;
          });
        }
   
        return res.json();
      })
      .then(result => {
        // dispatch here on success --
        console.log(result)
        dispatch({
          type: UPDATE_SUCCESS,
          dpayload: result//data.user.displayName
        });
        // logic for routing when dealing with asych functions.
        dispatch(push("/feed"));
      })
      .catch(err => {
        // dispatch here on fail --
        dispatch({
          type: UPDATE_FAIL,
          payload: alert("fail")
        });
      });

  };

    
  export const updateThenGoToUserProfile = newUserData => dispatch => {
    return dispatch(userUpdate(newUserData))
  };
    
    export const downloadUserImage=id=>dispatch=>{
      dispatch({
        type:DOWNLOAD_USER_IMAGE
      })
      return fetch(url + id + "/picture")
      .then(res=>{
        return res.blob()
      })
      .then(result => {
        return dispatch({
          type: DOWNLOAD_USER_IMAGE_SUCCESS,
          payload: URL.createObjectURL(result),id
        })
        
      })
    }
   export const deleteUser = ()=> (dispatch,getState)=>{
    const token = getState().auth.login.token
    dispatch({
      type:DELETEUSER
    })
    fetch(url, {
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json"
      },
    })
    .then(result => {
      return dispatch({
          type: DELETEUSER_SUCCESS,
          payload: alert(getState().auth.login.id + " has been deleted bro."),
      })
  })
   }


//   export const uploadUserPic = ({ picture }) => (dispatch, getState) => {
  
//    const token = getState().auth.login.token
//    let profileFormData = newProfileFormData();    //Should this be newUserData?
 
//    profileFormData.append("picture", picture)
 
//    dispatch({
//      type: UPLOAD_USER_PIC
//    });

//    return fetch(url + "/users/picture", profileFormData {
//      method: "POST",
//      headers: {
//        Authorization: "Bearer" + token,
//        "Content-Type" : "multipart/form-data"
//      }
//    })
//      .then(res => {
//        if (res.status == 200) {
//          downloadUserImage(dispatch, getState().login.id)
//        }
//        })
//      .catch(err =>
//        console.log("Upload is not working, bro.")
//      );
//  }