/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    Match           = require('./Match');

var UnconfirmedMatches = React.createClass({
  

  getMatch: function() { 
    var unconfirmedMatches = this.props.data.unconfirmed_matches;
    var matchesToRender = unconfirmedMatches.map(function(i){
      return (
          <Match data={i}/>
      );
    });  
    return matchesToRender;
  },

  render: function() {
    var matches = this.getMatch();
    console.log(matches);
    return (
      <div>
        {matches}
      </div>
    );
  }

});

module.exports = UnconfirmedMatches;
