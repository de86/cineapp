import React, { Component } from 'react';
import movieData from './actions/MovieData';
import SearchContainer from './containers/SearchContainer';
import MovieInfoContainer from './containers/MovieInfoContainer';

class App extends Component {
  someOtherFunc(){
    console.log('Function');
  }
  
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      title: "",
      year: "",
      rating: null
    };
    
    // Bind this react component to the 'this' keyword in our functions
    this.handleSearchFieldChange = this.handleSearchFieldChange.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }
  
  
  componentDidMount() {
    // Do our Axios get request of movie data after component
    // has been succesfully added to the DOM. This ensures
    // that the component is in the DOM when setState
    // re-renders it
      
    var md = new movieData();
    
    md.search("movie", "Lord of the rings")
        .then(function (response){
            this.setState({
              title: response.data.results[0].title,
              year: response.data.results[0].release_date,
              rating: response.data.results[0].vote_average
            });
        }.bind(this))
        .catch(function (error){
            console.log(error);
        });
  }


  handleSearchFieldChange(searchFieldString) {
      // Update our searchString used to query the TMDB library
      // Passed down to SearchContainer >> SearchField
      
      this.setState({
          searchString: searchFieldString
      });
  }


  handleSearchClick(promise) {
      // Update our state with the Axios response data.
      // This function is passed down to SearchContainer >> Button
      
      promise
        .then(function(response){
            this.setState({
                title: response.data.results[0].title,
                year: response.data.results[0].release_date,
                rating: response.data.results[0].vote_average
            });
        }.bind(this))
        .catch(function(error){
            console.log(error);
        });
  }
    
    
  render() {
    return (
      <div>
        <h1>CineApp</h1>
        <SearchContainer
            searchString={this.state.searchString}
            searchClickHandler={this.handleSearchClick}
            searchFieldChangeHandler={this.handleSearchFieldChange} />
        
        <MovieInfoContainer
            title={this.state.title}
            year={this.state.year}
            rating={this.state.rating} />
      </div>
    );
  }
}

export default App;