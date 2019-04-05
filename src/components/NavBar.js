import React, { Component } from "react";
import Logout from "./login/Logout.js";
import { Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class NavBar extends Component {

  render() {
    return (
      <Container>
        <Menu style={{backgroundColor:"yellow"}}  pointing>
          <Menu.Item header inverted="true">
            Kwitter
          </Menu.Item>
          <Menu.Item
            as={Link}
            name="feed"
            active={this.props.path==="/feed"}
            to="/feed"
          />
          <Menu.Item
            name="profile"
            as={Link}
            active={this.props.path==="/profile"}
            to="/profile"
          />
          <Menu.Menu position="right">
            <Logout />
          </Menu.Menu>
        </Menu>
        <div />
      </Container>
    );
  }
}

// export default NavBar;

export default connect(
  ({ router }) => ({
    path: router.location.pathname
  }),
  null
)(NavBar);
