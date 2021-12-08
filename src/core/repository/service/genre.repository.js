const { models } = require('../../../libs/sequelize');
const NUMBERS = require('../../../utils/constants/numbers.constants');

class GenreRepository{

  async find(){
    return await models.Genre.findAll()
  }

}

module.exports = GenreRepository;
