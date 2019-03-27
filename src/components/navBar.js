import React, { Component } from "react";
import Logout from "./login/logout";
import { Container, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  state = { activeItem: "" };

  handleItemClick = (event, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Container>
        <Menu color="yellow" inverted>
          <Menu.Item header inverted>
            Kwitter
          </Menu.Item>
          <Menu.Item
            as={Link}
            name="feed"
            active={activeItem === "feed"}
            onClick={this.handleItemClick}
            exact
            to="/feed"
          />
          <Menu.Item
            name="profile"
            as={Link}
            active={activeItem === "profile"}
            onClick={this.handleItemClick}
            exact
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
