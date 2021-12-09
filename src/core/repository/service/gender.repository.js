const { models } = require('../../../libs/sequelize');
class GenderRepository{

  async find(){
    return await models.Gender.findAll()
  }


  async findOne(identifier){
    return await models.Gender.findOne({
      where: { id: identifier}
    })
  }

  async create(data){
    return await models.Gender.create(data);
  }

  async update(identifier, changes){
    const gender = await this.findOne(identifier);
    return  await gender.update(changes)
  }


}

module.exports = GenderRepository;
