import React from 'react';
import ReactDOM from 'react';

const Element = React.createElement(
    'h1', {
        className: 'greeting'
    },
    'Hello, world!'
);

ReactDOM.render(Element,document.getElementById("two"));