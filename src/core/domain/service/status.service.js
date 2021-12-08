const StatusRepository = require('../../repository/service/status.repository');
const statusRepository = new StatusRepository();

class StatusService {
  async find(){
    return await statusRepository.find();
  }
}

module.exports = StatusService;
