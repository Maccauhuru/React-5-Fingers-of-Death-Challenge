import React, { Component } from 'react'

export default class StateChanges extends Component {
  constructor(){
    super()
    this.state = {
      count : 0
    }
    this.handleIncreaseCount = this.handleIncreaseCount.bind(this);
    this.handleDecreaseCount = this.handleDecreaseCount.bind(this);
    this.handleResetCount    = this.handleResetCount.bind(this);
  }

handleIncreaseCount(){
  this.setState({
    count : this.state.count + 10
  })
}

handleDecreaseCount(){
  this.setState({
    count : this.state.count - 10
  })
}

handleResetCount(){
  this.setState({
    count : 0
  })
}

  render() {
    return (
      <div>
        <button onClick={this.handleIncreaseCount}>Increase Count By 10</button>
        <h1>Current Value : {this.state.count}</h1>
        <Content currentValue={this.state.count}></Content>
        <button onClick={this.handleDecreaseCount}>Decrease Count By 10</button>
        <br />
        <button onClick={this.handleResetCount}>Reset Count</button>
      </div>
    )
  }
}

class Content extends React.Component {
componentWillMount() {
  console.log('component WILL MOUNT!')
}
componentDidMount(){
  console.log('component DID MOUNT!')
}
componentWillReceiveProps(){
  console.log('component WILL RECEIVE PROPS!')
}
componentWillUpdate(){
  console.log('component WILL UPDATE!')
}
componentDidUpdate(){
  console.log('component DID UPDATE!')
}
componentWillUnmount(){
  console.log('component WILL UNMOUNT!')
}
componentDidCatch(){
  console.log('component DID CATCH!!??')
}

render() {
  return(<div>
    {this.props.currentValue}
    </div>)
}
  
  



}

