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


  render: function() {
    var inputs = [];
    for(var i = 0; i < this.state.inputs-1; i++) {
      inputs.push(<input></input>);
    }
    inputs.push(<input onKeyUp={this.handleKeyUp} ref="lastInput"></input>);

    return (
      <form>
        Teams
        {inputs}
      </form>
    );
  }

});

module.exports = PlayerInput;
