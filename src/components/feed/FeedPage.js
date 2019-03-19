import React, { Component } from "react";
import Message from "./Message.js"
import { connect } from "react-redux";
import { user } from "../../actions"
import { NavLink} from "react-router-dom";

class FeedPage extends Component {

    componentDidMount() {
        this.props.user(this.props.loginInfo.id)
    }

    render() {
        console.log(this.props.loginInfo.id)
      return (
      <div className="profile-Page">
        <div className="user-column">
            <div className="user-Header">User data</div>
            <div className="userPic"></div>
                <div className="current-user-data">
                    
                    <p>Displayname:{this.props.displayName}</p>
                    <p>About:{this.props.about}</p>
                </div>
                <NavLink exact to ="/profile" activeClassName="selected"><button>profile</button></NavLink>
        </div>
        
        <div className="feed-column">
            <div className="feed-Header">feed data</div>
            <Message />
            <Message />
            <Message />
        </div>

        <div className="input-column">
            <div className="input-Header">input data</div>
                <div className="Message-input">
                    <textarea rows="15" cols="30" name="message" className="message" />
                    <button className="message-submit">submit</button>
                </div>
        </div>
      
      </div>
    )}
}

export default connect(
    ({ auth, users }) => ({
      loginInfo: auth.login,
      username: users.currentUsername,
      displayName: users.currentDisplayName,
      about: users.currentAbout
    }),
    { user }
)(FeedPage);
