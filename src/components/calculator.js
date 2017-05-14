import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';

import Savings from './savings';
import Earnings from './earnings';

const CURRENCY = {
  pound: {
    name: "pound",
    rate: 1,
    sign: '£'
  },
  dollar: {
    name: "dollar",
    rate: 1.29,
    sign: '$'
  },
  euro: {
    name: "euro",
    rate: 0.85,
    sign: '€'
  },
  naira: {
    name: "naira",
    rate: 409.22,
    sign: '₦'
  },
  swissfranc: {
    name: "swissfranc",
    rate: 1.29,
    sign: 'Fr.'
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interest: '',
      amount: '',
      earnings: 0,
      currencyObject: {},
      mainCurrency: {},
      secondCurrency: {}
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleInputChange(event) {
    console.log("input change");
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    }, this.updateEarnings);
  }

  updateEarnings() {
    // PREVIOUS STATE IS BEING SET!!
    console.log("interest:", this.state.interest);
    console.log("amount:", this.state.amount);
    const interest = this.state.interest;
    const amount = this.state.amount;
    const total = (interest*amount)/100;
    this.setState({
      earnings: total
    });
  }

  renderCurrencyOptions() {
    return Object.keys(this.state.currencyObject).map((currency) => {
      const currencySign = this.state.currencyObject[currency]["sign"];
      if (currencySign !== "£") {
        return (
          <option key={currencySign} value={currency}>{currencySign}</option>
        )
      }
    });
  }

  handleOptionChange(event) {
    const newCurrency = event.target.value;
    this.setState({
      secondCurrency: this.state.currencyObject[newCurrency]
    });
  }

  componentDidMount() {
    console.log("did mount");
    const url = 'http://localhost:8080/currencies';
    axios.get(url)
      .then((respone) => {
        // console.log(respone.data);
        const data = respone.data
        this.setState({
          currencyObject: data,
          mainCurrency: data.pound,
          secondCurrency:data.dollar
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Simple Interest Calculator</h1>
        <select defaultValue={this.state.secondCurrency.name} onChange={this.handleOptionChange}>
          {this.renderCurrencyOptions()}
        </select>
        <Savings
          handleInputChange={this.handleInputChange}
          interest={this.state.interest}
          amount={this.state.amount}
          mainCurrency={this.state.mainCurrency}
          secondCurrency={this.state.secondCurrency}
        />
        <Earnings
          currencyObject={this.state.currencyObject}
          earnings={this.state.earnings}
          mainCurrency={this.state.mainCurrency}
          secondCurrency={this.state.secondCurrency}
        />
      </div>
    );
  }
}

export default Calculator;
