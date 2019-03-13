import React, { Component } from 'react';


class UserBio extends Component{
    render() {
        return (
            
            <div className="profileUserBioDiv">
              <div className="profile-bio">
                   <label for="profileBio">About Me:</label>
                    <textarea
                        type="text"  
                        name="profileBio"/>
                </div>
            </div>
    
        )}

}

export default UserBio