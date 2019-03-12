import React, { Component } from 'react';
import '../App.css';
import LoginForm from "./login.js"
import Title from "./title.js"

class App extends Component {
  render() {
    return (
      <div className="App">
      <Title />
       <LoginForm />
      </div>
    );
  }
}

export default App;
