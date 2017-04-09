import axios from 'axios';
import Config from './../config/Config';

// All Axios calls to TMDB are contained
// within this class. This keeps us from littering
// our App with Axios calls and should we change
// our AJAX library it can easily be replaced in this
// one module
class MovieData {
  search(searchType, movieName){
      
    // Build the URL we will make our GET request to
    var config = new Config();
    var apiKey = config.getApiKey();
    var baseUrl = "https://api.themoviedb.org/3/search/"
    var requestURL = baseUrl + searchType
                   + "?api_key=" + apiKey
                   + "&language=en-US"
                   + "&query=" + movieName
                   + "&page=1"
                   + "&include_adult=false";
    
    // Return our promise so we can set state
    // in the calling React component
    return axios.get(requestURL);  
  }
}

export default MovieData;