import React, { Component } from "react";

class Message extends Component {
    render() {
      return (
          <div className="message-format">
             <div className="message-user-info">
                <div className="message-pic">(pic)</div>
                <div className="message-user">(username)</div>
            </div>   
          <div className="message-output">(message)</div>

            <div className="likes-dislikes">
                <div>likes:0</div>   
                <div>dislikes:0</div>
            </div> 
          </div>
    )}
}




export default Message
