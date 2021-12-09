const { models } = require('../../../libs/sequelize');

class RoleRepository{

  async find(){
    return await models.Role.findAll()
  }

  async findOne(identifier){
    return await models.Role.findOne({
      where: { id: identifier}
    })
  }

  async create(data){
    return await models.Role.create(data);
  }

  async update(identifier, changes){
    const role = await this.findOne(identifier);
    return  await role.update(changes)
  }


}

module.exports = RoleRepository;
