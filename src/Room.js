import React, {Component} from 'react'
import { StyleSheet, css } from 'aphrodite'

class Room extends Component{
  constructor(props){
    super(props)
    this.state=""
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
       e.preventDefault()
       this.setState(this.props.setCurrentRoom(this.props.roomName))
  }
  render(){
  return (
    <li className={css(styles.item)}>
      <a href="/" className={css(styles.link)} onClick={this.handleClick}>
        {this.props.roomName}
      </a>
    </li>
  )
}
}

const styles = StyleSheet.create({
  item: {
    marginBottom: '0.5rem',
  },

  link: {
    display: 'block',
    color: 'whitesmoke',
    textDecoration: 'none',

    '::before': {
      content: '"# "',
    },

    ':hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
  },
})

export default Room