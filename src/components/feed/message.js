import React, { Component } from "react";

class Message extends Component {
  render() {
    return (
      <div className="message-format">
        <div className="message-user-info">
          <div className="message-pic">
            <img
              alt=""
              src={this.props.image}
              style={{ maxHeight: "40px", maxWidth: "40px" }}
            />
          </div>
          <div className="message-user">{this.props.displayName}</div>
        </div>
        <div className="message-output">{this.props.text}</div>

        <div className="likes-dislikes">
          <div>likes:{this.props.likes.length}</div>
        </div>
      </div>
    );
  }
}

export default Message;
