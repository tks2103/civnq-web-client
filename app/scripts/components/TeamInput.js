/**
 * @jsx React.DOM
 */

'use strict';

var React       = require('react/addons'),
    PlayerInput = require('./PlayerInput');

var TeamInput  = React.createClass({

 getInitialState: function() {
    return { teams: 2 }
 },

 generateTeamElement: function(i) {
    return (
      <div key={i}>
        <label>Team <span> {i = i +1}</span></label>
        <PlayerInput max={10}/>
        <textarea ref="comment" placeholder="Comments"></textarea>
      </div>
    )
 },


 generateTeams: function(num) {
    var teams = [];
    for(var i = 0; i < num; i++) {
      teams.push(this.generateTeamElement(i));
    }
    return teams;
  },
 
 
 handleClick: function(event) {
    event.preventDefault();
    this.setState({teams: this.state.teams +1});
 },
 

 generateButton: function(){
    return (<button onClick={this.handleClick}>New Team</button>); 
 },


 render: function() {
    var inputTeams = this.generateTeams(this.state.teams);
    return (
      <div>
        {inputTeams}
        {this.generateButton()}
      </div>
    );
 }

});

module.exports = TeamInput;

