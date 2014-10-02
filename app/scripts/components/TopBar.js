/**
 * @jsx React.DOM
 */

'use strict';

var React     = require('react/addons');


var TopBar  = React.createClass({

  render: function() {
    return (
      <div className="contain-to-grid sticky">
        <nav className="top-bar" role="navigation" data-options="sticky_on: large" data-topbar>
          <button className="button right">Pizza</button>
        </nav>
      </div>
    );
  }

});

module.exports = TopBar;

