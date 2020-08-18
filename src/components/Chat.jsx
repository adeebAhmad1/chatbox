import React, { Component } from "react";

class Chat extends Component {
  render() {
    return (
      <div className="chat">
        <div className="welcome_popup">
          <div className="buttons_wrapper">
          <div className="minimize_wrapper">
            <div className="minimize" onClick={this.props.toggleChatbox}></div>
          </div>
          <div className="buttons">
            <button
              style={{ backgroundColor: `#00000030`, ["--color"]: `#000` }}
              className="button_msgs"
            >
              Turn off popup
            </button>
            <button
              style={{ backgroundColor: `#00800030`, ["--color"]: `#008000` }}
              className="button_msgs"
            >
              End Meeting
            </button>
            <button
              style={{ backgroundColor: `#f00f0030`, ["--color"]: `#f00` }}
              className="button_msgs"
            >
              Audio Call
            </button>
            <button className="switch" style={{backgroundColor: `#aaa`}}></button>
            <button className="switch">
              <svg id="Capa_1" enableBackground="new 0 0 551.13 551.13" height="30" viewBox="0 0 551.13 551.13" width="30" xmlns="http://www.w3.org/2000/svg"><path d="m68.891 275.565c0-102.134 74.738-186.382 172.228-202.94v30.712l68.891-51.668-68.89-51.669v37.235c-116.654 16.805-206.674 117.119-206.674 238.33 0 87.119 46.608 163.375 116.048 205.749l29.947-22.46c-66.186-34.49-111.549-103.631-111.55-183.289z"/><path d="m516.685 275.565c0-87.119-46.608-163.375-116.048-205.749l-29.947 22.46c66.186 34.49 111.549 103.631 111.549 183.289 0 102.162-74.7 186.655-172.228 203.175v-30.949l-68.891 51.668 68.891 51.671v-37.26c116.645-16.807 206.673-117.095 206.674-238.305z"/></svg>
            </button>
          </div>
          </div>
          <div className="chat_wrapper">
            <div className="chat_container">
              <div className="messages">
                <p><b>New User 1232</b>: Hello</p>
                <p><b>Joe McDonald</b>: Hello</p>
                <p><b>New User 1232</b>: text history chat filter</p>
                <p><b>Joe McDonald</b>: text history chat filter</p>
                <p><b>New User 1232</b>: Hello</p>
                <p><b>Joe McDonald</b>: Hello</p>
                <p><b>New User 1232</b>: text history chat filter</p>
                <p><b>Joe McDonald</b>: text history chat filter</p>
                <p><b>New User 1232</b>: Hello</p>
                <p><b>Joe McDonald</b>: Hello</p>
                <p><b>New User 1232</b>: text history chat filter</p>
                <p><b>Joe McDonald</b>: text history chat filter</p>
                <p><b>New User 1232</b>: Hello</p>
                <p><b>Joe McDonald</b>: Hello</p>
                <p><b>New User 1232</b>: text history chat filter</p>
                <p><b>Joe McDonald</b>: text history chat filter</p>
                <p><b>New User 1232</b>: Hello</p>
                <p><b>Joe McDonald</b>: Hello</p>
                <p><b>New User 1232</b>: text history chat filter</p>
                <p><b>Joe McDonald</b>: text history chat filter</p>
                <p><b>New User 1232</b>: Hello</p>
                <p><b>Joe McDonald</b>: Hello</p>
                <p><b>New User 1232</b>: text history chat filter</p>
                <p><b>Joe McDonald</b>: text history chat filter</p>
              </div>
              <form action="/">
                <input type="text" className="send_input" />
                <button className="send_btn">
                <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="20" height="20" x="0px" y="0px"
	 viewBox="0 0 32 32" style={{enableBackground:"new 0 0 32 32"}} xmlSpace="preserve">
<path d="M29.3,2.6c-0.3-0.2-0.7-0.3-1-0.2L3,11.7c-0.4,0.1-0.7,0.5-0.7,0.9c0,0.4,0.3,0.8,0.7,0.9l10.2,3.8l10-10
	c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-9.8,9.8l6.6,10.6c0.2,0.3,0.5,0.5,0.8,0.5c0.1,0,0.1,0,0.2,0c0.4-0.1,0.7-0.4,0.8-0.7l6.2-25.2
	C29.7,3.3,29.6,2.9,29.3,2.6z"/>
</svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
