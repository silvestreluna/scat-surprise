import React from 'react';
import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello</h1>
        <button className="btn btn-danger">Test</button>
        { console.error('hello')}
      </div>
    );
  }
}

export default App;
