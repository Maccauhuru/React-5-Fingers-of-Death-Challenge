import React , { Component } from 'react';
import { createStore } from 'redux';
import reducer from '../reducers/index';

const initialState={
  tech : 'Redux Rocks',
  year : 2018
}
const store = createStore(reducer,initialState);

class HelloRedux extends Component {
  //state = store.getState();
  render(){
    return(<div>Say Hello To My Lil Friend {store.getState().tech} in the year {store.getState().year}</div>)
  }
}

export default HelloRedux;