import React, { Component } from 'react';


class UserPic extends Component{
    render() {
        return (
        <div className="profileUserPicDiv">
              <div className="profile-user-pic">
                   {/* <label htmlFor="profileUserPic"></label>
                    <input 
                        type="text"  
                        name="profileUserName"/>
                </div>
                <div className="email-address">
                <label htmlFor="emailAddress">EMAIL ADDRESS:</label>
                    <input 
                    type="email"
                    name="emailAddress"/>
                </div>
                <div className="current-password">
                <label htmlFor="currentPassword">PASSWORD:</label>
                    <input 
                    type="password"
                    name="currentPassword"/>
                </div>

                <div className="change-current-Password">
                <label htmlFor="changeCurrentPassword">CHANGE CURRENT PASSWORD:</label>
                    <input 
                    type="password"
                    name="changeCurrentPassword"/>*/}
                </div> 
                <form>
  <input type="file" name="pic" accept="image/*" />
  
  {/* <input type="submit" /> */}
</form>
            </div>
    
        )}

}

export default UserPic