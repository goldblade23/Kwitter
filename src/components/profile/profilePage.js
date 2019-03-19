import React, { Component } from "react";
import UserPic from "./userPic.js";
// import { user } from "../../actions"
import { connect } from "react-redux";

// import DeleteAccount from "./deleteAccount";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import { connect } from "react-redux";
  class ProfilePage extends Component {

    state = {
      active: false,
      changeCurrentPassword: false,
      passwordValue: "",
      displayName: "",
      about: ""

    }

    addNewPassword = (e) => {
      if (e.key === "Enter" && this.state.value !== "") {
        console.log(this.state.value)
        this.props.addNewPassword(this.state.value)
        e.target.value = ""
      }
    }
    handleInputChange = (e) => {
      this.setState({ value: e.target.value });
    };
  render() {
    // const {isLoading} = this.props;
    return (

          <Router>
            <div className="profile-page">
              <UserPic />
              <form>
                <div className="profile-display-Name">
                  <label htmlFor="displayName">DISPLAYNAME:</label>
                  <input type="text" name="displayName" placeholder="(login.displayname)" />
                </div>
    
                <div className="profile-user-info-div">
                  <div className="profile-username">
                    <label htmlFor="username">USERNAME:</label>
                    <input
                      type="text" name="username"
                      placeholder />
                  </div>
                  <div className="current-password-div">
                    <label for="currentPasswordSetting">PASSWORD:</label>
                    <input
                      type="text"
                      placeholder="......"
                      name="username" />
                    <NavLink exact to='/' activeClassName='selected'>Change Current Password</NavLink>
                  </div>
                </div>
                <div className="profile-user-bio-div">
                  <div className="profile-bio">
                    <label>
                      About me:
                     <textarea rows="4" cols="40" name="about" />
                    </label>
                  </div>
                </div>
                <div className="delete-account-button">
                  <button to="/warning">Delete Account</button> 
                </div>
                <div className="profile-return-to-feed">
                  <button type="submit" disabled={isLoading} to="/feed">
                    Back to My Feed
            </button>
    
                </div>
                <div className="profile-Submit-Button">
                  <button>Submit Changes</button>
                </div>
              </form>
            </div>
          </Router>
        );
      }
    }
    
    class UserPic extends Component {
      state = {
        active: false,
        selectedFile: null
      }
      fileSelectedHandler = e => {
        console.log("yes")
        this.setState({
          selectedFile: e.target.files[0]
        })
      }
    
      //fileUPloadHandler = () => {
      //  image.post(' ')
      //}
    
      render() {
        return (
          <div className="profileUserPicDiv">
            <div className="profile-user-pic">
              <label for="profileUserPic"></label>
              <input type="file" onChange={this.fileChangeHandler} />
              <button onClick={this.fileUploadHandler}>Upload a Photo</button>
              
            </div>
          </div>
        )
      }
    }
    
    
    const mapStateToProps = state => {
      return {
        active: state.active
      }
    }
    export default connect(mapStateToProps, null)(ProfilePage)