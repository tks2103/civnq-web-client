/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    r$              = require('reqwest'),
    Dropdown        = require('./Dropdown'),
    Navbar          = require('react-bootstrap/Navbar'),
    Nav             = require('react-bootstrap/Nav'),
    NavItem         = require('react-bootstrap/NavItem'),
    MenuItem        = require('react-bootstrap/MenuItem'),
    DropdownButton  = require('react-bootstrap/DropdownButton'),
    Form            = require('./Form');

var App = React.createClass({

  render: function() {
    return (
      <div id='app'>
        <Navbar fluid staticTop>
          <Nav>
            <NavItem key={1} href="#">Post a Game</NavItem>
            <DropdownButton key={3} title="View Matches">
              <MenuItem key="1">Unconfirmed Matches</MenuItem>
              <MenuItem key="2">Recently Confirmed</MenuItem>
            </DropdownButton>
            <NavItem key={2} href="#">Login</NavItem>
          </Nav>
        </Navbar>
        <Form>
        </Form>
      </div>
    );
  }

});

module.exports = App;
