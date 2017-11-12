import React, { Component} from 'react';
import { connect} from 'react-redux';


class WeatherList extends Component {

  render(){
    console.log( this.props.weather)
    return (
      <div>WeatherList</div>
    )
  }
}

function mapStateToProps(state){
  return { weather: state.weather}
}


export default connect(mapStateToProps)(WeatherList);
