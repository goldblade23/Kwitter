import React, { Component } from "react";
import { connect } from "react-redux";

class UserPic extends Component {
  render() {
    return (
      <form>
        <div className="profileUserPicDiv">
          <div className="profile-user-pic">
            {" "}
            <img
              alt=""
              src={this.props.image}
              style={{ maxHeight: "150px", maxWidth: "150px" }}
            />{" "}
          </div>
          <input type="file" name="pic" accept="image/*" />{" "}
          <button>submit</button>
        </div>
      </form>
    );
  }
}

export default connect(
  ({ users, auth }) => ({
    image: users.usersImages[auth.login.id]
  }),
  null
)(UserPic);
