/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    Match           = require('./Match');

var ConfirmedMatches = React.createClass({
  
  getMatch: function() { 
    var confirmedMatches = this.props.data.confirmed_matches;
    var matchesToRender = confirmedMatches.map(function(i){
      return (
          <Match data={i}/>
      );
    });  
    return matchesToRender;
  },

  render: function() {
    var matches = this.getMatch();
    return (
      <div>
        {matches}
      </div>
    );
  }

});


module.exports = ConfirmedMatches;
