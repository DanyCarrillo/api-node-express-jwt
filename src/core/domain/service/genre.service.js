const GenreRepository = require('../../repository/service/genre.repository');
const genreRepository = new GenreRepository();

class GenreService {

  constructor(){}

  async find(){
    return await genreRepository.find();
  }
  async findOne(identifier){
    return await genreRepository.findOne(identifier);
  }

  async create(data){
    return await genreRepository.create(data);
  }

  async update(identifier, changes){
    const genre = await genreRepository.findOne(identifier);
    if(!genre){
      throw new Error('Movie not found')
    }
    return await genreRepository.update(identifier, changes);
  }
}



module.exports = GenreService;
