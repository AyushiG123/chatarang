import React from 'react'

const RoomList = () =>{
    return(
        <nav className="RoomList">
        <h2 style={stylesRoom.h2}>Rooms</h2>
        <ul style={stylesRoom.list}>
          <ul><a style={stylesRoom.li2} href="#">#general</a></ul>
          <ul><a style={stylesRoom.li2} href="#">#random</a></ul>
        </ul>
      </nav>
    )
}

const stylesRoom = {
    h2: {
        fontSize: '1rem',
        marginLeft: 8,
        paddingLeft: 8,
      },
      
    list: {
        listStyleType: 'circle',
        marginLeft: 0,
        paddingLeft: 0,
      },
      
    li2: {
        listStyleType: 'circle',
        display: 'block',
        color: 'whitesmoke',
        textDecoration: 'none',
        marginBottom: '0.5rem',
      }

}

export default RoomList