import React, { Component } from 'react';
//---login
import LoginForm from "./login.js"
import SignUpButton from './signUpButton.js'
import LoginButton from './loginSubmitButton.js'
import SignUpForm from "./signUp.js"

import { connect } from "react-redux";



class LoginPage extends Component{
    render() {
        return (
<div className="login-Page">
<React.Fragment>
<LoginForm />
<div className="buttons">
  <LoginButton />
  <SignUpButton />
</div>
{this.props.active
  ?<SignUpForm />:null}
  </React.Fragment>
  </div>
        )}
}

const mapStateToProps = state =>{
  return {
    active: state.active
  }
}

export default connect(mapStateToProps, null)(LoginPage)