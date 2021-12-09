const NUMBERS = require('../../../utils/constants/numbers.constants');
const CustomerMovieRepository = require('../../repository/service/customer-movie.repository');
const customerMovieRepository = new CustomerMovieRepository();
class CustomerMovieService {
  constructor(){}

  async find(){
    return await customerMovieRepository.find();
  }

  async findOne(identifier){
    return await customerMovieRepository.findOne(identifier);
  }

  async create(data){
    data.statusId = NUMBERS.ONE;
    return await customerMovieRepository.create(data);
  }

  async update(identifier, changes){
    const customer = await customerMovieRepository.findOne(identifier);
    if(!customer){
      throw new Error('customer not found')
    }
    return await customerMovieRepository.update(identifier, changes);
  }

  async delete(identifier){
    const customer = await customerMovieRepository.findOne(identifier);
    if(!customer){
      throw new Error('customer not found')
    }
    return await customerMovieRepository.delete(identifier);
  }
}

module.exports = CustomerMovieService;
