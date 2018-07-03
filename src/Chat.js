import React, {Component} from 'react'

import ChatHeader from './ChatHeader'
import MessageList from './MessageList'
import MessageForm from './MessageForm'

class Chat extends Component{
    constructor(){
        super()
        
        this.state={
            messages:[
                      {id: 1, userName: 'dstrus', body: 'Chatting up a storm, yo!'},
                      {id: 2, userName:'dpalazzo', body:'This guy is so annoying!'}
                   ]
            }
    }

    addMessage = (body) => {
        const messages = [...this.state.messages]
        const userName = 'daniel'

        messages.push({
            id: `${userName}-${Date.now()}`,
            userName,
            body,
        })

        this.setState({messages:messages})
    }

    render(){
        return(
            <div className = "Chat">
            <ChatHeader />
            <MessageList messages={this.state.messages}/>
            <MessageForm addMessage={this.addMessage}/>
            </div>
        )
    }
}
export default Chat