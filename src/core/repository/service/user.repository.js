const { models } = require('../../../libs/sequelize');
const NUMBERS = require('../../../utils/constants/numbers.constants');

class UserRepository{

  async find(){
    return await models.User.findAll({
      where: { statusId: NUMBERS.ONE }
    })
  }

  async findOne(identifier){
    return await models.User.findOne({
      where: { id: identifier }
    })
  }

  async findByEmail(email){
    return await models.User.findOne({
      where: { email}
    })
  }

  async create(data){
    return await models.User.create(data);
  }

  async update(identifier, changes){
    const user = await this.findOne(identifier);
    return  await user.update(changes)
  }

  async delete(identifier){
    const user = await this.findOne(identifier);
    return await user.update({statusId: NUMBERS.TWO});
  }

  async disable(identifier){
    const user = await this.findOne(identifier);
    return await user.update({statusId: NUMBERS.THREE});
  }
}

module.exports = UserRepository;
