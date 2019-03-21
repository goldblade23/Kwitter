import React, { Component } from "react";
import Logout from "./login/logout";
import { Button, Grid, Header, Image, Input, Segment } from "semantic-ui-react";

class Title extends Component {
  render() {
    return (
      <div className="kwitterTittle">
        <Header as="h2" size="extra large">
          Kwitter
        </Header>
      </div>
    );
  }
}

export default Title;
