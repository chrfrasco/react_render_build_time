import React from 'react';
import { render } from 'react-dom';
import App from './App';

setTimeout(() => {
  render(<App />, document.getElementById('root'));
}, 2000);
