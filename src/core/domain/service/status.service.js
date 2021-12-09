const StatusRepository = require('../../repository/service/status.repository');
const statusRepository = new StatusRepository();

class StatusService {
  constructor(){}
  async find(){
    return await statusRepository.find();
  }
  async findOne(identifier){
    return await statusRepository.findOne(identifier);
  }

}

module.exports = StatusService;

