"use strict";

var React = require('react');

var SideBar = React.createClass({
    displayName: 'SideBar',
    render: function () {
        return (
            <div className="mdl-layout__drawer">
                <span className="mdl-layout-title">Title</span>
                <nav className="mdl-navigation">
                    <a className="mdl-navigation__link" href="">Link</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                    <a className="mdl-navigation__link" href="">Link</a>
                </nav>
            </div>
        )
    }
});

module.exports = SideBar;