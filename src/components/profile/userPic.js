import React, { Component } from "react";
import { connect } from "react-redux";

class UserPic extends Component {
  render() {
    return (
      <div className="profileUserPicDiv">
        <div className="profile-user-pic"> <img src={this.props.image} style={{maxHeight:"200px",maxWidth:"200px"}}/> </div>
        <input type="file" name="pic" accept="image/*" />
      </div>
    );
  }
}

export default connect(
  ({ users, auth }) => ({
    image:users.usersImages[auth.login.id]
  }),
  null
)(UserPic);
