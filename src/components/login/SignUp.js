import React, { Component } from "react";
import { connect } from "react-redux";
import { registerThenGoToUserProfile as register } from "../../actions/auth";
import { Link } from "react-router-dom";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Input,
  Segment
} from "semantic-ui-react";
import logo from "../../logo.svg";

class SignUpForm extends Component {
  state = { username: "", password: "", displayName: "" };

  handleRegister = e => {
    e.preventDefault();
    this.props.register(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading } = this.props;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100%" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Image src={logo} size="small" centered />
          <Segment stacked color="grey">
            <Header as="h2" color="grey" textAlign="center">
              Sign Up:
            </Header>
            <Form size="large" onSubmit={this.handleRegister}>
              <div className="signup-user-name">
                <Form.Field
                  label="Username:"
                  required
                  placeholder="Username"
                  type="text"
                  control={Input}
                  autoFocus
                  onChange={this.handleChange}
                  name="username"
                />
              </div>
              <div className="signup-display-name">
                <Form.Field
                  label="Display Name:"
                  required
                  placeholder="Display Name"
                  type="text"
                  control={Input}
                  onChange={this.handleChange}
                  name="displayName"
                />
              </div>
              <div className="sign-up-password">
                <Form.Field
                  label="Password:"
                  required
                  placeholder="Password"
                  type="password"
                  control={Input}
                  onChange={this.handleChange}
                  name="password"
                />
              </div>
              <br />
              <Button.Group>
                <div className="sign-up-submit-button">
                  <Button
                    positive
                    size="large"
                    onClick={this.handleRegister}
                    type="submit"
                    disabled={isLoading}
                  >
                    Register Now
                  </Button>
                </div>
                <Button.Or />
                <Link exact to="/">
                  <Button size="large" color="brown">
                    Login Here
                  </Button>
                </Link>
              </Button.Group>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  ({ auth }) => ({
    isLoading: auth.registerLoading,
    err: auth.registerError
  }),
  { register }
)(SignUpForm);
