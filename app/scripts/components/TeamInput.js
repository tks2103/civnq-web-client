/**
 * @jsx React.DOM
 */

'use strict';

var React       = require('react/addons'),
    PlayerInput = require('./PlayerInput');

var TeamInput  = React.createClass({

 getInitialState: function() {
    return { 
      teams: 2,
      players: []
    }
 },
 

 updatePlayers: function(i, obj) {
    var players = this.state.players;
    players[i-1] = obj;
    this.setState({ players: players });
    this.props.update(players);
 },  
  

 generateTeamElement: function(i) {
    return (
      <div key={i}>
        <label>Team <span> {i = i +1}</span></label>
        <PlayerInput update={this.updatePlayers.bind(this, i)} max={10}/>
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
        <textarea ref="comment" placeholder="Comments"></textarea>
        {this.generateButton()}
      </div>
    );
 }

});

module.exports = TeamInput;

