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

  
  generateInputs: function(num) {
    var inputs = [];
    for(var i = 0; i < num-1; i++) {
      inputs.push(<input></input>);
    }
    inputs.push(<input ref="lastInput"></input>);
    return inputs;
  },
  
  isMax: function() {
    console.log(this.state.inputs);
    console.log(this.props.max);
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
      <form>
        Teams
        {inputElements}
        {this.renderButton()}
      </form>
    );
  }

});

module.exports = PlayerInput;
