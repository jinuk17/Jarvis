import React, { Component } from 'react';
import { BrowserRouter, Match } from 'react-router';

import Background from '../components/Base/Background'

import '../styles/main.scss'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="root">
          <Background/>
          Hello World
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
