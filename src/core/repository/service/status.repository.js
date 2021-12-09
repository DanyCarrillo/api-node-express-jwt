const { models } = require('../../../libs/sequelize');
class StatusRepository{

  async find(){
    return await models.Status.findAll()
  }

  async findOne(identifier){
    return await models.Status.findOne({
      where: { id: identifier}
    })
  }

  async create(data){
    return await models.Status.create(data);
  }

  async update(identifier, changes){
    const status = await this.findOne(identifier);
    return  await status.update(changes)
  }

}

module.exports = StatusRepository;
