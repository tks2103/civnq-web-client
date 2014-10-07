/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    Match           = require('./Match');

var UnconfirmedMatches = React.createClass({

  render: function() {
    return (
      <div>
        <Match />
        <Match />
        <Match />
      </div>
    );
  }

});

module.exports = UnconfirmedMatches;
