import React from 'react';

class EventHandling extends React.Component {
  handleBtnClick(){
    alert("Button clicked!")
  }
render(){
return (
<div>
<p>{this.props.children}</p>
<button onClick={this.handleBtnClick}>click me!</button>
</div>
);
}
}

export default EventHandling;