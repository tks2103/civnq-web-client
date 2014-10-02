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


  handleGame: function(event) {
    this.setState({ game: event.nativeEvent.target.value });
  },


  handleType: function(event) {
    this.setState({ matchType: event.nativeEvent.target.value });
  },


  render: function() {
    var inputs = this.state.matchType == "Teamer" ? <TeamInput /> : <PlayerInput />;
    return (
      <div>
        <select onChange={this.handleGame} value={this.state.game}>
          <option value="CivV">Civilization V</option>
          <option value="CivBE">Civilization Beyond Earth</option>
        </select>
        <select onChange={this.handleType} value={this.state.matchType}>
          <option value="FFA">FFA</option>
          <option value="Duel">Duel</option>
          <option value="Teamer">Teamer</option>
        </select>
        {inputs}
      </div>
    );
  }

});

module.exports = Form;

