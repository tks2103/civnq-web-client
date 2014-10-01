/**
 * @jsx React.DOM
 */

/**
 * scripts/main.js
 *
 * This is the starting point for your application.
 * Take a look at http://browserify.org/ for more info
 */

'use strict';

var App = require('./components/app.js');

window.React = require('react/addons');
window.app = React.renderComponent(<App />, document.getElementById('main'));
