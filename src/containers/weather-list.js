import React, { Component} from 'react';
import { connect} from 'react-redux';
import Chart from '../components/charts';


class WeatherList extends Component {

  renderWeather(){
    return this.props.weather.map( (cityData) => {
      const name = cityData.city.name;
      return (
        <tr key={name}>
          <td>{name}</td>
          <td><Chart /></td>
        </tr>
      )
    })
  }

  render(){
    return (
     <table className="table">
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
        </tr>
      </thead>
      <tbody>
        {this.renderWeather()}
      </tbody>
     </table>
    )
  }
}

function mapStateToProps(state){
  return { weather: state.weather}
}


export default connect(mapStateToProps)(WeatherList);
