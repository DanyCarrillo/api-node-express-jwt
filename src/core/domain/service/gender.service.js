const GenderRepository = require('../../repository/service/gender.repository');
const genderRepository = new GenderRepository();

class GenderService {
  async find(){
    return await genderRepository.find();
  }
}

module.exports = GenderService;
