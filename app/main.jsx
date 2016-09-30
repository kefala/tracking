"use strict";
var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var BrowserHistory = ReactRouter.browserHistory;



var HomePage = require('./Home/HomePage.jsx');
var TaskPage = require('./Task/TaskPage.jsx');
var App = require('./app.jsx');


ReactDOM.render(
	<Router history={BrowserHistory}>

    	<Route path="/" component={App}>
    		<Route path="app" name="home" component={HomePage}/>
    		<Route path="app/new" name="newTask" component={TaskPage}/>
    	</Route>
    
    </Router>
, document.getElementById('app'));