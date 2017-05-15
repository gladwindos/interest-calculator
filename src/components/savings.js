import React, { Component } from 'react';

export default class Savings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interest: props.interest,
      amount: props.amount,
    }
  }

  renderAmount(currency) {
    const amount = this.props.amount;
    if(amount === "") {
      return ""
    }
    return (amount*currency.rate).toFixed(2);
  }

  render() {
    const mainCurrency = this.props.mainCurrency;
    const secondCurrency = this.props.secondCurrency;
    const amount = this.props.amount;
    const convertedAmount = amount*secondCurrency.rate;
    var handleInputChange = this.props.handleInputChange;
    return (
      <form id="input-form">
        <div className="row-view">
          <p>Interest rate: </p>
          <div className="input-view">
            <input placeholder="" type="number" name="interest" value={this.props.interest} onChange={handleInputChange} /><span>%</span>
          </div>
        </div>
        <div className="row-view">
          <p>Savings:</p>
          <div className="input-view">
            <span>{mainCurrency.sign}</span> <input type="number" name="amount" value={this.renderAmount(mainCurrency)} onChange={handleInputChange} />
          </div>
          <div className="input-view">
            <span>{secondCurrency.sign}</span> <input type="number" name="amount" value={this.renderAmount(secondCurrency)} readOnly/>
          </div>
        </div>
      </form>
    );
  }
}
