import React, { Component } from 'react';
import Chatroom from './components/chatroom';
import io from 'socket.io-client';
import LoginForm from './components/LoginForm';
import { USER_CONNETED, LOGOUT } from './Events';
import logo from './logo.svg';
// import './App.css';
import './index.css';

const socketUrl = "http://localhost:3001";

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    socket: null,
    user: null
  };
}
// Starts the socket
initSocket = () => {
  const socket = io(socketUrl)

  socket.on('connect', () => {
    console.log("You're connected")
  })
  this.setSate({socket})
}

//Set user props @param user {id:number, name:string}

setUser = (user)=> {
    const { socket } = this.state
    socket.emit(USER_CONNETED, user);
    this.setState({user})
}

// logout user and clear state
logout = ()=> {
  const { socket } = this.state
  socket.emit(LOGOUT)
  this.state({user:null})
}

  render() {
    const { socket } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
        {!user ?
        <LoginForm socket={socket} setUser={this.setUser} />
        :
        <Chatroom socket={socket} user={user} logout={this.logout} />
         }
        }
        }
        </div>
      </div>
    );
  }
}

export default App;
