import React, { Component } from 'react';
// import LoginForm from "./login.js"
// import SignUpButton from './signUpButton.js'
// import LoginButton from './loginSubmitButton.js'
// import SignUpForm from "./signUp.js"

class LoginPage extends Component{
    render() {
        return (
<div classname="login-page"> 
    <LoginForm />
        <div className="buttons">
          <LoginButton />
          <SignUpButton 
            handleClick={this.handleClick}/>
        </div>
        {this.state.active ?
          <SignUpForm />
          :null}
          </div>
    )}
}

export default LoginPage