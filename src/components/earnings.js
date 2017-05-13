import React, { Component } from 'react';

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

class Earnings extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    return (
      <form id="input-form">
        <h3>Earnings: </h3>
        <EarningsInput earnings={this.props.earnings} currency={this.props.currencyObject.pound} />
        <div>
        </div>
        <EarningsInput
          earnings={this.props.earnings}
          currency={this.props.secondCurrency}
        />
      </form>
    );
  }
}

export default Earnings;
