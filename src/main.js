
//CSS
import 'normalize.css';
import 'css/mui.css';

//jquery
import $ from 'jquery';
window._$ = $;

//React
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, IndexRedirect, hashHistory } from 'react-router';
import { App, Home, Search } from './containers';


ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={App}>
        	<IndexRedirect to="/search" />
        	<Route path="/search" component={Search}>
        	</Route>
        </Route>
    </Router>
), document.getElementById('root'));


////import { Search, SearchAnnouncement, SearchData, SearchNews, SearchZongHe } from './containers';

//<IndexRedirect to="/search/zonghe" />
//<Route path="/search/zonghe" component={SearchZongHe}/>
//<Route path="/search/data" component={SearchData}/>
//<Route path="/search/announcement" component={SearchAnnouncement}/>
//<Route path="/search/news" component={SearchNews}/>


