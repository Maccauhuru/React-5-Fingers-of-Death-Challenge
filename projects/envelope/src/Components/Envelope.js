import React from 'react';
import Sender from './Sender';
import Receiver from './Receiver';
import Stamp from './Stamp';


const Envelope = (props) => {
  return (
<div>
    <Stamp />
    <Sender toPerson={props.fromPerson}/>
    <Receiver fromPerson={props.toPerson}/>
</div>
  )
}

export default Envelope;
