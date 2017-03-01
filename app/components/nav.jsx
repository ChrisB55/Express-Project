var React = require('react');
var {Link} = require('react-router');


var Nav = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Navigation</h2>
        <Link  to ="/"> Get the Forecast</Link>
        <Link  to ="/about"> About</Link>
        <Link  to ="/examples"> Examples</Link>
        </div>
    );
  }
});

module.exports = Nav;
