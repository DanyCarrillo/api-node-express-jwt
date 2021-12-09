const GenderRepository = require('../../repository/service/gender.repository');
const genderRepository = new GenderRepository();

class GenderService {

  constructor(){}

  async find(){
    return await genderRepository.find();
  }
  async findOne(identifier){
    return await genderRepository.findOne(identifier);
  }

  async create(data){
    return await genderRepository.create(data);
  }

  async update(identifier, changes){
    const gender = await genderRepository.findOne(identifier);
    if(!gender){
      throw new Error('Movie not found')
    }
    return await genderRepository.update(identifier, changes);
  }

}

module.exports = GenderService;
