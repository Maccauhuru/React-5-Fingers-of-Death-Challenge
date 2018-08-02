import React from 'react';
import './App.css';
import ErrorBox from './Components/ErrorBox';



const App =() => {
  return (
      <ErrorBox className="danger-box">  
    The world is coming to an end
      </ErrorBox>
  )
}

export default App;
