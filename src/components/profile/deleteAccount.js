import React, { Component } from 'react';


class DeleteAccount extends Component{
    render() {
        return (
              <div className="profile-delete-account">
                   <label for="profileDeleteAccount"></label>
                    <button onClick={this.deleteAccountHandler}>Delete Your Account</button>
                        <input type="file" onChange={}/>
                </div>
         
    
        )}

}

export default DeleteAccount