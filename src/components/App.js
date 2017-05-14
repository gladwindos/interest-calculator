import React, { Component } from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import '../App.css';

import Calculator from './calculator';

import { fetchCurrency } from '../actions/index';

class App extends Component {
  render() {
    this.props.fetchCurrency
    return (
      <Calculator />
    );
  }
}

function mapStateToProps(state) {
  return { currency: state.currency };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCurrency: fetchCurrency }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
