import React from 'react';

const Receiver = (props) => {
  return (
     <div className='receiver'>
<h1>{props.fromPerson.name}</h1>
<h4>{props.fromPerson.address}</h4>
<h4>{props.fromPerson.address2}</h4>
    </div>
  )
}

export default Receiver;
