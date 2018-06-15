import React, { Component } from 'react'

class ReactForms extends Component {
  constructor(){
    super();
    this.state = {
      data : 'Type text here',
    }
    this.handleUpdateState = this.handleUpdateState.bind(this);
  }

handleUpdateState(e){
this.setState({
  data : e.target.value
});
}

  render() {
    return (
      <div>
        <input type="text"  value={this.state.data} onChange={this.handleUpdateState}/>
        <h2>{this.state.data}</h2>
      </div>
    )
  }
}

export default ReactForms;