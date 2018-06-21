import React  from 'react';
import HelloPureReactBook from './HelloPureReactBook';
import WorldPureReactBook from './WorldPureReactBook';

function HelloWorldPureReactBook(){
    return(
        <div>
        <HelloPureReactBook />
        <WorldPureReactBook />!<br />
        <ValidIndicator />
        </div>
    )
}

function ValidIndicator() {
let isReactGood = -1;
return (
<h1>
{ /* here is a comment */ }
{isReactGood && 'React Is Good!'}
{!isReactGood && 'React Is Not Good'}

</h1>
);
}

export default HelloWorldPureReactBook;