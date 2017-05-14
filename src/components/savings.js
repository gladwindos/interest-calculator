import React, { Component } from 'react';

export default class Savings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interest: props.interest,
      amount: props.amount,
    }
  }
  render() {
    return (
      <form id="input-form">
        <h3>Savings: </h3>
        <p>Interest rate: </p>
        <input type="number" name="interest" value={this.props.interest} onChange={this.props.handleInputChange} /> %
        <p>Amount: </p>
         {this.props.mainCurrency.sign} <input type="number" name="amount" value={this.props.amount} onChange={this.props.handleInputChange} />
         {this.props.secondCurrency.sign} <input type="number" name="amount" value={this.props.amount*this.props.secondCurrency.rate} onChange={this.props.handleInputChange} />
      </form>
    );
  }
}
