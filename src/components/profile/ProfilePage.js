import React, { Component } from "react";
import UserPic from "./UserPic.js";
// import DeleteAccount from "./deleteAccount";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateThenGoToUserProfile as update } from "../../actions/users";
import {
  Form,
  Card,
} from "semantic-ui-react";
import DeleteAccount from "../DeleteAccount";

class ProfilePage extends Component {
  state = { displayName: this.props.displayName, PASSWORD: "", about: this.props.about };

  handleUpdate = e => {
    e.preventDefault();
    this.props.update({ state: this.state, loginInfo: this.props.loginInfo });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="profile-page">
         <Link to="/feed">
      </Link> 
        <UserPic />
        <Form onSubmit={this.handleUpdate}>
          <Card>
            <Card.Header>Display Name: {this.props.displayName}</Card.Header>
            <Card.Content>User Name: {this.props.username}</Card.Content>
            <Card.Description>About You: {this.props.about}</Card.Description>
          </Card>
          <Form.Field>
            <label>Make Changes to Your Account</label>
            <input
              placeholder="Change Display Name"
              type="text"
              defaultValue={this.props.displayName}
              name="displayName"
              onChange={this.handleChange}
              
            />
          </Form.Field>
          <Form.Field>
            <input
              placeholder="Change Password"
              type="password"
              defaultValue={this.props.passwordValue}
              name="password"
              onChange={this.handleChange}
              
            />
          </Form.Field>
          <Form.TextArea
            placeholder='Change Your "About Me" Section And Tell the World Who You Are...'
            type="text"
            defaultValue={this.props.about}
            name="about"
            onChange={this.handleChange}
            
          />
          <Form.Button color="blue" onSubmit={this.handleUpdate}>
            Submit Changes to Profile
          </Form.Button>
        </Form>
        <DeleteAccount />
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
    passwordValue:users.currentPassword
    
  }),
  { update }
)(ProfilePage);
