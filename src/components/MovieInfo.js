import React, { Component } from 'react';

class MovieInfo extends Component {
    render() {
        return(
            <div>
                <h1>{ this.props.title }</h1>
                <p>{ this.props.releaseDate }</p>
                <p>{ this.props.rating }</p>
            </div>   
        )
    }
}

export default MovieInfo;