import React, { Component } from 'react';
import SignUpForm from "./signUp.js"
import { connect } from "react-redux";
import { loginThenGoToUserProfile as login } from "../../actions/auth"
import Spinner from "react-spinkit";

class LoginPage extends Component{
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
         <div className="login-page" >
          <div className="login-form">
            <form onSubmit={this.handleLogin}>
                <div className="login-section">
                    <h2>LOGIN:</h2>  
                    <div className="login-user-name">
                    <label htmlFor="username">USERNAME:</label>
                        <input 
                            type="text"  
                            name="username"
                            autoFocus
                            required
                            onChange={this.handleChange}
                            />
                            
                    </div>

                    <div className="login-password">
                    <label htmlFor="password">PASSWORD:</label>
                        <input 
                        type="password"
                        name="password"
                        required
                        onChange={this.handleChange}/>
                    </div>
                    <div className="login-button">
                <button type="submit" disabled={isLoading}>Login</button>
            </div>
                </div>
            </form>
            {isLoading && <Spinner name="circle" color="blue" />}
            {err && <p style={{ color: "red" }}>{err}</p>}


            {/* <div className="sign-Up-Button">
                <button onClick={()=>this.props.signUpOpenForm()}>Sign Up</button>
            </div> */}
            
 <SignUpForm />
  
  
            </div>
</div>
        )} 
}



export default connect(
    ({ auth }) => ({
      isLoading: auth.loginLoading,
      err: auth.loginError
    }),
    { login }
  )(LoginPage)