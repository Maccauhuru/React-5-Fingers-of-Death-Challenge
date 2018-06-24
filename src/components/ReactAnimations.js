import React, { Component } from 'react'
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

 class ReactAnimations extends Component {
  render() {
    return (
      <div>
        <ReactCSSTransitionGroup 
               transitionName='example'
               transitionAppear={true}
               transitionAppearTimeout={1000}
               transitionEnter={false}
               transitionLeave={false}>
               <h1>My Animated Element</h1>
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}
export default ReactAnimations;