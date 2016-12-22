import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import 'normalize.css';
import 'css/mui.css';
import { App, Home, Search } from './containers';
//import { Search, SearchAnnouncement, SearchData, SearchNews, SearchZongHe } from './containers';

//<IndexRedirect to="/search/zonghe" />
//<Route path="/search/zonghe" component={SearchZongHe}/>
//<Route path="/search/data" component={SearchData}/>
//<Route path="/search/announcement" component={SearchAnnouncement}/>
//<Route path="/search/news" component={SearchNews}/>

ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        	<IndexRedirect to="/search" />
        	<Route path="/search" component={Search}>
        	</Route>
        </Route>
    </Router>
), document.getElementById('root'));


