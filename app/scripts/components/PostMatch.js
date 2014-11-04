/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    r$              = require('reqwest'),
    Modal           = require('react-bootstrap/Modal'),
    Button          = require('react-bootstrap/Button'),
    Form            = require('./Form');

var PostMatch = React.createClass({
  
  updateMatchState: function(obj) {
    this.setState({ match: obj}); 
  },  
 

  handleClick: function() {
    this.submitMatch(this.state.match);
    this.props.togglePostMatch();
  },  
 

  submitMatch: function(obj) {
    var obj = { unconfirmed_match: obj };
    r$({
      url:         '/api/unconfirmed_matches',
      type:        'json',
      method:      'POST',
      data:        JSON.stringify(obj),
      contentType: 'application/json'
    }).then(function(response) {
      console.log(response);
    }.bind(this)).fail(function(response) {
      console.log('fail');
    });
  },


  render: function() {
    return (
      <Modal title={"Post a Match"} onRequestHide={this.props.togglePostMatch}>
        <div className="modal-body">
          <Form update={this.updateMatchState} />
        </div>
        <div className="modal-footer">
          <Button onClick={this.handleClick} bsStyle="primary">Post Match</Button>
        </div>
      </Modal>
    );
  }

});

module.exports = PostMatch;
