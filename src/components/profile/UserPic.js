import React, { Component } from "react";

class UserPic extends Component {
  state = {
    active: false,
    selectedFile: null
  };
  fileSelectedHandler = e => {
    console.log("yes");
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  //fileUPloadHandler = () => {
  //  image.post(' ')
  //}

  render() {
    return (
      <div className="profileUserPicDiv">
        <div className="profile-user-pic">
          <label for="profileUserPic" />
          <input type="file" onChange={this.fileChangeHandler} />
          <button onClick={this.fileUploadHandler}>Upload a Photo</button>
        </div>
      </div>
    );
  }
}

export default UserPic;
