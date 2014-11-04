/**
 * @jsx React.DOM
 */

'use strict';

var React       = require('react/addons'),
    Button      = require('react-bootstrap/Button'),
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

    players = players.map(function(player) {
      return player.map(function(pl) {
        if(typeof pl === 'string') {
          return pl;
        } else {
          return pl[0];
        }
      });
    });
    this.setState({ players: players });
    this.props.update(players);
 },


 generateTeamElement: function(i) {
    return (
      <div key={i}>
        <label>Team <span> {i = i + 1}</span></label>
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
    return (<Button onClick={this.handleClick}>New Team</Button>);
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

