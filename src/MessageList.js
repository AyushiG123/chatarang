import React from 'react'

import Message from './Message'

const MessageList = (props) => {
    return(
        <div classsname = "MessageList" style={stylesMessageList.messageList}>
         {
             props.messages.map(msg => (
                 <Message message={msg} key= {msg.id}/>
             ))
         }
        </div>
    )
}

const stylesMessageList={
    messageList:{
        backgroundColor: 'white',
        flex: 1,
        paddingBottom: '1rem',
        overflowY: 'scroll',
    }
}

export default MessageList