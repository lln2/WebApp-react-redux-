import React from 'react'
import {Router, Route, IndexRoute } from 'react-router'

import App from '../containers'
 
 
import User from '../containers/User'
 
import NotFound from '../containers/404'

 
class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={User}/>                    
                    <Route path='/User' component={User}/>                     
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap
