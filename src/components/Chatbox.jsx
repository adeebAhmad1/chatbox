import React, { Component } from 'react'
import ChatPopup from './ChatPopup'
import Icon from './Icon'

class Chatbox extends Component {
  state={
    showChat: true
  }
  toggleChatbox = ()=>this.setState({showChat: !this.state.showChat});
  render () {
    return (
      <div className="chatbox">
        {
          this.state.showChat ? 
          <ChatPopup toggleChatbox={this.toggleChatbox} name="John McDonald" src="https://avatars3.githubusercontent.com/u/1071625?s=460&u=f19e921ec34fc145d2b0b05f6cdd3472240c885b&v=4" /> :
          <Icon toggleChatbox={this.toggleChatbox} />
        }
      </div>
    )
  }
}

export default Chatbox