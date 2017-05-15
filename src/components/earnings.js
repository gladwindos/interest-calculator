import React, { Component } from 'react';

const EarningsItem = props => {
  if (props.currencyObject !== undefined) {
    const currency = props.currencyObject;
    console.log("CURRENCY:", currency.pound);
    const earnings = props.earnings.toFixed(2);
    const convertedEarnings = (earnings*props.secondCurrency.rate).toFixed(2);
    if (convertedEarnings === 'NaN') {
      convertedEarnings = (0).toFixed(2);
    }
    return (
      <div className="earnings-item">
        <div className="input-view">
          <span>£</span> <input type="number" value={earnings} readOnly />
        </div>
        <div className="input-view">
          <span>{props.secondCurrency.sign} </span><input type="number" value={convertedEarnings} readOnly />
        </div>
      </div>
    );
  }
  return null;
}

class Earnings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      earnings : props.earnings,
      yearlyEarnings: 0,
      monthlyEarnings: 0
    }
  }

  render() {
    console.log(this.props.secondCurrency);
    return (
      <form id="input-form">
        <div className="row-view" id="earnings">
          <p>Earnings: </p>
          <EarningsItem earnings={this.props.earnings} currencyObject={this.props.currencyObject} secondCurrency={this.props.secondCurrency} /><span className="frequency-span">per year</span>
          <br/>
          <EarningsItem earnings={this.props.earnings/12} currencyObject={this.props.currencyObject} secondCurrency={this.props.secondCurrency} /><span className="frequency-span">per month</span>
        </div>

      </form>
    );
  }
}

export default Earnings;
