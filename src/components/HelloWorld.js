import React , { Component } from 'react';

class HelloWorld extends Component {
  state = {
    tech : 'REDUX',
    year : 2018
  }
  render(){
    return(<div>Say Hello To My Lil Friend {this.state.tech} in the year {this.state.year}</div>)
  }
}

export default HelloWorld;