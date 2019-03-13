import React, { Component } from 'react';

import UserBio from "./userBio.js"
import UserInfo from "./userInfo.js"
import UserPic from "./userPic.js"
import DeleteAccount from "./deleteAccount.js"
import ProfileSubmitButton from "./profileSubmitButton"

class ProfilePage extends Component{
    render() {
        return (
            <div className="login-Page">
             <h2>Profile:</h2>  
              <UserPic />
            <UserInfo />
          <UserBio />
          <ProfileSubmitButton />
            <DeleteAccount />

            </div>

    )}
}

export default ProfilePage