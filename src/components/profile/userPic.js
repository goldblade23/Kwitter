import React, { Component } from "react";

class UserPic extends Component {
  render() {
    return (
      <div className="profileUserPicDiv">
        <div className="profile-user-pic" />
        <input type="file" name="pic" accept="image/*" />
      </div>
    );
  }
}

export default UserPic;
