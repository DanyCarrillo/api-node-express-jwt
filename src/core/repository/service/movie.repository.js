const { models } = require('../../../libs/sequelize');
const NUMBERS = require('../../../utils/constants/numbers.constants');

class MovieRepository{

  async find(){
    return await models.Status.findAll()
  }

}

module.exports = MovieRepository;
