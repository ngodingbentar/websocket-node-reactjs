import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import { Card, Avatar, Input, Typography } from 'antd';
import 'antd/dist/antd.css';
import './index.css'

const { Search } = Input;

const client = new W3CWebSocket('ws://127.0.0.1:8000');
export default class App extends Component {

  state ={
    userName: '',
    isLoggedIn: false,
  }

  onButtonClicked = (value) => {
    client.send(JSON.stringify({
      type: "message",
      msg: value,
    }));
  }
  componentDidMount(){
    client.onopen = () => {
      console.log('websocket client connected')
    }
    client.onmessage = (message) => {
      const dataFromServer = JSON.parse(message.data)
      console.log('got reply! ', dataFromServer);
    }
  }
  render() {
    return (
      <div className='main'>
        { this.state.isLoggedIn
        ?
          <button onClick={() => this.onButtonClicked("hello dew")}>Send Message</button>
        :
          <div style={{ padding: '200px 40px' }}>
            <Search
              placeholder="Enter Username"
              enterButton="Login"
              size="large"
              onSearch={value => this.setState({ isLoggedIn: true, userName: value })}
            />
          </div>
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
