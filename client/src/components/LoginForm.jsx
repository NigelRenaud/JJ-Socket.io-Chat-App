import React, { Component } from 'react';
import { VERIFY_USER } from '../Events';

class LoginForm extends Component {
   constructor(props) {
    super(props);

    this.state = {
    nickname:"",
    error:""
  };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.setUser = this.setUser.bind(this);
}

componentDidMount(){
    this.textInput.focus()
  }

setUser = ({user, isUser}) =>{
  console.log(user, isUser);
  if(isUser){
    this.setError("User name taken")
  }else{
      this.props.setUser(user)
  }
}

handleSubmit = (e) => {
  e.preventDefault();
  const { socket } = this.props
  const { nickname } = this.state
  socket.emit(VERIFY_USER, nickname, this.setuser)
}

handleChange = (e) => {
  this.setState({nickname: e.target.value})
}

setError = (error) => {
  this.setState({error})
}

  render() {
    const { nickname, error } = this.state
    return (
      <div className="login">
          <form onSubmit={this.handleSubmit} className="login-form">
            <label htmlFor="nickname">
            <h2>What's your nickname?</h2>
            </label>
            <input
              ref={(input)=>{this.textInput = input }}
              type="text"
              id="nickname"
              value={nickname}
              onChange={this.handleChange}
              placeholder={'Your Username Here'}
              />
              <div className="error">{error ? error:null}</div>
          </form>
      </div>
      );
  }
}

export default LoginForm;