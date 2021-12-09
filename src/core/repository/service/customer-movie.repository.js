const { models } = require('../../../libs/sequelize');
const NUMBERS = require('../../../utils/constants/numbers.constants');

class CusotmerMovieRepository{

  async find(){
    return await models.Customer.findAll()
  }

  async findOne(identifier){
    return await models.Customer.findOne({
      where: { id: identifier}
    })
  }

  async create(data){
    return await models.Customer.create(data);
  }

  async update(identifier, changes){
    const customer = await this.findOne(identifier);
    return  await customer.update(changes)
  }

  async delete(identifier){
    const customer = await this.findOne(identifier);
    return await customer.update({statusId: NUMBERS.TWO});
  }

}

module.exports = CusotmerMovieRepository;
