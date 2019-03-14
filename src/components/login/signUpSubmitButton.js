import React, { Component } from 'react';

class SignUpSubmitButton extends Component{
    render() {
        return (
            <div className="sign-up-submit-button">
                <button onClick={this.props.handleClick}>Submit</button>
            </div>
    
        )}

}

export default SignUpSubmitButton