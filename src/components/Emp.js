import React from 'react'

const Emp = (props) => {
  return (
    <tr width="50%">
     <td>{props.children}</td> 
     <td>{props.salary}</td> 
    </tr>
  )
}
export default Emp;
