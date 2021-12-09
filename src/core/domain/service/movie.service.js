const NUMBERS = require('../../../utils/constants/numbers.constants');
const MovieRepository = require('../../repository/service/movie.repository');
const movieRepository = new MovieRepository();

class MovieService {
  constructor(){}

  async find(){
    return await movieRepository.find();
  }

  async findOne(identifier){
    return await movieRepository.findOne(identifier);
  }

  async create(data){
    data.statusId = NUMBERS.ONE;
    return await movieRepository.create(data);
  }

  async update(identifier, changes){
    const movie = await movieRepository.findOne(identifier);
    if(!movie){
      throw new Error('Movie not found')
    }
    return await movieRepository.update(identifier, changes);
  }

  async delete(identifier){
    const movie = await movieRepository.findOne(identifier);
    if(!movie){
      throw new Error('Movie not found')
    }
    return await movieRepository.delete(identifier);
  }
}

module.exports = MovieService;
