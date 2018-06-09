import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import PropsValidation from './PropsValidation';
import EventHandling from './EventHandling';

ReactDOM.render(
<EventHandling>Text From Above</EventHandling>, document.getElementById('root'));
registerServiceWorker();
