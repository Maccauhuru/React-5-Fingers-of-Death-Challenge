import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React App!</h1>
          <Greetings />
        </header>
        
      </div>
    );
  }
}


function Greetings (){
    return (
      <div>
        <h1 className="App-title">Welcome to React 101</h1>
      </div>
    )

  }
  


export default App;
