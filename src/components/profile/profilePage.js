import React, { Component } from "react";
import UserPic from "./userPic.js";
import DeleteAccount from "./deleteAccount";
import { NavLink} from "react-router-dom";
//import { user } from "../../actions"
import { connect } from "react-redux";
//import { userUpdate} from "../../actions/users";
import { updateThenGoToUserProfile as update } from "../../actions/users";

class ProfilePage extends Component {
  state = { displayName: "", PASSWORD:"", about: "" }

  handleUpdate = e => {
    e.preventDefault();
    this.props.update({ state: this.state, loginInfo: this.props.loginInfo })
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {isLoading} = this.props;
    return (
      <div className="profile-page">
        <UserPic />
        <form onSubmit={this.handleUpdate}>
          
          <div className="profile-user-info-div">
            <div className="profile-username">
              <label htmlFor="username">USERNAME:{this.props.username}</label>
              </div>
            </div>

            <div className="profile-display-Name">
              <label htmlFor="displayName">DISPLAYNAME CHANGE:</label>
              <input type="text" name="displayName" required
                  onChange={this.handleChange}/>
            </div>

            <div className="profile-password">
              <label htmlFor="password">PASSWORD CHANGE:</label>
              <input type="password" name="password" required
                  onChange={this.handleChange}/>
            </div>
            
            <div className="profile-user-bio-div">
              <div className="profile-bio">
                <label>
                  About me:
                 <textarea rows="4" cols="40" name="about" required
                  onChange={this.handleChange}/>
                </label>
              </div>
            </div>


          <div className="profile-Submit-Button">
            <button type="submit" disabled={isLoading}>Submit</button>
          </div>

        </form>
        <DeleteAccount />
        <NavLink exact to ="/feed" activeClassName="selected"><button>Feed</button></NavLink>
      </div>
    );
  }
}

export default connect(
  ({ auth, users }) => ({
    loginInfo: auth.login,
    username: users.currentUsername,
    displayName: users.currentDisplayName,
    about: users.currentAbout,
  }),
  { update }
)(ProfilePage);
