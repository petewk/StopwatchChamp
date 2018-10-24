import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: 0,
      secondsremaining: 0,
      secondsleft: 0,
      minutesleft: 0,
    }
  }


  updateSeconds() {
    this.setState({secondsremaining: this.state.input});
    this.setState({secondsleft: this.state.secondsremaining % 60});
    this.setState({minutesleft: this.state.secondsremaining / 60});
    console.log(this.state.secondsleft)
  }

  minusSeconds() {
    if(this.state.secondsremaining !== 0) {
      this.setState({secondsremaining: this.state.secondsremaining - 1});
      this.setState({secondsleft: Math.floor(this.state.secondsremaining % 60)});
      this.setState({minutesleft: Math.floor(this.state.secondsremaining / 60)});
  }
    if (this.state.secondsleft === 1 && this.state.minutesleft === 0) {
       alert("Time's up!")
    }
  }


  componentWillMount() {
    this.minusSeconds(this.state.secondsremaining, this.state.secondsleft, this.state.minutesleft);
    console.log(this.state.secondsremaining)
  }

  componentDidMount() {
    setInterval(() => this.minusSeconds(this.state.secondsremaining, this.state.secondsleft, this.state.minutesleft), 1000)
    setInterval(() => console.log(this.state.secondsremaining), 1000)
  }




  render() {
    return (
    <div className="App-header">
      <h1>Stopwatch Champ</h1>
      <input onChange={event => this.setState({input: event.target.value})} />
      <div>{this.state.minutesleft} minutes and {this.state.secondsleft} seconds remaining</div>
      <button onClick={() => this.updateSeconds()}>Click me</button>

    </div>
  )
  }
}




export default App;
