import React, { Component} from 'react';
import { connect} from 'react-redux';


class WeatherList extends Component {

  render(){
    return (
      <div>WeatherList</div>
    )
  }
}

function mapStateToProps(state){
  return { weather: state.weather}
}


export default connect(mapStateToProps)(WeatherList);
