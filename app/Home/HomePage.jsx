"use strict";

var React = require('react');
var $ = require('jquery');
var TaskList = require('./TaskList.jsx');

var HomePage = React.createClass({
	displayName: 'HomePage',

	componentDidMount: function() {
		$.ajax({
	      url: location.origin + "/api",
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(location.origin + "/api", status, err.toString());
	      }.bind(this)
	    });
	}, 

	getInitialState: function() {
	    return {
	          data: []
	    };
	},

	render: function () {
		return (
			<TaskList data={this.state.data}/>
		)
	}
});

module.exports = HomePage;