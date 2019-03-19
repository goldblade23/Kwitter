import React, { Component } from "react";
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../../actions/auth";
import Spinner from "react-spinkit";
import { Link } from "react-router-dom";
import { Button, Form, Grid, Image, Input, Segment } from "semantic-ui-react";
import logo from "../../logo.svg";

class LoginPage extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 400 }}>
          <Image src={logo} size="large" centered />
          <div className="login-page">
            <Form onSubmit={this.handleLogin} size="large">
              <Segment stacked color="grey">
                <h2>LOGIN:</h2>
                <div className="login-user-name">
                  <Form.Field
                    name="username"
                    label="Username:"
                    required
                    placeholder="Username"
                    type="text"
                    control={Input}
                    autoFocus
                    onChange={this.handleChange}
                  />
                </div>
                <div className="login-password">
                  <Form.Field
                    name="password"
                    label="Password:"
                    required
                    placeholder="Password"
                    type="password"
                    control={Input}
                    onChange={this.handleChange}
                  />
                </div>
                <Button.Group>
                  <br />
                  <Button
                    className="login-button"
                    type="submit"
                    disabled={isLoading}
                    positive
                    size="large"
                    to="/profile"
                  >
                    Login
                  </Button>
                  <Button.Or />
                  <Link exact to="/register">
                    <Button className="signup-button" size="large" color="blue">
                      Register Now!
                    </Button>
                  </Link>
                </Button.Group>
              </Segment>
            </Form>
            {isLoading && <Spinner name="circle" color="blue" />}
            {err && <p style={{ color: "red" }}>{err}</p>}
          </div>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.loginLoading,
    err: auth.loginError
  }),
  { login }
)(LoginPage);