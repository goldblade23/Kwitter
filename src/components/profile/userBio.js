import React, { Component } from 'react';


class UserBio extends Component{
    render() {
        return (
            
            <div className="profile-user-bio-div">
              <div className="profile-bio">
                   <label >Bio:
                   <textarea rows="5" cols="50" 
                        name="profileBio"/></label>
                </div>
            </div>
        )}

}

export default UserBio