import React, { Component } from 'react';

class Counter extends Component {
  state = {
    counter: 2
  };

  incCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

  decCounter = () => {
    this.setState(prevState => ({
      counter: prevState.counter - 1
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.incCounter}>+/INCR</button>
        <p>{this.state.counter}</p>
        <button onClick={this.decCounter}>-/DECR</button>
      </div>
    );
  }
}

export default Counter;