import React, { Component } from 'react';
import logo from './octofox-logo-512.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="App-container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            OCTOFOX CO.,LTD.
          </p>
        </header>
        <p className="App-body">
            We tokenize digital assets
            <br/> and distribute it securely on
            <br/>Stellar and IPFS Blockchain
            <br/>
            <br/>Email <a href="mailto:katopz@octofox.io">katopz@octofox.io</a>
            <br/>Call +66 813446361
        </p>
        </div>
      </div>
    );
  }
}

export default App;
