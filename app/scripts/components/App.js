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
    r$({
      url:         '/api/unconfirmed_matches',
      type:        'json',
      method:      'GET',
      contentType: 'application/json'
    }).then(function(response) {
      this.setState({ body: "UnconfirmedMatches", unconfirmed_matches: response });
    }.bind(this)).fail(function(response) {
      console.log('fail');
    });
  },


  displayConfirmedMatches: function() {
     r$({
      url:         '/api/confirmed_matches',
      type:        'json',
      method:      'GET',
      contentType: 'application/json'
    }).then(function(response) {
      this.setState({ body: "ConfirmedMatches", confirmed_matches: response });
    }.bind(this)).fail(function(response) {
      console.log('fail');
    });
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
            {this.state.body == "UnconfirmedMatches" ? <UnconfirmedMatches data={this.state.unconfirmed_matches} /> : null}
            {this.state.body == "ConfirmedMatches" ? <ConfirmedMatches data={this.state.confirmed_matches} /> : null}
        </Grid>
      </div>
    );
  }

});

module.exports = App;
