import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Counter from './components/Counter';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css';

class App extends Component {
    state = {
        counters : [
            { id : 1,value : 90 },
            { id : 2,value : 10},
            { id : 3,value : 3 },
            { id : 4,value : 50 }
            ]
    }

    render(){
    return(<div>
        <h1 className='bg-success text-white'>Total Count{this.state.counters.reduce((a,b)=>a+b.value,0)}</h1>
        {this.state.counters.map((counter)=><Counter key={counter.id} value={counter.value}/>)}        
        </div>)
    }

}
const root = document.getElementById("root");
ReactDOM.render(<App />,root);