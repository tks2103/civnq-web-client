/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    TeamInput       = require('./TeamInput'),
    Input           = require('react-bootstrap/Input'),
    DropdownButton  = require('react-bootstrap/DropdownButton'),
    MenuItem        = require('react-bootstrap/MenuItem'),
    PlayerInput     = require('./PlayerInput');

var GAME_TYPE = {
  "CivV": 0,
  "CivBE": 1
};

var MATCH_TYPE = {
  "FFA": 0,
  "Duel": 1,
  "Teamer": 2
};


var Form  = React.createClass({

  getInitialState: function() {
    return {
      game: GAME_TYPE["CivV"],
      match_type: MATCH_TYPE["FFA"]
    }
  },


  updateTeams: function(obj) {
     this.setState({ teams: obj });
     this.prepareSubmit();
  },


  logComment: function() {
    var comment_input = this.refs.comment.getValue();
    this.setState({comment: comment_input});
    this.prepareSubmit();
  },


  handleGame: function(game) {
    var game = GAME_TYPE[game];
    this.setState({ game: game });
    this.prepareSubmit();
  },


  handleType: function(match) {
    var match_type = MATCH_TYPE[match];
    this.setState({ match_type: match_type });
    this.prepareSubmit();
  },


  stateObject: function() {
    return {
      game: this.state.game,
      match_type: this.state.match_type,
      teams: this.state.teams,
      comment: this.state.comment
    };
  },


  prepareSubmit: function() {
    this.props.update(this.stateObject());
  },


  render: function() {
    var max = this.state.match_type == "Duel" ? 2 : 100;
    var inputs = this.state.match_type == "Teamer" ? <TeamInput update={this.updateTeams} /> : <PlayerInput update={this.updateTeams} max={max}/>;
    return (
       <div>
         <DropdownButton title={"Game"} ref="game" onChange={this.handleGame} value={this.state.game}>
           <MenuItem onSelect={this.handleGame.bind(this, "CivV")} value="CivV">Civilization V</MenuItem>
           <MenuItem onSelect={this.handleGame.bind(this, "CivBE")} value="CivBE">Civilization Beyond Earth</MenuItem>
         </DropdownButton>
         <DropdownButton title={"Match Type"} ref="match_type" onChange={this.handleType} value={this.state.match_type}>
           <MenuItem onSelect={this.handleType.bind(this, "FFA")} value="FFA">FFA</MenuItem>
           <MenuItem onSelect={this.handleType.bind(this, "Duel")} value="Duel">Duel</MenuItem>
           <MenuItem onSelect={this.handleType.bind(this, "Teamer")} value="Teamer">Teamer</MenuItem>
         </DropdownButton>
         {inputs}
         Comments
         <Input type="textarea" label=""  ref="comment" onChange={this.logComment} />
       </div>
    );
  }

});

module.exports = Form;

