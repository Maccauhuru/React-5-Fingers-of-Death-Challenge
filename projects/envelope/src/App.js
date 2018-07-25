import React, { Component } from 'react';
import './App.css';
import Envelope from './Components/Envelope';

class App extends Component {
toPerson = {
  name : 'Mrs Receiver',
  address : '123 Some Fake St.',
  address2: 'Boston, MA 02118'
}
fromPerson = {
  name: 'Mr Sender',
  address: '123 Some Fake St.',
  address2: 'Boston, MA 02118'
}
  render() {
    return (
      
      <div>
        <Envelope toPerson={this.toPerson} fromPerson={this.fromPerson}/>
      </div>
    );
  }
}

export default App;
