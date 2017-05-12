import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Input extends Component {

  render() {
    return (
    <form onSubmit={this.props.calculateEarnings}  id="input-form">
      <p>Interest rate: </p>
      <input type="number" name="interest" value={this.props.interest} onChange={this.props.handleInputChange} /> %
      <p>Amount: </p>
      £ <input type="number" name="amount" value={this.props.amount} onChange={this.props.handleInputChange} />
      <button className="my-button">Calculate</button>
    </form>
    );
  }
}



class Earnings extends Component {
  render() {
    const yearlyEarnings = this.props.earnings;
    const monthlyEarnings = yearlyEarnings/12;
    return (
      <form id="input-form">
        <p>Earnings: </p>
        £ <input type="number" value={monthlyEarnings} readOnly /> /month
        £ <input type="number" value={yearlyEarnings} readOnly /> /year
        <button className="my-button">Add Currency</button>
      </form>
    );
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interest: 0,
      amount: 0,
      earnings: 0
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.calculateEarnings = this.calculateEarnings.bind(this);
  }

  handleInputChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name);
    // console.log(this.state)
    this.setState({
      [name]: value
    });
  }

  calculateEarnings(event) {
    event.preventDefault();
    const interest = this.state.interest;
    const amount = this.state.amount;
    const total = (interest*amount)/100;
    this.setState({
      earnings: total
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Simple Interest Calculator</h1>
        <Input
          handleInputChange={this.handleInputChange}
          interest={this.state.interest}
          amount={this.state.amount}
          calculateEarnings={this.calculateEarnings}
          />
        <Earnings earnings={this.state.earnings} />
      </div>
    );
  }
}

export default Calculator;
