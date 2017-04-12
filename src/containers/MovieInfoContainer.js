import React, { Component } from 'react';
import MovieInfo from '../components/MovieInfo';

class MovieInfoContainer extends Component {
    render() {
        return (
          <div>
            {
              this.props.results.map(function(movie){
                return(
                    <MovieInfo
                        title={ movie.title }
                        releaseDate={ movie.release_date }
                        rating = { movie.vote_average } />
                );
              })
            }
          </div>
        );
      }
}

export default MovieInfoContainer;