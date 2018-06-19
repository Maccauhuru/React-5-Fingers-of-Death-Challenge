import React, { Component } from 'react'
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
  render() {
    return (
      <div >
        <table style={{width:'500px' , color:'blue'}}>
        <tbody>
        {
           this.state.emps.map((emp)=>{
           return (<Emp key={emp.id} salary={emp.salary}>{emp.name} </Emp>)
           })
        }
        </tbody>
        </table>
      </div>
    )
  }
}

export default ReactListsCollections;
