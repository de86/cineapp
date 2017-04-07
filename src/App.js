import React, { Component } from 'react';
import movieData from './actions/MovieData';

/*https://api.themoviedb.org/3/movie/76341?api_key={api_key}*/

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      year: "",
      rating: null
    };
  }
  
  componentDidMount() {
    var md = new movieData();
    md.search("movie", "fight club");
    this.setState({
      title: searchResults.title,
      year: searchResults.year,
      rating: searchResults.rating
    });
  }
  
  render() {
    console.log("render");
    return (
      <div>
        <h1>Hello World!</h1>
        <p>{ this.state.title }</p>
        <p>{ this.state.year }</p>
        <p>{ this.state.rating }</p>
      </div>
    );
  }
}

export default App;