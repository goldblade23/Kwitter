import React, { Component } from "react";
import UserPic from "./userPic.js";
// import DeleteAccount from "./deleteAccount";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateThenGoToUserProfile as update } from "../../actions/users";
import { Button, Form, Divider, Card, CardComponent, Image } from 'semantic-ui-react'


class ProfilePage extends Component {
  state = { displayName: "", PASSWORD: "", about: "" };

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
      <Link exact to="/feed">
      <Form.Button floated='right'>Return to Feed</Form.Button>
      </Link>
      {/* <Card>
    <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' />
    <Card.Content>
      <Card.Header>{this.props.displayName}</Card.Header>
      <Card.Description>{this.props.about}</Card.Description>
    </Card.Content>
  </Card> */}

        {/* <UserPic/> */}
        <Form onSubmit={this.handleUpdate}>
        <Divider />
          <Form.Field>
            <label>Display Name: {this.props.displayName}</label>
            <label>User Name: {this.props.username}</label>
          </Form.Field>
          <Divider />
          <Form.Field>
          <label>Make Changes to Your Account</label>
            <input
              placeholder='Change Display Name'
              type="text"
              name="displayName"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <input
              placeholder='Change Password'
              type="password"
              name="password"
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.TextArea placeholder='Change Your "About Me" Section And Tell the world who you are...' 
                  rows="4"
                  cols="40"
                  name="about"
                  onChange={this.handleChange} />
          <Form.Button onSubmit={this.handleUpdate}>Submit Changes to Profile</Form.Button>
          </Form>
          </div>
    );
  }
}

export default connect(
  ({ auth, users }) => ({
    loginInfo: auth.login,
    username: users.currentUsername,
    displayName: users.currentDisplayName,
    about: users.currentAbout
  }),
  { update }
)(ProfilePage);
