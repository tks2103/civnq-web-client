/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    r$              = require('reqwest'),
    Header          = require('./Header'),
    Rankings        = require('./Rankings'),
    Body            = require('./Body'),
    PostMatch       = require('./PostMatch'),
    Grid            = require('react-bootstrap/Grid'),
    Row             = require('react-bootstrap/Row'),
    Col             = require('react-bootstrap/Col'),
    Form            = require('./Form');

var App = React.createClass({

  getInitialState: function() {
    return ( { modal: false } );
  },


  togglePostMatch: function() {
    this.setState({ modal: !this.state.modal });
  },


  render: function() {
    return (
      <div id='app'>
        {this.state.modal ? <PostMatch togglePostMatch={this.togglePostMatch} /> : null }
        <Header togglePostMatch={this.togglePostMatch} />
        <Grid>
          <Body />
          <Rankings />
          <Rankings />
        </Grid>
        <Form />  
      </div>
    );
  }

});

module.exports = App;
