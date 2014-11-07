/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    r$              = require('reqwest'),
    Panel           = require('react-bootstrap/Panel'),
    Well            = require('react-bootstrap/Well'),
    Button          = require('react-bootstrap/Button'),
    ListGroup       = require('react-bootstrap/ListGroup'),
    ListGroupItem   = require('react-bootstrap/ListGroupItem');

var Match = React.createClass({ 
 
 generatePlayerElement: function(i) {
    return (
      <div key={i}>
        <ListGroupItem>{this.props.data.teams[i]}</ListGroupItem>
      </div>
    )
 },


 generatePlayers: function(num) {
    var players = [];
    for(var i = 0; i < num; i++) {
      players.push(this.generatePlayerElement(i));
    }
    return players;
 },

  rejectMatch: function() {
    var obj = { id: this.props.data.id };
    r$({
      url:         '/api/unconfirmed_matches/' + this.props.data.id + '/reject',
      type:        'json',
      method:      'POST',
      contentType: 'application/json'
    }).then(function(response) {
      this.setState({ user: response });
    }.bind(this)).fail(function(response) {
      console.log('fail');
    });
  },
 

  render: function() {
    var players = this.generatePlayers(this.props.data.teams.length);
    return (
      <Panel>
        <h3> {this.props.data.game} </h3>
        <Button onClick={this.rejectMatch}>Reject</Button>
        <Well>
          <p>Type: {this.props.data.match_type}</p>
          <p>{this.props.data.reporter_id}</p>
        </Well>

        <Well>
          <ListGroup>
            {players}
          </ListGroup>
        </Well>
        <Well>
          Comments:
          {this.props.data.comment}
        </Well>
      </Panel>
    );
  }

});

module.exports = Match;
