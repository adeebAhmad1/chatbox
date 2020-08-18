import React, { Component } from "react";

class Welcome extends Component {
  render() {
    const { name, src, toggleChatbox, toggleState } = this.props;
    return (
      <div className="welcome_popup_wrapper">
        <div className="welcome_popup">
          <div className="minimize_wrapper">
            <div className="minimize" onClick={toggleChatbox}></div>
          </div>
          <h5> {name}, a Deed Agreed representative wants to talk. </h5>
          <div className="img_wrapper">
            <img className="person_img" src={src} alt="Random" />
          </div>
          <h6>Welcome to the site. What are you looking for?</h6>
          <div className="button_wrapper">
            <button onClick={() => toggleState("chat")}>Go to chat</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
