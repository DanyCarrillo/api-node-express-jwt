const RoleRepository = require('../../repository/service/role.repository');
const roleRepository = new RoleRepository();

class RoleService {
  constructor(){}
  async find(){
    return await roleRepository.find();
  }
  async findOne(identifier){
    return await roleRepository.findOne(identifier);
  }

  async create(data){
    return await roleRepository.create(data);
  }

  async update(identifier, changes){
    const role = await roleRepository.findOne(identifier);
    if(!role){
      throw new Error('Movie not found')
    }
    return await roleRepository.update(identifier, changes);
  }
}

module.exports = RoleService;
