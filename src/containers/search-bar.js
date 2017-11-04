import React, { Component} from 'react';

export default class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state = {
      term: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event){
    this.setState({ term: event.target.value});
    console.log( this.state.term)
  }

  onFormSubmit(event){
    event.preventDefault();
  }

  render(){
    return (
      <form className="input-group"
              onSubmit={ this.onFormSubmit} >
        <input
          placeholder="Enter your favorite city"
          className="form-control"
          onChange={ this.onInputChange}
          value={ this.state.term} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}