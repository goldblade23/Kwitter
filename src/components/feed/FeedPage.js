import React, { Component } from "react";
import Message from "./Message.js";
import { connect } from "react-redux";
import {
  user,
  getMessagesAndUserPics as getMessages,
  getUsers,
  updateAfterPosting as postMessage
} from "../../actions";
import { NavLink } from "react-router-dom";
import {
  Button,
  Card,
  Divider,
  Grid,
  Header,
  Image,
  Menu,
  Segment,
  Form
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
      <Grid>
        <Grid.Row>
          <Grid.Column floated="left" width={8}>
            <Card
              color="green"
              as={Menu}
              animation="overlay"
              Icon="labeled"
              Inverted
              vertical
              width="thin"
              fluid
            >
              <Card.Content>
                <Image
                  src={this.props.userimage}
                  className="userPic"
                  style={{ maxHeight: "200px", maxWidth: "200px" }}
                  alt=""
                />
                <Image src={this.props.image} />
                <Segment style={{ padding: "1em 0em" }} inverted color="orange">
                  <Card.Header as="h2" textAlign="center">
                    {this.props.username}
                  </Card.Header>
                </Segment>
                <Card.Description>
                  <Card.Meta as="h2">Display Name:</Card.Meta>
                  {this.props.displayName}
                </Card.Description>
                <Divider />
                <Card.Description>
                  <Card.Meta as="h2">About: </Card.Meta>
                  {this.props.about}
                </Card.Description>
                <Divider />
                <NavLink exact to="/profile" activeClassName="selected">
                  <Button color="blue">Edit Your Information</Button>
                </NavLink>
              </Card.Content>
            </Card>
          </Grid.Column>

          <Grid.Column width={8}>
            <Segment basic>
              <Header as="h1" textAlign="center">
                Type Your Message
              </Header>
              <Form
                onSubmit={this.handlePostMessage}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center"
                }}
              >
                <input
                  type="text"
                  name="text"
                  className="Message-input"
                  required
                  value={this.state.text}
                  onChange={this.handleChange}
                />
                <Button  floated="right" type="submit" className="message-submit" positive>
                  submit
                </Button>
              </Form>
              <Divider />

              <Header as="h1" textAlign="center">
                Your Feed
                {this.props.messageList.map(message => (
                  <Message
                    displayName={message.displayName}
                    image={message.image}
                    text={message.text}
                    likes={message.likes}
                  />
                ))}
              </Header>
            </Segment>
          </Grid.Column>
        </Grid.Row>
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