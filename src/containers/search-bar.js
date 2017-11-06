import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }


  onInputChange(event){
    console.log( event.target.value)
    this.setState({term: event.target.value});

  }

  onFormSubmit(event){
    event.preventDefault();
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