import React, { Component } from 'react';
import './App.css';

class Input extends Component {

  render() {
    return (
      <form onSubmit={this.props.calculateEarnings}  id="input-form">
        <h3>Savings: </h3>
        <p>Interest rate: </p>
        <input type="number" name="interest" value={this.props.interest} onChange={this.props.handleInputChange} /> %
        <p>Amount: </p>
        £ <input type="number" name="amount" value={this.props.amount} onChange={this.props.handleInputChange} />
        <button className="my-button">Calculate</button>
      </form>
    );
  }
}

const EarningsInput = props => {
  const currency = props.currency;
  // console.log(currency);
  const yearlyEarnings = (props.earnings*currency.rate).toFixed(2);
  const monthlyEarnings = (yearlyEarnings/12).toFixed(2);
  return (
    <div>
      {currency.sign} <input type="number" value={monthlyEarnings} readOnly /> /month
      {currency.sign} <input type="number" value={yearlyEarnings} readOnly /> /year
    </div>
  );
}

const CURRENCY = {
  pound: {
    rate: 1,
    sign: '£'
  },

  dollar: {
    rate: 1.29,
    sign: '$'
  }
}

class Earnings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencyObject: CURRENCY,
      secondCurrency: CURRENCY.dollar
    }

    // Will be needed when getting currency from state
    // this.renderCurrencyOptions = this.renderCurrencyOptions.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  renderCurrencyOptions() {
    return Object.keys(this.state.currencyObject).map((currency) => {
      const currencySign = this.state.currencyObject[currency]["sign"];
      return (
        <option key={currencySign} value={currency}>{currencySign}</option>
      )
    });
  }

  handleOptionChange(event) {
    const newCurrency = event.target.value;
    this.setState({
      secondCurrency: this.state.currencyObject[newCurrency]
    });
  }

  render() {
    return (
      <form id="input-form">
        <h3>Earnings: </h3>
        <EarningsInput earnings={this.props.earnings} currency={this.state.currencyObject.pound} />
        <div>
          <p>Change second currency:</p>
          <select onChange={this.handleOptionChange}>
            {this.renderCurrencyOptions()}
          </select>
        </div>
        <EarningsInput earnings={this.props.earnings} currency={this.state.secondCurrency} />
      </form>
    );
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interest: '',
      amount: '',
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
