const MovieRepository = require('../../repository/service/movie.repository');
const movieRepository = new MovieRepository();

class MovieService {
  async find(){
    return await movieRepository.find();
  }
}

module.exports = MovieService;
