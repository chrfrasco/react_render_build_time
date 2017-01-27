import React, { Component } from 'react';
import { DEFAULT_STATE } from './defaults.js';

const CLIENT_STATE = {
  env: 'browser'
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = DEFAULT_STATE
  }

  componentDidMount() {
    this.setState(CLIENT_STATE);
  }

  render() {
    return (
      <div>
        <h1>This will not change</h1>
        <h1>
          Hello from
          <span>{` ${this.state.env}`}</span>
        </h1>
      </div>
    );
  }
}