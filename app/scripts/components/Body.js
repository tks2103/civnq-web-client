/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    Row             = require('react-bootstrap/Row'),
    Col             = require('react-bootstrap/Col'),
    Panel           = require('react-bootstrap/Panel'),
    Jumbotron       = require('react-bootstrap/Jumbotron');

var Body = React.createClass({

  render: function() {
    return (
      <Jumbotron>
        <Row className="show-grid">
          <Col md={6}>
            <Panel>
              <h2> Civilization V Rankings </h2>
              <p> #1 Arvius </p>
              <p> #2 Lek </p>
              <p> #3 Filthy Robot </p>
            </Panel>
          </Col>
          <Col md={6}>
            <Panel>
              <h2> Civilization BE Rankings </h2>
              <p> #1 Arvius </p>
              <p> #2 Lek </p>
              <p> #3 Filthy Robot </p>
            </Panel>
          </Col>
        </Row>
      </Jumbotron>
    );
  }

});

module.exports = Body;
