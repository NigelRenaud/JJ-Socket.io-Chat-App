import React, { Component } from 'react';
import '../App.css';

class Chatroom extends Component {
  render() {
    return (
      <div>
      <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
      </div>

      )
  }
}

export default Chatroom;
