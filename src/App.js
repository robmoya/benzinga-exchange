import React, { Component } from 'react';
import Greeter from './components/Greeter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Benzinga Simple Stock Exchange App</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Greeter/>
      </div>
    );
  }
}

export default App;