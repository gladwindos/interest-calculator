import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from '../src/components/calculator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Calculator />, div);
});
