import React from 'react';

const Sender = (props) => {
  return (
    <div className='sender'>
<h1>{props.toPerson.name}</h1>
<h4>{props.toPerson.address}</h4>
<h4>{props.toPerson.address2}</h4>
    </div>
  )
}

export default Sender;
