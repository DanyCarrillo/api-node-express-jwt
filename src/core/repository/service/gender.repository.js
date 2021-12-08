const { models } = require('../../../libs/sequelize');
const NUMBERS = require('../../../utils/constants/numbers.constants');

class GenderRepository{

  async find(){
    return await models.Gender.findAll()
  }

}

module.exports = GenderRepository;
