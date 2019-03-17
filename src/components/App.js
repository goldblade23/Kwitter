import React, { Component } from "react";
import "../App.css";
import Title from "./title.js";
import LoginPage from "./login/loginPage.js";
import ProfilePage from "./profile/profilePage.js";
import { Route, Switch } from "react-router-dom";
import SignUpForm from "./login/signUp.js";
import FeedPage from "./feed/feedPage.js"

class App extends Component {
  //   state= {
  //     active:false
  //   }

  //   handleClick = event =>{
  //    this.setState({active: !this.state.active})

  //  }

  render() {
    return (
      <div className="App">
        <Title />
        <Switch>
          <Route exact path="/" render={() => <LoginPage />} />
          <Route exact path="/register" render={() => <SignUpForm />} />
          <Route exact path="/profile" render={() => <ProfilePage />} />
          <Route exact path="/feed" render={() => <FeedPage />} />
        </Switch>
      </div>
    );
  }
}

export default App;
