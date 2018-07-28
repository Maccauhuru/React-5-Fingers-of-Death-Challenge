import React from 'react';
const Poster = (props)=>{
return (
    <div>
    <div className = 'poster-inner'>
    <img src={props.image} alt='life choice' />
    </div>
    <div className='text'>
        {props.title}
    </div>
    <p>{props.text}</p>
    
    </div>)
    
}

export default Poster;