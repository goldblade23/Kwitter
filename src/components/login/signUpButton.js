import React, { Component } from 'react';
import {signUpOpenForm} from "../../actions/actions.js"
import { connect } from "react-redux";

class SignUpButton extends Component{
    render() {
        return (

            <div className="sign-Up-Button">
                <button onClick={()=>this.props.signUpOpenForm()}>Sign Up</button>

            </div>
    
        )}

}

const mapDispatchToProps ={
    signUpOpenForm
  }
  
    export default connect(
      null,
      mapDispatchToProps
    )(SignUpButton)