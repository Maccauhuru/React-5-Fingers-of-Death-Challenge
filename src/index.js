import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PropsValidation from './PropsValidation';

ReactDOM.render(
  <React.Fragment>
  <App headerText="Getting started with Props in React16" /><hr />
  <PropsValidation name="Wu Muh"/>
  </React.Fragment>, document.getElementById('root'));
registerServiceWorker();
