import React, { Component } from 'react';
import { connect } from "react-redux";
// import { toggleTodo, deleteTodo } from './actions';
import { BrowserRouter as Router,  NavLink } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
class ProfilePage extends Component {
   
  render() {
    return (
      <div className="profile-page">
        <React.Fragment>
          <Form />
          <div className="Buttons">
            <ReturnToFeedButton />
            <UserInfo />
            <UserPic />
            <SubmitChangesButton />
            <DeleteAccountButton />

          </div>
          {this.props.active
            ? <ProfilePage /> : null}
        </React.Fragment>
      </div>
    )
  }
}


class AccountSettings extends Component {

  state = {
    active: false,
    changeCurrentEmail: false,
    emailValue: "",
    changeCurrentPassword: false,
    passwordValue: ""
  }

  addNewPassword = (e) => {
    if (e.key === "Enter" && this.state.value !== "") {
      console.log(this.state.value)
      this.props.addNewPassword(this.state.value)
      e.target.value = ""
    }
  }
  addNewEmail = (e) => {
    if (e.key === "Enter" && this.state.value !== "") {
      console.log(this.state.value)
      this.props.addNewEmail(this.state.value)
      e.target.value = ""
    }
  }

  handleInputChange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (

      <Router>
      <input
  className="new-todo"
  placeholder="What needs to be done?"
  autoFocus
  onChange={this.handleInputChange}
  onKeyDown={this.addTodo}
/>
        <div className="profile-account-settings-div">
          <h2>About You</h2>
          //Username//
          <div className="username-div">
            <label for="userNameSetting">USERNAME:</label>
          //{this.props.username.value}Code to display stored username object -- no changes to username needed //
          </div>
          //Email Address//
          <div className="email-address-div">
            <label for="emailAddressSetting">EMAIL ADDRESS:</label>
          //{this.props.email.value}Code to display stored email address object//
          </div>
          <div className="change-email-address-div">
            <label for="changeEmailAddressSetting">EMAIL ADDRESS:</label>
            <input
  className="change-email-address"
  placeholder="Enter a new email address"
  autoFocus
  onChange={this.handleInputChange}
  onKeyDown={this.addNewEmail}
/>
            <ul className="email-address-change-link">
              <li>
                <NavLink exact to='/' activeClassName='selected'>Change Email Address</NavLink>
              </li>
            </ul>
          </div>
          //Password//
          <div className="current-password-div">
            <label for="currentPasswordSetting">PASSWORD:</label>
          //{this.props.currentPassword.value}Code to display stored current password object//
          </div>
          <div className="change-current-password-div">
            <label for="changeCurrentPasswordSetting">CHANGE CURRENT PASSWORD:</label>
            <ul className="current-password-change-link">
              <li>
                <NavLink exact to='/' activeClassName='selected'>Change Current Password</NavLink>
              </li>
            </ul>
          </div>
          <div className="bio-div">
            <label for="bioSetting">About Me:</label>
            <textarea
              type="text"
              name="profileBio" />
          </div>
        </div >
      </Router>
    )
  }
}

class UserPic extends Component {
  state = {
    selectedFile: null
  }
  fileSelectedHandler = e => {
    console.log(event.target.files[0])
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  fileUPloadHandler = () => {
    image.post(' ')
  }

  render() {

    return (
      <Router>
        <div className="user-picture-div">
          <label for="userPictureSetting"></label>
          //Code to display current picture object//
        </div>
        <div className="change-user-picture-div">
          <button onClick={this.fileUploadHandler}>Change My Profile Picture</button>
          <input type="file" onChange={} />
        </div>
      </Router>
    )
  }
}

class SubmitChangesButton extends Component {
  render() {
    return (
      <div className="profile-submit-changes">
        <button onClick={() => this.props.ProfilePage()}>Submit Changes</button>

      </div>

    )
  }
}

class ReturnToFeedButton extends Component {
  render() {
    return (

      <div className="profile-return-to-feed">
        <button onClick={() => this.props.ProfilePage()}>Go Back to My Feed</button>
      </div>

    )
  }

}
// class DeleteAccount extends Component {
//   render() {
//     return (
//       <div className="profile-delete-account">
//         <label for="profileDeleteAccount"></label>
//         <button onClick={this.deleteAccountHandler}>Delete Your Account</button>
//         <input type="file" onChange={} />
//       </div>
//     )
//   }
// }

const mapStateToProps = state => {
  return {
    active: state.active
  }
}

// const mapDispatchToProps = {
  
// }

export default connect(mapStateToProps, null)(ProfilePage)