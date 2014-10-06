/**
 * @jsx React.DOM
 */

'use strict';

var React       = require('react/addons'),
    TeamInput   = require('./TeamInput'),
    PlayerInput = require('./PlayerInput');


var Form  = React.createClass({

  getInitialState: function() {
    return {
      game: "CivV",
      matchType: "FFA"
    }
  },


  updatePlayers: function(obj) {
     this.setState({ players: obj}); 
  },  


  handleGame: function(event) {
    this.setState({ game: event.nativeEvent.target.value });
  },


  handleType: function(event) {
    this.setState({ matchType: event.nativeEvent.target.value });
  },


  logMatch: function(obj) {
    console.log(obj);
  },


  handleSubmit: function(event) {
    event.preventDefault();
    this.logMatch({
      game: this.state.game, 
      matchType: this.state.matchType,
      players: this.state.players 
    });
  },


  render: function() {
    var max = this.state.matchType == "Duel" ? 2 : 100;
    var inputs = this.state.matchType == "Teamer" ? <TeamInput /> : <PlayerInput update={this.updatePlayers} max={max}/>;
    return (
      <div>
        <select ref="game" onChange={this.handleGame} value={this.state.game}>
          <option value="CivV">Civilization V</option>
          <option value="CivBE">Civilization Beyond Earth</option>
        </select>
        <select ref="match_type" onChange={this.handleType} value={this.state.matchType}>
          <option value="FFA">FFA</option>
          <option value="Duel">Duel</option>
          <option value="Teamer">Teamer</option>
        </select>
        {inputs}
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }

});

module.exports = Form;

