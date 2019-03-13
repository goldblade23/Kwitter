import React, { Component } from 'react';


class UserBio extends Component{
    render() {
        return (
            
            <div className="profile-user-bio-div">
              <div className="profile-bio">
                   <label for="profileBio">About Me:</label>
                    <input 
                        type="text"  
                        name="profileBio"/>
                </div>
            </div>
        )}

}

export default UserBio