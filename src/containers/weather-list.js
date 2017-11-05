import React, { Component} from 'react';
import { connect} from 'react-redux';

import Chart from '../components/charts';


class WeatherList extends Component{

  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map( (weather) =>{
      return weather.main.temp
    })



    return(
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Chart />
        </td>
      </tr>
    )
  }

  render(){
    return(
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
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}){
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);