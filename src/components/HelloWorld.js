import React , { Component } from 'react';

const fullName = {
  id : 100,
  name:'Simba',
  lastname:'MaccaJay'
}
;

const printFullName = () => `Say hello to ${fullName.name} ${fullName.lastname} , id number ${fullName.id}`;

class HelloWorld extends Component {
  render(){
    return(<div>{printFullName()}</div>)
  }
}

export default HelloWorld;