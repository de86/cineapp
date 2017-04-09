import React, { Component } from 'react';


class MovieInfoContainer extends Component {
    render() {
        return (
          <div>
            <h1>{ this.props.title }</h1>
            <p>{ this.props.year }</p>
            <p>{ this.props.rating }</p>
          </div>
        );
      }
}

export default MovieInfoContainer;