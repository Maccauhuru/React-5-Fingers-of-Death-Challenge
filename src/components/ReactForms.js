import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ReactForms extends Component {
  constructor(){
    super();
    this.state = {
      data : 'Type text here',
    }
    this.handleUpdateState = this.handleUpdateState.bind(this);
    this.handleClearFormInput = this.handleClearFormInput.bind(this);
  }

handleUpdateState(e){
this.setState({
  data : e.target.value
});
}

handleClearFormInput(){
  this.setState({
    data : ''
  });
  ReactDOM.findDOMNode(this.refs.myText).focus();
}

  render() {
    return (
      <div><br />
        <input type="text"  value={this.state.data} onChange={this.handleUpdateState} ref="myText"/>
        <h2>{this.state.data}</h2>
        <button onClick={this.handleClearFormInput}>CLEAR</button>
      </div>
    )
  }
}

export default ReactForms;