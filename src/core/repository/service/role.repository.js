const { models } = require('../../../libs/sequelize');
const NUMBERS = require('../../../utils/constants/numbers.constants');

class RoleRepository{

  async find(){
    return await models.Role.findAll()
  }

}

module.exports = RoleRepository;
