var React = require('react');
var WeatherForm = require('WeatherForm');
var Message = require('Message');

var Forecast = React.createClass({
  getInitialState: function () {
    return {
        location: 'Washington',
        temp: 60
    }
  },
  handleSearch: function (location) {
    this.setState({
      location: location,
      temp: 25
    });
  },
  render: function () {
    var {temp, location} = this.state;

    return (
      <div>
        <h3>Forecast</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        <Message temp={temp} location={location}/>
      </div>
    )
  }
});
module.exports = Forecast;