import React, { Component } from "react";
import { connect } from "react-redux";
import { registerThenGoToUserProfile as register } from "../../actions/auth";
import { Link} from "react-router-dom";

class SignUpForm extends Component {
  state = { username: "", password: "", displayName:"" };

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
      <div className="sign-up-form">
        <form onSubmit={this.handleRegister}>
          <h2>Sign Up:</h2>
          <div className="signup-user-name">
            <label htmlFor="username">USERNAME:</label>
            <input
              type="text"
              name="username"
              required
              onChange={this.handleChange}
            />
          </div>
   
   <div className="displayName">
            <label htmlFor="displayName">DISPLAYNAME:</label>
            <input
              type="text"
              name="displayName"
              required
              onChange={this.handleChange}
            />
          </div>
          
          <div className="sign-up-password">
            <label htmlFor="password">PASSWORD:</label>
            <input
              type="password"
              name="password"
              required
              onChange={this.handleChange}
            />
          </div>

          <div className="sign-up-displayName">
            <label htmlFor="displayName">DISPLAYNAME:</label>
            <input type="text" name="displayName" required 
              onChange={this.handleChange}/>
          </div>
          <div className="sign-up-submit-button">
            <button type="submit" disabled={isLoading}>
              Submit
            </button>
          </div>
          <Link exact to ="/" ><button>Login</button></Link>
        </form>
        
      </div>
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
