import React from 'react';
import { render } from 'react-dom';
import App from './App';

setTimeout(() => {
  render(<App env={'browser'}/>, document.getElementById('root'));
}, 2000);