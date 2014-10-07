/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    Match           = require('./Match');

var ConfirmedMatches = React.createClass({

  render: function() {
    return (
      <div>
        <Match />
        <Match />
        <Match />
        <Match />
      </div>
    );
  }

});

module.exports = ConfirmedMatches;
