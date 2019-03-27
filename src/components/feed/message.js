import React, { Component } from "react";
import { Card, Image } from "semantic-ui-react";

class Message extends Component {
  render() {
    return (
      <Card
        color="green"
        animation="overlay"
        Icon="labeled"
        Inverted
        vertical
        width="thin"
        fluid
      >
        <Card.Content>
                <Image
                  alt=""
                  src={this.props.image}
                  style={{ maxHeight: "40px", maxWidth: "40px" }}
                />
              <Card.Description >
                <Card.Meta>{this.props.displayName}</Card.Meta>
              </Card.Description>
              <Card.Description className="message-output">
                <Card.Meta>{this.props.text} bro!</Card.Meta>
              </Card.Description>
              <Card.Description className="likes-dislikes">
                <Card.Meta>likes:{this.props.likes.length}</Card.Meta>
              </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default Message;
