import React, { Component } from "react";
import "../App.css";
import Title from "./Title.js";
import LoginPage from "./login/LoginPage.js";
import ProfilePage from "./profile/ProfilePage.js";
import { Route, Switch } from "react-router-dom";
import SignUpForm from "./login/SignUp.js";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Title />
        <Switch>
          <Route exact path="/" render={() => <LoginPage />} />
          <Route exact path="/register" render={() => <SignUpForm />} />
          <Route exact path="/profile" render={() => <ProfilePage />} />
          <Route exact path="/feed" render={() => <p>feed</p>} />
        </Switch>
      </div>
    );
  }
}

export default App;
