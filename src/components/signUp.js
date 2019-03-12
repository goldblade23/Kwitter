import React, { Component } from 'react';
import SignUpSubmitButton from "./signUpSubmitButton.js"

class SignUpForm extends Component{
    render() {
        return (
            
            <div className="sign-Up-Form">
              <h2>Sign Up:</h2> 
              <div className="signup-User-name">
                   <label for="signUpUserName">USERNAME:</label>
                    <input 
                        type="text"  
                        name="signUpUserName"/>
                </div>

                <div className="Sign-Up-Password">
                <label for="SignUpPassword">PASSWORD:</label>
                    <input 
                    type="password"
                    name="SignUpPassword"/>
                </div>

                <div className="Sign-Up-Confirm-Password">
                <label for="SignUpConfirmPassword">CONFIRM PASSWORD:</label>
                    <input 
                    type="password"
                    name="SignUpConfirmPassword"/>
                </div>
                <SignUpSubmitButton />
            </div>
    
        )}

}

export default SignUpForm