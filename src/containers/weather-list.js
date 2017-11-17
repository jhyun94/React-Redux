import React, { Component} from 'react';
import { connect} from 'react-redux';
import Chart from '../components/charts';


class WeatherList extends Component {

  renderWeather(){
    return this.props.weather.map( (cityData) => {
      const name = cityData.city.name;
      const temp = cityData.list.map( (city) => {
        return city.main.temp*(9/5)-459.67
      })
      const pressures = cityData.list.map( (city) => {
        return city.main.pressure;
      })

      const humidities = cityData.list.map( (city) => {
        return city.main.humidity;
      })

      return (
        <tr key={name}>
          <td>{name}</td>
          <td><Chart data={temp} measurement={'fahrenheit'}/></td>
          <td><Chart data={pressures} measurement={'hPa'}/></td>
          <td><Chart data={humidities} measurement={'%'}/></td>
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
