var React = require('react');

var Task = require('./Task.jsx');

var TaskList = React.createClass({
    displayName: 'TaskList',
    render: function () {
        var tasks = this.props.data.map(function(taskData) {
	      return (
	        <Task task={taskData} key={taskData.name}/>
	      );
	    });
    
        return (
            <ul className="demo-list-two mdl-list">
            	{tasks}
			</ul>
        );
    }
});

module.exports = TaskList;