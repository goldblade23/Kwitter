import React, { Component } from "react";
// import Logout from "./login/logout";
import {  Header, Image } from "semantic-ui-react";
import logo from "../images/kwitterBro2.png"

class Title extends Component {
  render() {
    
    return (
      <div className="kwitterTitle">
      <Header as="h1" size ="extra large" color="black" textAlign="center">
      <Image circular src= {logo} /> Kwitter, Bro
      </Header>
      </div>
    );
  }
}

export default Title;
