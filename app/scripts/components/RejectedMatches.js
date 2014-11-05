/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    Match           = require('./Match');

var RejectedMatches = React.createClass({
  

  getMatch: function() { 
    var rejectedMatches = this.props.data.rejected_matches;
    var matchesToRender = rejectedMatches.map(function(i){
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

module.exports = RejectedMatches;
