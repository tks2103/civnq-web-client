/**
 * @jsx React.DOM
 */

'use strict';

var React               = require('react/addons'),
    r$                  = require('reqwest'),
    Header              = require('./Header'),
    Rankings            = require('./Rankings'),
    Body                = require('./Body'),
    UnconfirmedMatches  = require('./UnconfirmedMatches'),
    ConfirmedMatches    = require('./ConfirmedMatches'),
    PostMatch           = require('./PostMatch'),
    Grid                = require('react-bootstrap/Grid'),
    Row                 = require('react-bootstrap/Row'),
    Col                 = require('react-bootstrap/Col'),
    Form                = require('./Form');

var App = React.createClass({

  getInitialState: function() {
    return ( { 
      postMatchModal: false,
      body: "Rankings"
    } );
  },


  togglePostMatch: function() {
    this.setState({ postMatchModal: !this.state.postMatchModal });
  },


  displayUnconfirmedMatches: function() {
    this.setState({ body: "UnconfirmedMatches" });
  },


  displayConfirmedMatches: function() {
    this.setState({ body: "ConfirmedMatches" });
  },


  displayRankings: function() { 
    this.setState({ body: "Rankings" });
  },


  render: function() {
    return (
      <div id='app'>
        {this.state.postMatchModal ? <PostMatch togglePostMatch={this.togglePostMatch} /> : null }
        <Header togglePostMatch={this.togglePostMatch} 
                displayConfirmedMatches={this.displayConfirmedMatches} 
                displayUnconfirmedMatches={this.displayUnconfirmedMatches}
                displayRankings={this.displayRankings} />
        <Grid>
          {this.state.body == "Rankings" ? <Body /> : null}
          {this.state.body == "Rankings" ? <Rankings /> : null}
          {this.state.body == "UnconfirmedMatches" ? <UnconfirmedMatches /> : null}
          {this.state.body == "ConfirmedMatches" ? <ConfirmedMatches /> : null}
        </Grid>
        <Form />  
      </div>
    );
  }

});

module.exports = App;
