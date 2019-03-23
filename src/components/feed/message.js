import React, { Component } from "react";
import { Divider, Card, Image } from "semantic-ui-react";

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
          {/* <div className="message-format">
            <div className="message-user-info">
              <div className="message-pic"> */}
                <Image
                  alt=""
                  src={this.props.image}
                  style={{ maxHeight: "40px", maxWidth: "40px" }}
                />
              {/* </div> */}
              <Card.Description >
                <Card.Meta>{this.props.displayName}</Card.Meta>
              </Card.Description>
              <Card.Description className="message-output">
                <Card.Meta>{this.props.text}</Card.Meta>
              </Card.Description>
              <Card.Description className="likes-dislikes">
                <Card.Meta>likes:{this.props.likes.length}</Card.Meta>
              </Card.Description>
            {/* </div>
          </div> */}
        </Card.Content>
      </Card>
    );
  }
}

export default Message;
