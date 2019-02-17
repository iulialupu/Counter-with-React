import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };
  }

  addition() {
    const count = ++this.state.counter;
    console.log(count);
    this.setState({ counter: count });
  }

  subtraction() {
    const count = --this.state.counter;
    this.setState({ counter: count });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1 className="App-header">Counter App </h1>{" "}
        <h2> {this.state.counter} </h2>
        <button onClick={() => this.addition()}>+</button>
        <button onClick={() => this.subtraction()}>-</button>
      </div>
    );
  }
}

export default App;
