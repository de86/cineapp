import axios from 'axios';

class MovieData {
  search(searchType, movieName){
    var apiKey = "";
    var baseUrl = "https://api.themoviedb.org/3/search/"
    var requestURL = baseUrl + searchType
                   + "?api_key=" + apiKey
                   + "&language=en-US"
                   + "&query=" + movieName
                   + "&page=1"
                   + "&include_adult=false";
    
    
    axios.get(requestURL)
      .then(function(response, callback){
        var storedResults = {
          title: response[0].title,
          year: response[0].release_date,
          rating: response[0].popularity
        };
      })
      .catch(function(error){
        return error;
      });  
  }
}

export default MovieData;