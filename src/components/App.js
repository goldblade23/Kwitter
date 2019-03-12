import React, { Component } from 'react';
import '../App.css';

import LoginForm from "./login.js"
import SignUpButton from './signUpButton.js'
import LoginButton from './loginSubmitButton.js'
import SignUpForm from "./signUp.js"
import Title from "./title.js"





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
      //isToggleOn: true
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
   this.setState(state => ({
     active: !state.active
   }));
 }

  
  render() {
    return (
      <div className="App">

      <Title />
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
    );
  }
}

export default App;
