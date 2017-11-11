import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';


import { getWeather } from '../actions/index';


class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();
    this.props.getWeather( this.state.term);
  }

  render(){
    return(
      <form onSubmit={ this.onFormSubmit} >
        <input
          placeholder="Enter your favorite City"
          value={ this.state.term}
          onChange={this.onInputChange} />
        <button type="submit">Submit</button>
      </form>
    )
  }

}


function mapDispatchToProps(dispatch){
  return bindActionCreators({ getWeather}, dispatch)
}


export default connect(null, mapDispatchToProps)(SearchBar);