import ReactDOM from "react-dom"
import react, { Component } from "react"

export default class App extends Component {
  render() {
    return (
      <div>
        Testing App
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
