import React, { Component } from 'react';
import Routes from './Routes'
import './App.css';

class App extends Component {
  render() {
      return (
          <div>
      <div className="App">
          <header className="App-header">
          <h1 className="App-title">My Contacts App</h1>
        </header>
      </div>
        <div className="App-intro">
            <Routes />
        </div>
      </div>
    );
  }
}

export default App;
