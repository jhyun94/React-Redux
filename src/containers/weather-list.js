import React, { Component} from 'react';
import { connect} from 'react-redux';
import Chart from '../components/charts';


class WeatherList extends Component {

  renderWeather(){
    return this.props.weather.map( (cityData) => {
      console.log(cityData);
      const name = cityData.city.name;
      const temp = cityData.list.map( (city) => {
        return city.main.temp*(9/5)-459.67
      })
      return (
        <tr key={name}>
          <td>{name}</td>
          <td><Chart data={temp}/></td>
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
