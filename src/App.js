import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Input extends Component {
  render() {
    return (
    <form id="input-form">
      <p>Interest rate: </p>
      <input type="text" /> %
      <p>Amount: </p>
      £ <input type="text" />
      <button className="my-button">Calculate</button>
    </form>
    );
  }
}

class Earnings extends Component {
  render() {
    return (
      <form id="input-form">
        <p>Earnings: </p>
        £ <input type="text" /> /month
        £ <input type="text" /> /year
        <button className="my-button">Add Currency</button>
      </form>
    );
  }
}

class Calculator extends Component {
  render() {
    return (
      <div className="App">
        <h1>Simple Interest Calculator</h1>
        <Input />
        <Earnings />
      </div>
    );
  }
}

export default Calculator;
