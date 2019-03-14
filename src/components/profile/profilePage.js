import React, { Component } from 'react';
import { connect } from "react-redux";


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


class AccountInfo extends Component {
  render() {
    return (

      <div className="profile-user-info-div">
        <h2>Profile:</h2>
        <div className="profile-user-info">
          <label for="profileUserName">USERNAME:</label>
          <input
            type="text"
            name="profileUserName" />
        </div>
        <div className="email-address">
          <label for="emailAddress">EMAIL ADDRESS:</label>
          <input
            type="email"
            name="emailAddress" />
        </div>
        <div className="current-password">
          <label for="currentPassword">PASSWORD:</label>
          <input
            type="password"
            name="currentPassword" />
        </div>

        <div className="change-current-password">
          <label for="changeCurrentPassword">CHANGE CURRENT PASSWORD:</label>
          <input
            type="password"
            name="changeCurrentPassword" />
        </div>
        <div className="profile-user-bio-div">
          <div className="profile-bio">
            <label for="profileBio">About Me:</label>
            <input
              type="text"
              name="profileBio" />
          </div>
        </div>
      </div>
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
      <div className="profileUserPicDiv">
        <div className="profile-user-pic">
          <label for="profileUserPic"></label>
          <button onClick={this.fileUploadHandler}>Upload a Photo</button>
          <input type="file" onChange={} />
        </div>
      </div>
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

export default connect(mapStateToProps, null)(ProfilePage)