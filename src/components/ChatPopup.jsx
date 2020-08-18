import React, { Component } from 'react'
import Welcome from './Welcome'
import Chat from './Chat'

class ChatPopup extends Component {
  state={
    page: "chat"
  }
  toggleState = (page)=> this.setState({page})
  render () {
    const { page } = this.state
    return (
      <div className="chatpopup">
        { page === "welcome" ? <Welcome {...this.props} toggleState={this.toggleState} /> : page === "chat" ? <Chat toggleChatbox={this.props.toggleChatbox} toggleState={this.toggleState} /> : "" }
      </div>
    )
  }
}

export default ChatPopup