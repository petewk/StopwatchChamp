import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: 0,
      secondsleft: 0,
    }
  }

  updateSeconds() {
    this.setState({secondsleft: this.state.input});
    console.log(this.state.secondsleft)
  }

  minusSeconds() {
    if(this.state.secondsleft !== 0) {
      this.setState({secondsleft: this.state.secondsleft - 1});
  }
  console.log(this.state.secondsleft)
}

  componentWillMount() {
    this.minusSeconds(this.state.secondsleft);
  }

  componentDidMount() {
    setInterval(() => this.minusSeconds(this.state.secondsleft), 1000)
  }


  render() {
    return (
    <div className="App-header">
      <h1>Stopwatch Champ</h1>
      <input onChange={event => this.setState({input: event.target.value})} />
      <div>{this.state.secondsleft}</div>
      <button onClick={() => this.updateSeconds()}>Click me</button>
      <button onClick={() => this.minusSeconds()}>Minus Second</button>
    </div>
  )
  }
}




export default App;
