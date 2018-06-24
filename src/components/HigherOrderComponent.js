import React, { Component } from 'react';
import  '../css/loader.css';

const HigherOrderComponent = (propName)=> (WrappedComponent)=> {
return class HigherOrderComponent extends Component {
  render() {
        if(this.props.emps){
    return this.props[propName].length !== 0 ? <div className='loader'></div> : <WrappedComponent {...this.props} />
        }
        else{
    return <div className='loader'></div>
        }
  }
}
}
export default HigherOrderComponent;