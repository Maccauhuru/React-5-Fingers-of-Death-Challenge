import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
//import AddressLabel from './components/AddressLabel';
//import Person from '../src/Seeds/Person';
//import ReactListsCollections from './components/ReactListsCollections';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import PropsValidation from './PropsValidation';
// import EventHandling from './EventHandling';
// registerServiceWorker();
import HelloWorld from './components/HelloWorld';
//import StateChanges from './components/StateChanges';
//import ReactForms from './components/ReactForms';
//import HelloWorldPureReactBook from './components/HelloWorldPureReactBook';
//import HelloPureReactBook from './components/HelloPureReactBook';
//import WorldPureReactBook from './components/WorldPureReactBook';
//import ReactListsCollections from './components/ReactListsCollections'
//import HelloRedux from './components/HelloRedux';
//import ReactRouter from './components/ReactRouter';
//import ReactAnimations from './components/ReactAnimations';


ReactDOM.render( <HelloWorld greet='Hey' /> , document.getElementById('root'));

const Element = React.createElement(
    'h1', {
        className: 'greeting'
    },
    'Hello, world using NO JSX!'
);

ReactDOM.render(Element, document.getElementById("two"));

