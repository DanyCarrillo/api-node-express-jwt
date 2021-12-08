const { models } = require('../../../libs/sequelize');
const NUMBERS = require('../../../utils/constants/numbers.constants');

class StatusRepository{

  async find(){
    return await models.Status.findAll()
  }

}

module.exports = StatusRepository;
