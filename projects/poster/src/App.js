import React from 'react';
import './App.css';
import Poster from './Components/Poster';



const App =() => {
  return (
    <div className='poster'>
      <Poster image='http://3.bp.blogspot.com/-edCq3DInSGs/TzfvKA3zHBI/AAAAAAAAAlA/uSEV8VlD0Kw/s400/IMG_0690.JPG'
       title='Life' text='you only get to choose two'/>
    </div>
  )
}

export default App;
