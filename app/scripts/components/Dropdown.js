/**
 * @jsx React.DOM
 */

'use strict';

var React     = require('react/addons');


var Dropdown  = React.createClass({
  
  getInitialState: function(){
    return { hover: false };
  },


  handleMouseEnter: function() {
    this.setState({ hover: true });
  },
  
  
  handleMouseLeave: function() {
    this.setState({ hover: false });
  },
  
  
  render: function() {
    return (
      <div onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} >
        <button className="dropdown">Post a game</button>
        {this.state.hover ? (<ul className="drop1 button"><li>hullo</li></ul>) : null}
      </div>
    );
  }

});

module.exports = Dropdown;

