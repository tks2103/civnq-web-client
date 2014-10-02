/**
 * @jsx React.DOM
 */

'use strict';

var React     = require('react/addons'),
    r$        = require('reqwest'),
    TopBar    = require('./TopBar'),
    Dropdown  = require('./Dropdown');

var App = React.createClass({

  req: function() {
    var data = {};
    r$({
      url:         '/api/matches',
      type:        'json',
      method:      'GET',
      contentType: 'application/json',
      data:        data
    }).then(function(response) {
      console.log(response);
    }).fail(function(response) {
    });
  },

  render: function() {
    this.req();
    return (
      <div id='app'>
        <TopBar />
        <Dropdown />
      </div>
    );
  }

});

module.exports = App;
