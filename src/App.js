import React, { Component } from 'react';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>React App!</h1>
          <Greetings welcomeMsg="Welcome to React 101" />
          <Header />
        </header>
      </div>
    );
  }
}

const Greetings = ({ welcomeMsg }) =>
  <div style={{ color: '#fff', backgroundColor: 'red' }}>
    <h1 className="App-title">{welcomeMsg}</h1>
  </div>;

const Header = () =>
  <div style={{color: 'white'}}>
    <a>Home</a> | <a>About</a> | <a>Contact</a>
  </div>;

export default App;
