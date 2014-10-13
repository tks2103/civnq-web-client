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


  updateTeams: function(obj) {
     this.setState({ teams: obj}); 
  },  
  

  logComment: function() { 
    var comment_input = this.refs.comment.getDOMNode().value; 
    this.setState({comment: comment_input});
  },


  handleGame: function(event) {
    this.setState({ game: event.nativeEvent.target.value });
  },


  handleType: function(event) {
    this.setState({ matchType: event.nativeEvent.target.value });
  },


  handleSubmit: function() {
    this.props.update({
      game: this.state.game, 
      match_type: this.state.match_type,
      teams: this.state.teams,
      comment: this.state.comment
    });
  },


  render: function() {
    var max = this.state.match_type == "Duel" ? 2 : 100;
    var inputs = this.state.match_type == "Teamer" ? <TeamInput update={this.updateTeams} /> : <PlayerInput update={this.updateTeams} max={max}/>;
    return (
       <div>
         <select ref="game" onChange={this.handleGame} value={this.state.game}>
           <option value="CivV">Civilization V</option>
           <option value="CivBE">Civilization Beyond Earth</option>
         </select>
         <select ref="match_type" onChange={this.handleType} value={this.state.match_type}>
           <option value="FFA">FFA</option>
           <option value="Duel">Duel</option>
           <option value="Teamer">Teamer</option>
         </select>
         {inputs}
         <textarea ref="comment" onKeyUp={this.handleSubmit} onChange={this.logComment} placeholder="Comments"></textarea>
       </div>
    );
  }

});

module.exports = Form;

