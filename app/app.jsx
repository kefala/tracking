"use strict";

var React = require('react');
var Toolbar = require('./components/Toolbar.jsx');
var Sidebar = require('./components/Sidebar.jsx');

var App = React.createClass({
    displayName: 'App',
    render: function (RouteHandler) {
    	return (
    		<div className="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
    			<Toolbar/>
    			<Sidebar/>
    			<main className="mdl-layout__content">
			    	<div className="page-content">
    					{this.props.children}
			    	</div>
			  	</main>
    		</div>
    	);
    }
});

module.exports = App;


