/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    Modal           = require('react-bootstrap/Modal'),
    Button          = require('react-bootstrap/Button');

var PostMatch = React.createClass({

  render: function() {
    return (
      <Modal title={"Post a Match"} onRequestHide={this.props.togglePostMatch}>
        <div className="modal-body">
          Dat Post Match Tho
        </div>
        <div className="modal-footer">
          <Button onClick={this.props.togglePostMatch} bsStyle="primary">Post Match</Button>
        </div>
      </Modal>
    );
  }

});

module.exports = PostMatch;
