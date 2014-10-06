/**
 * @jsx React.DOM
 */

'use strict';

var React     = require('react/addons');


var PlayerInput  = React.createClass({

  getInitialState: function() {
    return { inputs: 2 }
  },


  handleClick: function(event) {
    event.preventDefault();
    this.setState({inputs: this.state.inputs +1})
  },


  logPlayers: function() { 
    var players = [];
    for(var i = 0; i < this.state.inputs; i++) {
      var player = (this.refs['playerInput' + i].getDOMNode().value.trim());
      players.push(player);
    } 
    this.props.update(players);
  },

  
  generateInputs: function(num) {
    var inputs = [];
    for(var i = 0; i < num; i++) {
      var playerInput = "playerInput" + i; 
      inputs.push(<input onKeyUp={this.logPlayers} ref={playerInput} key={i}></input>);
    }
    return inputs;
  },
  
  isMax: function() {
    return (this.state.inputs == this.props.max);
  },


  renderButton: function() {
    if (this.isMax() == false) {
      return (<button onClick={this.handleClick}>+</button>) 
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
