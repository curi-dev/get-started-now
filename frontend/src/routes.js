import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Discover from './pages/Discover';
import Registered from './pages/Registered';


function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={ Landing } />
                <Route path='/discover' component={ Discover } />
                <Route path='/registered' component={ Registered } />
            </Switch>
        </BrowserRouter>
    );
};


export default Routes;