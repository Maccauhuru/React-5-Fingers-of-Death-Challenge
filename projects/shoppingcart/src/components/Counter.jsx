import React , { Component } from 'react';

class Counter extends Component {
    state = {
        value : this.props.value,
        tags : [],
    }

handleIncrement=()=>{
    this.setState({
        value : this.state.value + 3
    })
}

  render() {
    return (
    <React.Fragment>
        <span style={{fontSize:20}} className={this.getBadgeClass()}>{this.formatCount()}</span>
            <button onClick={this.handleIncrement} className="btn btn-dark text-white btn-sm">INCREMENT</button>
            <ul>{this.displayTags()}</ul>
    </React.Fragment>
    );
  }
formatCount = () => {
    const { value } = this.state;
    return value === 0 ? 'Zero' : value;
}

getBadgeClass =  ()=> {
let defaultBadge = "badge m-2 badge-";
const { value } = this.state;
return defaultBadge+= value===0? 'warning' : 'success';
}

displayTags = () => {
const  { tags } = this.state;
return tags.length===0?  null : tags.map((tag)=><li key={tag}>{tag}</li>);
}

}

export default Counter;