import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props){
    super(props)

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
  }


  onInputChange(event){
    console.log( event.target.value)
    this.setState({term: event.target.value});

  }

  render(){
    return(
      <form>
        <input
          placeholder="Enter your favorite City"
          value={ this.state.term}
          onChange={this.onInputChange} />
        <button type="submit">Submit</button>
      </form>
    )
  }

}