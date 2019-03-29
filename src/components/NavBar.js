import React, { Component } from "react";
import Logout from "./login/Logout.js";
import { Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = { activeItem: 'feed'};

  handleItemClick = (event, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu style={{backgroundColor:"yellow"}}  pointing>
          <Menu.Item header inverted="true">
            Kwitter
          </Menu.Item>
          <Menu.Item
            as={Link}
            name="feed"
            active={activeItem === "feed"}
            onClick={this.handleItemClick}
            to="/feed"
          />
          <Menu.Item
            name="profile"
            as={Link}
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
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

export default NavBar;
