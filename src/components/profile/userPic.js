import React, { Component } from 'react';


class UserPic extends Component{
    render() {
        return (
        <div className="profileUserPicDiv">
              <div className="profile-user-pic">
                   <label for="profileUserPic"></label>
                    <input 
                        type="text"  
                        name="profileUserName"/>
                </div>
                <div className="email-address">
                <label for="emailAddress">EMAIL ADDRESS:</label>
                    <input 
                    type="email"
                    name="emailAddress"/>
                </div>
                <div className="current-password">
                <label for="currentPassword">PASSWORD:</label>
                    <input 
                    type="password"
                    name="currentPassword"/>
                </div>

                <div className="change-current-Password">
                <label for="changeCurrentPassword">CHANGE CURRENT PASSWORD:</label>
                    <input 
                    type="password"
                    name="changeCurrentPassword"/>
                </div>
            </div>
    
        )}

}

export default UserPic