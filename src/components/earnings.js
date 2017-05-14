import React, { Component } from 'react';

const EarningsItem = props => {
  const currency = props.currency;
  // console.log(currency);
  if (props.currency !== undefined) {
  const yearlyEarnings = (props.earnings*currency.rate).toFixed(2);
  const monthlyEarnings = (yearlyEarnings/12).toFixed(2);
  return (
    <div>
      {currency.sign} <input type="number" value={monthlyEarnings} readOnly /> /month
      {currency.sign} <input type="number" value={yearlyEarnings} readOnly /> /year
    </div>
  );
}
return null;
}

class Earnings extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render() {
    console.log(this.props.secondCurrency);
    return (
      <form id="input-form">
        <h3>Earnings: </h3>
        <EarningsItem earnings={this.props.earnings} currency={this.props.currencyObject.pound} />
        <div>
        </div>
        <EarningsItem
          earnings={this.props.earnings}
          currency={this.props.secondCurrency}
        />
      </form>
    );
  }
}

export default Earnings;
