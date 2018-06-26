import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    fizzBuzz: 'Press a button to start',
    counter: 0
  };

  isFizzBuzz = () => {
    let i = this.state.counter;
    let fb = this.state.fizzBuzz;
    

    if (i % 5 === 0 && i % 3 === 0) { 
      fb = `FizzBuzz!` 
    } else if (i % 3 === 0) { 
      fb = `Fizz` 
    } else if (i % 5 === 0) { 
      fb = `Buzz` 
    } else {
      fb = `Nothing of note...`
    }
    
    this.setState({ fizzBuzz: fb });
  };

  increment = () => {
    this.setState({ counter: ++this.state.counter })
    this.isFizzBuzz();
  };

  decrement = () => {
    this.setState({ counter: --this.state.counter });
    this.isFizzBuzz();
  };
  
  render() {
    return (
      <div class="fizzbuzz">
        <div class='w3-bottom w3-hide-small'>
          <div class='w3-bar w3-white w3-center w3-padding w3-opacity-min w3-hover-opacity-off'>
            <div class='w3-row'>
              <div class='w3-half'>
                <button onClick={this.increment} class='w3-button w3-round w3-red w3-opacity w3-hover-opacity-off'>+ Increment</button>
              </div>
              <div class='w3-half'>
                <button onClick={this.decrement} class='w3-button w3-round w3-red w3-opacity w3-hover-opacity-off'>- Decrement</button>
              </div>
            </div>
          </div>
        </div>
        <div class='w3-container w3-padding-64 w3-pale-red w3-center w3-wide'>
          <h1>Find FizzBuzz</h1>
          <p class='w3-xlarge w3-content'>
            <div class='w3-row'>
              <div class='w3-half'>
                <button onClick={this.increment} class='w3-button w3-round w3-red w3-opacity w3-hover-opacity-off'>+ Increment</button>
              </div>
              <div class='w3-half'>
              <button onClick={this.decrement} class='w3-button w3-round w3-red w3-opacity w3-hover-opacity-off'>- Decrement</button>
              </div>
            </div>
          </p>
        </div>
        <div class='resultsPane w3-container w3-padding-64 w3-pale-red w3-grayscale-min w3-center'>
          <div class='w3-content'>
            <div class='w3-row'>
              <div class='w3-half'>
                <h2>Counter</h2>
                <p>{this.state.counter}</p>
              </div>
              <div class='w3-half'>
                <h2>Result?</h2>
                <p>{this.state.fizzBuzz}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
