const { models } = require('../../../libs/sequelize');
const NUMBERS = require('../../../utils/constants/numbers.constants');

class MovieRepository{

  constructor(){}

  async find(){
    return await models.Movies.findAll()
  }

  async findOne(identifier){
    return await models.Movies.findOne({
      where: { id: identifier, statusId: NUMBERS.ONE }

    })
  }

  async create(data){
    return await models.Movies.create(data);
  }

  async update(identifier, changes){
    const movie = await this.findOne(identifier);
    return  await movie.update(changes)
  }

  async delete(identifier){
    const movie = await this.findOne(identifier);
    return await movie.update({statusId: NUMBERS.TWO});
  }

}

module.exports = MovieRepository;
