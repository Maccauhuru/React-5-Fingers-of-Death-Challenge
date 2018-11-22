import React, { Component } from 'react'

export default class AddressLabel extends Component {
  render() {
    return (
      <div>
      {this.props.info["0"].Address}
      </div>
    )
  }
}
