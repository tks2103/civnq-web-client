/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    Match           = require('./Match');

var UnconfirmedMatches = React.createClass({

  render: function() {
    console.log(this.props.data.unconfirmed_matches);
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
