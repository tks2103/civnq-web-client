/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    Panel           = require('react-bootstrap/Panel'),
    Well            = require('react-bootstrap/Well'),
    ListGroup       = require('react-bootstrap/ListGroup'),
    ListGroupItem   = require('react-bootstrap/ListGroupItem');

var Match = React.createClass({

  render: function() {
    return (
      <Panel>
        <h3> Game #1000 </h3>
        <Well>
          <p>Type: FFA</p>
          <p>Reported by: Arvius</p>
        </Well>

        <Well>
          <ListGroup>
            <ListGroupItem>Arvius</ListGroupItem>
            <ListGroupItem>Lek</ListGroupItem>
            <ListGroupItem>FilthyRobot</ListGroupItem>
            <ListGroupItem>Panang</ListGroupItem>
            <ListGroupItem>Curry</ListGroupItem>
            <ListGroupItem>Strictly</ListGroupItem>
          </ListGroup>
        </Well>
        <Well>
          Comments
        </Well>
      </Panel>
    );
  }

});

module.exports = Match;
