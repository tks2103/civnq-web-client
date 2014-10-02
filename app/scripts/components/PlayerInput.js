/**
 * @jsx React.DOM
 */

'use strict';

var React     = require('react/addons');


var PlayerInput  = React.createClass({

  getInitialState: function() {
    return { inputs: 2 }
  },


  handleKeyUp: function() {
    this.setState({ inputs: this.state.inputs + 1 });
  },

  
  generateInputs: function(num) {
    var inputs = [];
    for(var i = 0; i < num-1; i++) {
      inputs.push(<input></input>);
    }
    inputs.push(<input onKeyUp={this.handleKeyUp} ref="lastInput"></input>);
    return inputs;
  },


  render: function() {
    var inputElements = this.generateInputs(Math.min(this.state.inputs, this.props.max));
    return (
      <form>
        Teams
        {inputElements}
      </form>
    );
  }

});

module.exports = PlayerInput;
