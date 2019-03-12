import React, { Component } from 'react';

class SignUpSubmitButton extends Component{
    render() {
        return (
            <div className="sign-Up-Submit-Button">
                <button onClick={this.props.handleClick}>Submit</button>
            </div>
    
        )}

}

export default SignUpSubmitButton