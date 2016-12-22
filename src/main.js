import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import 'normalize.css';
import 'css/mui.css';
import { App, Home, Search } from './containers';

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        	<Route path="/search" component={Search}></Route>
        </Route>
    </Router>
), document.getElementById('root'));
