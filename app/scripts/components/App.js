/**
 * @jsx React.DOM
 */

'use strict';

var React       = require('react/addons'),
    r$          = require('reqwest'),
    TopBar      = require('./TopBar'),
    Dropdown    = require('./Dropdown'),
    Form        = require('./Form');

var App = React.createClass({

  render: function() {
    return (
      <div id='app'>
        <TopBar />
        <Form>
        </Form>
      </div>
    );
  }

});

module.exports = App;
