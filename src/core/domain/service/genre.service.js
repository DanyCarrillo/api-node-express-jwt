const GenreRepository = require('../../repository/service/genre.repository');
const genreRepository = new GenreRepository();

class GenreService {
  async find(){
    return await genreRepository.find();
  }
}

module.exports = GenreService;
