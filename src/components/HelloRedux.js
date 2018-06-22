import React , { Component } from 'react';
import { createStore } from 'redux';

const store = createStore(reducer);

class HelloRedux extends Component {

  render(){
    return(<div>Say Hello To My Lil Friend {this.state.tech} in the year {this.state.year}</div>)
  }
}

export default HelloRedux;