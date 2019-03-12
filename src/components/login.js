import React, { Component } from 'react';
import SignUpButton from './signUpButton.js'
import LoginButton from './loginSubmitButton.js'
import SignUpForm from "./signUp.js"

class LoginForm extends Component{
    render() {
        return (
            <div className="login-Form">
                <div className="login-Section">
                    <h2>LOGIN:</h2>  
                    <div className="Login-User-name">
                    <label for="LoginUserName">USERNAME:</label>
                        <input 
                            type="text"  
                            name="LoginUserName"/>
                    </div>

                    <div className="Login-Password">
                    <label for="LoginPassword">PASSWORD:</label>
                        <input 
                        type="password"
                        name="LoginPassword"/>
                    </div>
                </div>
                <div className="buttons">
                <LoginButton />
                <SignUpButton />
                </div>
                <SignUpForm />
            </div>
    
        )}

}

export default LoginForm