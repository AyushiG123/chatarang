import React from 'react'

const ChatHeader = () =>{
        return(
            <header className = "ChatHeader" style={stylesChatHeader.chatHeader}>
             <div className = "roomInfo">
             <h2 style={stylesChatHeader.h2}>#general</h2>
             <p style={stylesChatHeader.p}>Announcements and general chat</p>             
             </div>
            </header>
        )
}

const stylesChatHeader={
    chatHeader: {
        backgroundColor: '#f3f3f3',
        borderBottom: '1px solid #ccc',
        height: '3rem',
        padding: '0 1rem',
        display: 'flex',
        alignItems: 'center',
      },
      
      h2: {
        fontSize: '1.1rem',
        margin: 0,
      },
      
      p: {
        color: '#999',
        margin: 0,
        fontSize: '0.8rem;',
      }
      
}

export default ChatHeader