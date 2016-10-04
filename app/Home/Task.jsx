var React = require('react');

var Task = React.createClass({
    displayName: 'Task',
    render: function () {
        return (
            <li className="mdl-list__item mdl-list__item--two-line">
			    <span className="mdl-list__item-primary-content">
			      <span>{this.props.data}</span>
			      <span className="mdl-list__item-sub-title">00:00 / 00:30</span>
			    </span>
			    <span className="mdl-list__item-secondary-content">
			      <span className="mdl-list__item-secondary-info">00:20</span>
			      <a className="mdl-list__item-secondary-action" href="#"><i className="material-icons">pause</i></a>
			    </span>
			</li>
        );
    }
});

module.exports = Task;