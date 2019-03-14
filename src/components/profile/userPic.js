import React, { Component } from 'react';
import './App.css';
class UserPic extends Component {
state = {
    selectedFile: null
}
    fileSelectedHandler = e => {
        console.log(event.target.files[0])
        this.setState({
            selectedFile:e.target.files[0]
        })
    }

    fileUPloadHandler = () => {
        image.post(' ')
    }

    render() {
        return (
        <div className="profileUserPicDiv">
              <div className="profile-user-pic">
                   <label for="profileUserPic"></label>
                    <button onClick={this.fileUploadHandler}>Upload a Photo</button>
                        <input type="file" onChange={}/>
                </div>
            </div>
        )}
}

export default UserPic