import React, { Component } from 'react';
import HigherOrderComponent from './HigherOrderComponent';
import Emp from './Emp';


class ReactListsCollections extends Component {
    state = {
        emps : [
            {id : 1, name : "John", salary : 900},
            {id : 2, name : "Mary", salary : 1500},
            {id : 3, name : "Stuart", salary : 1200},
            {id : 4, name : "David", salary : 759},
            {id : 5, name : "Wesley", salary : 1200} 
    ]     
    }
    handleDeleteEmp=(index,e)=>{
    const copyempb = Object.assign([],this.state.emps); 
    copyempb.splice(index,1);
    this.setState({emps : copyempb});
    }
  render() {
    return (
      <div >
        <table style={{width:'500px' , color:'blue'}}>
        <tbody>
        {
           this.state.emps.map((emp)=>{
           return (<Emp 
                     salary={emp.salary}
                     key={emp.id}
                     deleteEvent={this.handleDeleteEmp.bind(this,emp.id)}>
                     {emp.name} 
                  </Emp>)
           })
        }
        </tbody>
        </table>
      </div>
    )
  }
}

export default HigherOrderComponent('emps')(ReactListsCollections);
