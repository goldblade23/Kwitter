import React, { Component } from "react";
import Message from "./message.js"

class FeedPage extends Component {
    render() {
      return (
      <div className="profile-Page">
        <div className="user-column">
            <div className="user-Header">User data</div>
            <div className="userPic"></div>
                <div className="current-user-data">
                    
                    <p>Displayname:(currentuser.displayname)</p>
                    <p>About:(currentuser.bio)</p>
                </div>
        </div>
        
        <div className="feed-column">
            <div className="feed-Header">feed data</div>
            <Message />
            <Message />
            <Message />
        </div>

        <div className="input-column">
            <div className="input-Header">input data</div>
                <div className="Message-input">
                    <textarea rows="15" cols="30" name="message" className="message" />
                    <button className="message-submit">submit</button>
                </div>
        </div>
        
      
      
      </div>
    )}
}

export default FeedPage