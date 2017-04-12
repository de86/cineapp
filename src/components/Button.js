import React, { Component } from 'react';
import movieData from '../actions/MovieData';

class Button extends Component {
    constructor(props){
      super(props);
      
      this.handleClick = this.handleClick.bind(this);
    }
  
    
    handleClick() {
    // Query TMDB with our search string and return the promise
    // back to app so we can save the results in state
        
      var md = new movieData();
      var promise = md.search("movie", this.props.searchString);
      this.props.clickHandler(promise);
    }
  
    
    render() {
        return(
          <button className="search" onClick={this.handleClick}>
            Search  
          </button>
        );
    }
}

export default Button