import React, { Component } from "react";
import Message from "./message.js";
import { connect } from "react-redux";
import {
  user,
  getMessages,
  getUsers,
  updateAfterPosting as postMessage
} from "../../actions";
import { NavLink } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Input,
  Segment
} from "semantic-ui-react";

class FeedPage extends Component {
  state = { text: "" };

  handlePostMessage = e => {
    e.preventDefault();
    this.props.postMessage(this.state);
    this.setState({ text: "" });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  componentDidMount() {
    this.props.user(this.props.loginInfo.id);
    this.props.getMessages();
    this.props.getUsers();
  }

  render() {
    //console.log(this.props.loginInfo.token)
    console.log(this.props.userList);
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
      <div className="profile-Page">
        <div className="user-column">
          <div className="user-Header">User data</div>
          <div className="userPic">
            <img
              alt=""
              src={this.props.userimage}
              style={{ maxHeight: "100px", maxWidth: "100px" }}
            />
          </div>
          <div className="current-user-data">
            <p>Displayname:{this.props.displayName}</p>
            <p>About:{this.props.about}</p>
          </div>
          <NavLink exact to="/profile" activeClassName="selected">
            <button>profile</button>
          </NavLink>
        </div>

        <div className="feed-column">
          <div className="feed-Header">feed data</div>
          {/* <Message />
            <Message />
            <Message /> */}
          {this.props.messageList.map(message => (
            <Message
              displayName={message.displayName}
              image={message.image}
              text={message.text}
              likes={message.likes}
            />
          ))}
        </div>

        <div className="input-column">
          <div className="input-Header">input data</div>
          <form onSubmit={this.handlePostMessage}>
            <div className="Message-input">
              <textarea
                rows="15"
                cols="30"
                name="text"
                className="message"
                required
                value={this.state.text}
                onChange={this.handleChange}
              />
              <button type="submit" className="message-submit">
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
      </Grid>
    );
  }
}

export default connect(
  ({ auth, users, messages }) => ({
    loginInfo: auth.login,
    username: users.currentUsername,
    displayName: users.currentDisplayName,
    about: users.currentAbout,
    userList: users.usersList,
    userimage: users.usersImages[auth.login.id],
    messageList: messages.list.map(message => {
      const user = users.usersList.find(user => user.id === message.userId);
      if (user) {
        return {
          ...message,
          displayName: user.displayName,
          image: users.usersImages[user.id] || users.defaultImage
        };
      } else {
        return message;
      }
    })
  }),
  { user, getMessages, postMessage, getUsers }
)(FeedPage);
