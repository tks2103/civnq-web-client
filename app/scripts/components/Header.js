/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    r$              = require('reqwest'),
    Navbar          = require('react-bootstrap/Navbar'),
    Nav             = require('react-bootstrap/Nav'),
    NavItem         = require('react-bootstrap/NavItem'),
    MenuItem        = require('react-bootstrap/MenuItem'),
    DropdownButton  = require('react-bootstrap/DropdownButton'),
    Form            = require('./Form');

var Header = React.createClass({

  render: function() {
    return (
      <Navbar fluid staticTop inverse>
        <Nav collapsable navbar pullRight>
          <a className="navbar-brand" href="#">Civ No Quitters</a>
          <NavItem onClick={this.props.togglePostMatch} key={1} href="#">Post a Match</NavItem>
          <DropdownButton key={3} title="View Matches">
            <MenuItem key="1">Unconfirmed Matches</MenuItem>
            <MenuItem key="2">Recently Confirmed</MenuItem>
          </DropdownButton>
          <NavItem key={2} href="#">Login</NavItem>
        </Nav>
      </Navbar>
    );
  }

});

module.exports = Header;
