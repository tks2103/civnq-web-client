/**
 * @jsx React.DOM
 */

'use strict';

var React           = require('react/addons'),
    r$              = require('reqwest'),
    Table           = require('react-bootstrap/Table');

var Rankings = React.createClass({

  getTableRows: function() {
    var data = [ [ 1, "Arvius", 1500, 19, 1, "95%", 19, 0, 1, 1600 ], 
                 [ 1, "Arvius", 1500, 19, 1, "95%", 19, 0, 1, 1600 ] ];
    return data.map(function(item) {
      return (
        <tr>
          <th>{item[0]}</th>
          <th>{item[1]}</th>
          <th>{item[2]}</th>
          <th>{item[3]}</th>
          <th>{item[4]}</th>
          <th>{item[5]}</th>
          <th>{item[6]}</th>
          <th>{item[7]}</th>
          <th>{item[8]}</th>
          <th>{item[9]}</th>
        </tr>
      );
    });
  },


  render: function() {
    var tableRows = this.getTableRows();

    return (
      <div>
        <Table responsive bordered striped>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Skill</th>
              <th>Wins</th>
              <th>Losses</th>
              <th>Win %</th>
              <th>Streak</th>
              <th>Days Idle</th>
              <th>Highest Rank</th>
              <th>Highest Skill</th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </Table>
      </div>
    );
  }

});

module.exports = Rankings;
