import React, { Component } from 'react';
import SignUpSubmitButton from "./signUpSubmitButton.js"

class SignUpForm extends Component{
    render() {
        return (
            
            <div className="sign-up-form">
              <h2>Sign Up:</h2> 
              <div className="signup-user-name">
                   <label htmlFor="signUpUserName">USERNAME:</label>
                    <input 
                        type="text"  
                        name="signUpUserName"/>
                </div>

                <div className="sign-up-password">
                <label htmlFor="signUpPassword">PASSWORD:</label>
                    <input 
                    type="password"
                    name="signUpPassword"/>
                </div>

                <div className="sign-up-confirm-cassword">
                <label htmlFor="signUpConfirmPassword">CONFIRM PASSWORD:</label>
                    <input 
                    type="password"
                    name="signUpConfirmPassword"/>
                </div>
                <SignUpSubmitButton />
            </div>
    
        )}

}

export default SignUpForm