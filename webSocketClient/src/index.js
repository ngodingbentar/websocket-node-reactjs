import ReactDOM from "react-dom"
import react, { Component } from "react"
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://127.0.0.1:8000');
export default class App extends Component {
  componentDidMount(){
    client.onopen = () => {
      console.log('websocket client connected')
    }
  }
  render() {
    return (
      <div>
        Testing App
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
