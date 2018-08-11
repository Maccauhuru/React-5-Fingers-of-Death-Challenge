import React, { Component } from 'react'

export default class AddressLabel extends Component {
  render() {
      console.log(this.props);
    return (
      <div>
      {this.props.info["0"].Address}
      </div>
    )
  }
}
