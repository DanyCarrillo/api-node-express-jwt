const RoleRepository = require('../../repository/service/role.repository');
const roleRepository = new RoleRepository();

class RoleService {
  async find(){
    return await roleRepository.find();
  }
}

module.exports = RoleService;
