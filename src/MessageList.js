import React from 'react'

import Message from './Message'

const MessageList = () => {
    const messages = [
        {id: 1, userName: 'dstrus', body: 'Chatting up a storm, yo!'},
        {id: 2, userName:'dpalazzo', body:'This guy is so annoying!'}
    ]
    return(
        <div classsname = "MessageList">
         {
             messages.map(msg => (
                 <Message message={msg} key= {msg.id}/>
             ))
         }
        </div>
    )
}

export default MessageList