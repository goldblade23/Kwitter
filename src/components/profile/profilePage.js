import React, { Component } from "react";
import UserPic from "./UserPic.js";
import DeleteAccount from "./DeleteAccount";
import { NavLink} from "react-router-dom";
import { user } from "../../actions"
import { connect } from "react-redux";

class ProfilePage extends Component {
  state = { displayName: "", about: "" }

  render() {
    const {isLoading} = this.props;
    return (
      <div className="profile-page">
        <UserPic />
        <form>
          
          <div className="profile-user-info-div">
            <div className="profile-username">
              <label htmlFor="username">USERNAME:{this.props.username}</label>
              </div>
            </div>

            <div className="profile-display-Name">
              <label htmlFor="displayName">DISPLAYNAME:</label>
              <input type="text" name="displayName"/>
            </div>

            
            <div className="profile-user-bio-div">
              <div className="profile-bio">
                <label>
                  About me:
                 <textarea rows="4" cols="40" name="about" />
                </label>
              </div>
            </div>


          <div className="profile-Submit-Button">
            <button>Submit</button>
          </div>

        </form>
        <DeleteAccount />
        <NavLink exact to ="/" activeClassName="selected"><button>Feed</button></NavLink>
      </div>
    );
  }
}

{/* class UserPic extends Component {
  state = {
    active: false,
    selectedFile: null
  }
  fileSelectedHandler = e => {
    console.log("yes")
    this.setState({
      selectedFile: e.target.files[0]
    })
  } */}

  //fileUPloadHandler = () => {
  //  image.post(' ')
  //}

//   render() {
//     return (
//       <div className="profileUserPicDiv">
//         <div className="profile-user-pic">
//           <label for="profileUserPic"></label>
//           <input type="file" onChange={this.fileChangeHandler} />
//           <button onClick={this.fileUploadHandler}>Upload a Photo</button>
          
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     active: state.active
//   }
// }
export default connect(
  ({ /*auth,*/ users }) => ({
    //loginInfo: auth.login,
    username: users.currentUsername,
    displayName: users.currentDisplayName,
    about: users.currentAbout
  }),
  { user }
)(ProfilePage);
