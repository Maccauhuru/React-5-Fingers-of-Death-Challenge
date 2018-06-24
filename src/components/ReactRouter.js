import React, {Component} from 'react';
import { BrowserRouter as Router,Switch , Route , Link } from 'react-router-dom';
import StateChanges from './StateChanges';
import ReactForms from './ReactForms';

class ReactRouter extends Component{
    render(){
        return(
            <Router>
            <div>
            <h2>Welcome to React Tutorials Completed Modules</h2>
                <ul>
                    <li><Link to={'/'}>State Changes Page</Link></li>
                    <li><Link to={'/formpage'}>React Forms Page</Link></li>
                 </ul>
                 <hr />
                 <Switch>
                 <Route  exact path='/' component={StateChanges}/>
                 <Route  exact path='/formpage' component={ReactForms}/>
                 </Switch>
            </div>
            </Router>)
            ;
    }
}
export default ReactRouter;