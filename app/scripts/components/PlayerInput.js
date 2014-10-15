/**
 * @jsx React.DOM
 */

'use strict';

var React     = require('react/addons'),
    Button    = require('react-bootstrap/Button'),
    Input     = require('react-bootstrap/Input');


var PlayerInput  = React.createClass({

  getInitialState: function() {
    return {
       inputs: 2,
       validations: ["normal", "normal"]
    }
  },


  validate: function(player) {
    var length = player.length;
    if (length > 3) return 'success';
    else if (length > 1) return 'warning';
    else if (length > 0) return 'error';
  },


  handleClick: function(event) {
    event.preventDefault();
    this.setState({inputs: this.state.inputs +1})
  },


  logPlayers: function() { 
    var players = [];
    var validations = [];
    for(var i = 0; i < this.state.inputs; i++) {
      var player = (this.refs['playerInput' + i].getValue());
      validations.push(this.validate(player));
      //cache validationState
      players.push(player);
    } 
    this.props.update(players);
    this.setState({ validations: validations });
  },


  validationState: function(i) { 
    return this.state.validations[i];
  },

  
  generateInputs: function(num) {
    var inputs = [];
    for(var i = 0; i < num; i++) {
      var playerInput = "playerInput" + i; 
      inputs.push(
        <Input
          onKeyUp={this.logPlayers}
          ref={playerInput}
          key={i}
          type="text"
          value={this.state.value}
          placeholder="Player Name"
          label=""
          help=""
          bsStyle={this.validationState(i)}
          hasFeedback
          groupClassName="group-class"
          wrapperClassName="wrapper-class"
          labelClassName="label-class" />
      ); 
    }
    return inputs;
  },
  
  isMax: function() {
    return (this.state.inputs == this.props.max);
  },


  renderButton: function() {
    if (this.isMax() == false) {
      return (<Button onClick={this.handleClick}>+</Button>) 
    } else {
      return null;  
    } 
  },


  render: function() {
    var inputElements = this.generateInputs(Math.min(this.state.inputs, this.props.max));
    return (
      <div>
        Players
        {inputElements}
        {this.renderButton()}
      </div>
    );
  }

});

module.exports = PlayerInput;
