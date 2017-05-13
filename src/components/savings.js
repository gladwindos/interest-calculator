import React, { Component } from 'react';

export default class Savings extends Component {
  render() {
    return (
      <form onSubmit={this.props.calculateEarnings}  id="input-form">
        <h3>Savings: </h3>
        <p>Interest rate: </p>
        <input type="number" name="interest" value={this.props.interest} onChange={this.props.handleInputChange} /> %
        <p>Amount: </p>
         {this.props.mainCurrency.sign} <input type="number" name="amount" value={this.props.amount} onChange={this.props.handleInputChange} />
         {this.props.secondCurrency.sign} <input type="number" name="amount" value={this.props.amount*this.props.secondCurrency.rate} onChange={this.props.handleInputChange} />
        <button className="my-button">Calculate</button>
      </form>
    );
  }
}
