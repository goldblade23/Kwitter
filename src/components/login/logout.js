
import React, { Component } from "react";
import { logoutThenGoToLogin as logout } from "../../actions/auth";
import { connect } from "react-redux";
import { Button, Dimmer, Divider, Header, Icon, Menu } from "semantic-ui-react";

class Logout extends Component {
  state = {};

  handleLogout = event => {
    this.props.logout();
    this.setState({ active: false });
  };

  handleOpen = () => this.setState({ active: true });

  render() {
    const { active } = this.state;
    return (
      <Menu.Menu position="right">
        <Menu.Item name="logout" onClick={this.handleOpen} />
        <Dimmer active={active} page>
          <Header icon inverted>
            <Icon name="heart" />
            <Menu.Item>
              Thanks for visiting KWITTER! I hope we never see you again!
            </Menu.Item>
            <Divider />
            <Button
              name="logout"
              onClick={this.handleLogout}
              size="massive"
              color="red"
            >
              Goodbye Forever...
            </Button>
          </Header>
        </Dimmer>
      </Menu.Menu>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.logoutLoading,
    err: auth.loginError
  }),
  { logout }
)(Logout);