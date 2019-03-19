import React, { Component } from "react";
import { Header } from "semantic-ui-react";

class Title extends Component {
  render() {
    return (
      <div className="kwitterTitle">
        <br/>
        <Header as="h1" color="black" textAlign="center">
          Kwitter
        </Header>
      </div>
    );
  }
}

export default Title;
