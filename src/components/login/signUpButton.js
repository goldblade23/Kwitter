import React, { Component } from 'react';

class SignUpButton extends Component{
    render() {
        return (
            <div className="sign-Up-Button">
                <button onClick={this.props.handleClick}>Sign Up</button>
            </div>
    
        )}

}

export default SignUpButton