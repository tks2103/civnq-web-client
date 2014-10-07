/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    r$              = require('reqwest'),
    Header          = require('./Header'),
    Rankings        = require('./Rankings'),
    Grid            = require('react-bootstrap/Grid'),
    Body            = require('./Body'),
    Row             = require('react-bootstrap/Row'),
    Col             = require('react-bootstrap/Col'),
    Form            = require('./Form');

var App = React.createClass({

  render: function() {
    return (
      <div id='app'>
        <Header />
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
