import React, { Component } from 'react';
import '../App.css';
import Title from "./title.js"
import LoginForm from "./login/login.js"
import SignUpButton from './login/signUpButton.js'
import LoginButton from './login/loginSubmitButton.js'
import SignUpForm from "./login/signUp.js"

import { Route, Switch} from "react-router-dom";

class App extends Component {
  state= {
    active:false
  }

  handleClick = event =>{
   this.setState({active: !this.state.active})
   
 }

  
  render() {
    return (
      <div className="App">

      <Title />
      <Switch>
       
    <Route exact path="/" render={() =>
      <p>hello</p>
      } />

  <Route exact path="/login" render={() =>
       <React.Fragment>
       <LoginForm />
       <div className="buttons">
         <LoginButton />
         <SignUpButton 
           handleClick={this.handleClick}/>
       </div>
       {this.state.active ?
         <SignUpForm />
         :null}
         </React.Fragment>
      } />    

<Route exact path="/profile" render={() =>
  <p>profile</p>
} /> 

<Route exact path="/feed" render={() =>
          <p>feed</p>
        } /> 
          </Switch>
      </div>
    );
  }
}

export default App;
