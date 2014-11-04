/**
 * @jsx React.DOM
 */

'use strict';

var React       = require('react/addons'),
    Input       = require('react-bootstrap/Input');
 
var InputTest = React.createClass({
  
  getInitialState: function() {
    return {
      value: ''
    };
  },


  validationState: function() {
    var length = this.state.value.length;
    if (length > 3) return 'success';
    else if (length > 1) return 'warning';
    else if (length > 0) return 'error';
  },


  handleChange: function() {
    // This could also be done using ReactLink:
    // http://facebook.github.io/react/docs/two-way-binding-helpers.html
    this.setState({
      value: this.refs.input.getValue()
    });
  },


  render: function() {
    return (
        <Input
          type="text"
          value={this.state.value}
          placeholder="Player Name"
          label=""
          help=""
          bsStyle={this.validationState()}
          hasFeedback
          ref="input"
          groupClassName="group-class"
          wrapperClassName="wrapper-class"
          labelClassName="label-class"
          onChange={this.handleChange} />
    );
  }
});
 
module.exports = InputTest;

