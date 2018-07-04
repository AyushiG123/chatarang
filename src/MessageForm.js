import React, {Component} from 'react'

class MessageForm extends Component{
    state={
       body: '',
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        this.props.addMessage(this.state.body)
    }

handleChange = (ev) => {
    this.setState({body:ev.target.value})
}

    render(){
        return(
            <form className="MessageForm" onSubmit={this.handleSubmit} style={stylesMessageForm.messageForm}>
             <input
               style={stylesMessageForm.input}
               type="text"
               name="body"
               placeholder="Type a message..."
               value = {this.state.body}
               onChange = {this.handleChange}
               autoFocus
               required
               />
            <button  style={stylesMessageForm.button}type="submit">Send</button>
            </form>
        )
    }
}

const stylesMessageForm ={
    messageForm:{
        backgroundColor: 'white',
        height: '3rem',
        display: 'flex',
        alignItems: 'stretch',
        border: '2px solid #999',
        borderRadius: '0.5rem',
        margin: '0.25rem',
        padding: 0,
    },

    input: {
    flex: 1,
    fontSize: '1.2rem',
    border: 0,
    },
      
    button: {
    fontSize: '1.5rem',
    backgroundColor: '#1A8FE3',
    color: 'white',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    borderTopRightRadius: '0.5rem',
    borderBottomRightRadius: '0.5rem',
    border: '1px solid white',
    }
      
}

export default MessageForm