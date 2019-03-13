import React, { Component } from 'react';


class UserInfo extends Component{
    render() {
        return (
            
            <div className="profile-user-info-div">
              <div className="profile-user-info">
                   <label htmlFor="profileUserName">USERNAME:</label>
                    <input 
                        type="text"  
                        name="profileUserName"/>
                </div>
                <div className="profile-User-Name">
                   <label htmlFor="profileName">NAME:</label>
                    <input 
                        type="text"  
                        name="UserName"/>
                </div>
                <div className="email-address">
                <label htmlFor="emailAddress">EMAIL ADDRESS:</label>
                    <input 
                    type="email"
                    name="emailAddress"/>
                </div>
                <div className="current-password">
                <label htmlFor="currentPassword">LOCATION:</label>
                    <input 
                    type="password"
                    name="currentPassword"/>
                </div>
{/* 
                <div className="change-current-password">
                <label htmlFor="changeCurrentPassword">CHANGE CURRENT PASSWORD:</label>
                    <input 
                    type="password"
                    name="changeCurrentPassword"/>
                </div> */}
            </div>
    
        )}

}

export default UserInfo