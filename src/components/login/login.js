import React, { Component } from 'react';


class LoginForm extends Component{
    render() {
        return (
            <div className="login-form">
                <div className="login-section">
                    <h2>LOGIN:</h2>  
                    <div className="login-user-name">
                    <label htmlFor="loginUserName">USERNAME:</label>
                        <input 
                            type="text"  
                            name="loginUserName"/>
                    </div>

                    <div className="login-password">
                    <label htmlFor="loginPassword">PASSWORD:</label>
                        <input 
                        type="password"
                        name="loginPassword"/>
                    </div>
                </div>
                
            </div>
    
        )}

}

export default LoginForm